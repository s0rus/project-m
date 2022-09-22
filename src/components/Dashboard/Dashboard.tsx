import { Button, Grid, Paper, Typography } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';

import DashboardBar from './DashboardBar';
import Playlist from './Playlist';
import React from 'react';
import { toast } from 'react-toastify';
import { usePlayerContext } from '@/contexts/PlayerContext';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();
  const { handleOnEnd } = usePlayerContext();

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
