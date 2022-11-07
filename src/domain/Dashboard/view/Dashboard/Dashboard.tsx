import { Grid, useMediaQuery  } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import DashboardBar from '../../components/DashboardBar';
import Playlist from '@/domain/Playlist/view/Playlist';
import React from 'react';
import Navigation from '@/domain/Navigation';
import Settings from '../../components/Settings';
import { theme } from '@/styles/theme';
import { useAddonsContext } from '@/domain/App/context/Addons.context';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';

const Dashboard = () => {
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  const { isChatOn } = useAddonsContext();

  return (
    <DashboardWrapper>
                {isChatOn && isMediumDown && <TwitchChat/>}
      <DashboardContainer>
        <Grid container>
          <Grid item xs={12}>
                    <DashboardBar />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item sm={12} md={8} style={{minWidth: isMediumDown ? '100%' : '20%', paddingLeft: '1rem'}} >
                    <Playlist />
              </Grid>
              <Grid item sm={12} md={4} style={{minWidth: isMediumDown ? '100%' : '20%', paddingRight: '0rem'}} >
                    <Settings/>
              </Grid>
            </Grid>
            </Grid>
          </Grid>
      </DashboardContainer>
      <Navigation/>
    </DashboardWrapper>
  );
};

export default Dashboard;