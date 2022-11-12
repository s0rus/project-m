import { Button, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';

import AdminPanel from '../components/AdminPanel';
import DashboardBar from '../components/DashboardBar';
import Playlist from '@/domain/Playlist/view/Playlist';
import Settings from '../components/Settings';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
import { theme } from '@/styles/theme';
import { toast } from 'react-toastify';
import { useAddonsContext } from '@/domain/App/context/Addons.context';
import { useAuthContext } from '@/domain/App/context/Auth.context';
import { usePlayerContext } from '@/domain/VideoPlayer/context/VideoPlayer.context';
import { usePlaylistContext } from '@/domain/Playlist/context/Playlist.context';
import { useSocketContext } from '@/domain/App/context/Socket.context';
import { useTranslation } from 'react-i18next';
import Schedule from '@/domain/Schedule/view/';

const Dashboard = () => {
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  const { leader } = useSocketContext();
  const { isAdmin } = useAuthContext();
  const { isChatOn } = useAddonsContext();
  const { t } = useTranslation();
  const { handleOnVideoSkip } = usePlayerContext();
  const { togglePlaylistLocked } = usePlaylistContext();

  return (
    <DashboardWrapper>
      {isChatOn && isMediumDown && <TwitchChat />}
      <DashboardContainer>
        <Grid container>
          <Grid item xs={12}>
            <DashboardBar />
          </Grid>
          <Grid item xs={12}>
            <Grid container sx={{ mt: '1rem', height: '100%' }} spacing={2}>
              <Grid item xs={12} sm={12} md={7} sx={{ pt: '0!important' }}>
                <Playlist />
              </Grid>
              <Grid item sm={12} md={5} sx={{ pt: '0!important' }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Schedule />
                  </Grid>
                  {isAdmin && (
                    <Grid item xs={12}>
                      <AdminPanel />
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <Settings />
                  </Grid>
                  <Grid item xs={12}>
                    <Paper sx={{ height: '500px' }}>
                      <Typography>__debug options__</Typography>
                      <Button variant='contained' onClick={() => handleOnVideoSkip()}>
                        Skip video
                      </Button>
                      <Button variant='contained' onClick={() => toast(`${t('genericErrorMessage')}`)}>
                        Request Toast
                      </Button>
                      <Button variant='contained' onClick={() => togglePlaylistLocked()}>
                        Toggle Playlist
                      </Button>
                      isAdmin: {isAdmin ? 'yup' : 'nopers'}
                      <br />
                      currentLeader: {JSON.stringify(leader, null, 2)}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
