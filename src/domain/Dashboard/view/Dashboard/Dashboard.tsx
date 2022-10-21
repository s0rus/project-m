import { Grid, Hidden } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import DashboardBar from '../../components/DashboardBar';
import Playlist from '@/domain/Playlist/view/Playlist';
import React from 'react';
import Navigation from '@/domain/Navigation';
import Settings from '../../components/Settings';

const Dashboard = () => {
  
  return (
    <div>
    <Hidden lgDown >
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
              <Grid item sm={12} md={4}>
                    <Settings />
              </Grid>
              </Grid>
            </Grid>
          </Grid>
      </DashboardContainer>
      <Navigation/>
    </DashboardWrapper>
    </Hidden>

<Hidden lgUp >
<DashboardWrapper>
  <DashboardContainer>
    <Grid container>
      <Grid item xs={12}>
                <DashboardBar />
                <Playlist />
                <Settings />
      </Grid>
    </Grid>
  </DashboardContainer>
  <Navigation/>
</DashboardWrapper>
</Hidden>
</div>
  );
};

export default Dashboard;
