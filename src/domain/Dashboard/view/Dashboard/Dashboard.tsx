import { Button, Grid, Paper, Typography } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';

import DashboardBar from '../../components/DashboardBar';
import Playlist from '@/domain/Playlist/view/Playlist';
import React from 'react';
import { toast } from 'react-toastify';
import useAuth from '@/hooks/useAuth';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { isAdmin } = useAuth();
  const { t } = useTranslation();
  const { handleOnEnd } = usePlayerContext();
  const { togglePlaylistLocked } = usePlaylistContext();

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
                  <Button variant='contained' onClick={handleOnEnd}>
                    Skip video
                  </Button>
                  <Button variant='contained' onClick={() => toast(`${t('genericErrorMessage')}`)}>
                    Request Toast
                  </Button>
                  <Button variant='contained' onClick={() => togglePlaylistLocked()}>
                    Toggle Playlist
                  </Button>
                  isAdmin: {isAdmin ? 'yup' : 'nopers'}
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