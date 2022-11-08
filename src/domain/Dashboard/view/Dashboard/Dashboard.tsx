import { Grid, useMediaQuery  } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import DashboardBar from '../../components/DashboardBar';
import Playlist from '@/domain/Playlist/view/Playlist';
import React from 'react';
import Navigation from '@/domain/Navigation';
import Settings from '../../components/Settings';
import { theme } from '@/styles/theme';
import { useAddonsContext } from '@/contexts/AddonsContext';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';

const Dashboard = () => {
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  const { isChatOn } = useAddonsContext();

  return (
    <div>
    <DashboardWrapper>
      <DashboardContainer>
        <Grid container>
          <Grid item xs={12}>
                    <DashboardBar />
          </Grid>
          {isChatOn && isMediumDown && <TwitchChat />}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item sm={12} md={8}>
                    <Playlist />
              </Grid>
              <Grid item sm={12} md={4}>
                    <Settings />
              </Grid>
            </Grid>
            </Grid>
          </Grid>
      </DashboardContainer>
      <Navigation/>
    </DashboardWrapper>
</div>
  );
};

export default Dashboard;