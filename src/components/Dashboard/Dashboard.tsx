import { Button, Grid, Paper, Typography } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';

import DashboardBar from './DashboardBar';
import Playlist from './Playlist';
import React from 'react';
import { toast } from 'react-toastify';
import { trpc } from '@/utils/trpc';
import { usePlaylistContext } from '@/contexts/PlaylistContext';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();
  const { requestNextVideo } = usePlaylistContext();
  const { mutate } = trpc.useMutation(['protected-playlist.add-video']);

  const handleFourVideos = async () => {
    try {
      mutate({ videoTitle: 'infinity xD', videoUrl: 'https://www.youtube.com/watch?v=PWqEPKduGm8', videoDuration: 0 });
      mutate({
        videoTitle: 'i just wanna dance dude',
        videoUrl: 'https://www.youtube.com/watch?v=9nrEaHinGmY',
        videoDuration: 0,
      });
      mutate({ videoTitle: 'baseeed', videoUrl: 'https://www.youtube.com/watch?v=8esxRCOQ0pM', videoDuration: 0 });
      mutate({ videoTitle: 'rebel', videoUrl: 'https://www.youtube.com/watch?v=AGsjA1pXajk', videoDuration: 0 });
      toast('debug: added 4 videos to Q');
    } catch (e) {
      toast.error(t('genericErrorMessage'));
    }
  };

  return (
    <DashboardWrapper>
      <DashboardContainer maxWidth='xl'>
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
                <Paper sx={{ height: '500px' }}>
                  <Typography>__debug options__</Typography>
                  <Button variant='contained' onClick={handleFourVideos}>
                    Add 4 videos to Q
                  </Button>
                  <Button variant='contained' onClick={requestNextVideo}>
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
