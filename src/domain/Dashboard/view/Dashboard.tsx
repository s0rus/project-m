import { Grid, useMediaQuery } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';

import AdminPanel from '../components/AdminPanel';
import DashboardBar from '../components/DashboardBar';
import Playlist from '@/domain/Playlist/view/Playlist';
import Settings from '../components/Settings';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
import Navigation from '@/domain/Navigation';
import { theme } from '@/styles/theme';
import { useAddonsContext } from '@/domain/App/context/Addons.context';
import { useTranslation } from 'react-i18next';
import { useVideoPlayer } from '@/domain/VideoPlayer/hooks/useVideoPlayer';
import { useAuthStore } from '@/domain/App/store/Auth.store';
import { useSocketStore } from '@/domain/App/store/Socket.store';
import { usePlaylistStore } from '@/domain/Playlist/store/Playlist.store';

const Dashboard = () => {
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  const isAdmin = useAuthStore((state) => state.isAdmin());
  const { isChatOn } = useAddonsContext();
  return (
    <>
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
                    {isAdmin && (
                      <Grid item xs={12}>
                        <AdminPanel />
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <Settings />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DashboardContainer>
      </DashboardWrapper>
      <Navigation />
    </>
  );
};

export default Dashboard;
