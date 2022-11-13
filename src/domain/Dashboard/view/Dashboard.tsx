import { Grid, useMediaQuery } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import DashboardBar from '.././components/DashboardBar';
import Playlist from '@/domain/Playlist/view/Playlist';
import React from 'react';
import Settings from '.././components/Settings';
import { theme } from '@/styles/theme';
import { useAuthContext } from '@/domain/App/context/Auth.context';
import AdminPanel from '.././components/AdminPanel';
import Navigation from '@/domain/Navigation';
const Dashboard = () => {
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  const { isAdmin } = useAuthContext();
  return (
    <>
      <DashboardWrapper>
        <DashboardContainer>
          <Grid container>
            <Grid item xs={12}>
              <DashboardBar />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item sm={12} md={8} style={{ minWidth: isMediumDown ? '100%' : '20%' }}>
                  <Playlist />
                </Grid>
                <Grid item sm={12} md={4} style={{ minWidth: isMediumDown ? '100%' : '20%' }}>
                  {isAdmin && <AdminPanel />}
                  <Settings />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DashboardContainer>
        <Navigation />
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
