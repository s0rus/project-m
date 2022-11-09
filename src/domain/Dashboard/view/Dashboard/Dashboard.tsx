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
    <>
            {isChatOn && isMediumDown && <TwitchChat />}
    <DashboardWrapper>
      <DashboardContainer>
        <Grid container>
          <Grid item xs={12}>
                    <DashboardBar />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
            <Grid item sm={12} md={8} style={{minWidth: isMediumDown ? '100%' : '20%'}} >
                    <Playlist />
              </Grid>
              <Grid item sm={12} md={4} style={{minWidth: isMediumDown ? '100%' : '20%'}} >
                    <Settings />
              </Grid>
            </Grid>
            </Grid>
          </Grid>
      </DashboardContainer>
    </DashboardWrapper>
    <Navigation/>
    </>
  );
};

export default Dashboard;