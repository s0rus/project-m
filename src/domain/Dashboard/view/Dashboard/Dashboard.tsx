import { Grid } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import DashboardBar from '../../components/DashboardBar';
import Playlist from '@/domain/Playlist/view/Playlist';
import React from 'react';
import Navigation from '@/domain/Navigation';
import Settings from '../../components/Settings';

const Dashboard = () => {
  
  return (
    <DashboardWrapper>
      <DashboardContainer>
        <Grid container>
          <Grid item xs={12}>
            <DashboardBar />
          </Grid>
          <Grid item xs={12}>
            <Grid container sx={{ mt: '1rem', height: '100%' }} spacing={2}>
              <Grid item sm={12} md={8}>
                <Playlist />
              </Grid>
                    <Settings />
              </Grid>
            </Grid>
          </Grid>
      </DashboardContainer>
      <Navigation/>
    </DashboardWrapper>
  );
};

export default Dashboard;