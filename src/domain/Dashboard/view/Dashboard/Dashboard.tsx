import { Button, Grid, Paper, Typography } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import React, { useEffect, useState } from 'react';

import DashboardBar from '../../components/DashboardBar';
import Playlist from '@/domain/Playlist/view/Playlist';
import { UserData } from '@/server/sockets/SocketProvider';
import { toast } from 'react-toastify';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useSocketContext } from '@/contexts/SocketContext';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { socket } = useSocketContext();
  const { isAdmin } = useAuthContext();
  const { t } = useTranslation();
  const { handleOnEnd } = usePlayerContext();
  const { togglePlaylistLocked } = usePlaylistContext();
  const [leader, setLeader] = useState<UserData | null>(null);

  useEffect(() => {
    if (!socket) return;

    socket.on('RECEIVE_NEW_LEADER', (userData) => setLeader(userData));
  }, [socket]);

  return (
    <DashboardWrapper>
      <DashboardContainer>
        <Grid container>
          <Grid item xs={12}>
            <DashboardBar />
          </Grid>
          <Grid item xs={12}>
            <Grid container sx={{ mt: '1rem', height: '100%' }} spacing={2}>
              <Grid item sm={12} md={7}>
                <Playlist />
              </Grid>
              <Grid item sm={12} md={5}>
                <Paper sx={{ height: '500px' }}>
                  <Typography>__debug options__</Typography>
                  <Button
                    variant='contained'
                    onClick={() => {
                      handleOnEnd();
                      socket.emit('SKIP_VIDEO');
                    }}
                  >
                    Skip video
                  </Button>
                  <Button variant='contained' onClick={() => toast(`${t('genericErrorMessage')}`)}>
                    Request Toast
                  </Button>
                  <Button variant='contained' onClick={() => togglePlaylistLocked()}>
                    Toggle Playlist
                  </Button>
                  isAdmin: {isAdmin ? 'yup' : 'nopers'}
                  <em>{JSON.stringify(leader)}</em>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
