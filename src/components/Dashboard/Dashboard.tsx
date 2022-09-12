import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

import ButtonWithLoader from '../shared/ButtonWithLoader';
import Playlist from './Playlist';
import { Twitch } from '@/assets/logos/Twitch';
import { toast } from 'react-toastify';
import { trpc } from '@/utils/trpc';

const Dashboard = () => {
  const { mutate } = trpc.useMutation(['protected-playlist.add-video']);
  const { data: session, status } = useSession();
  const [authLoading, setAuthLoading] = useState(false);

  const handleTwitchLogin = async () => {
    setAuthLoading(true);
    await signIn('twitch');
  };

  const handleTwitchLogout = async () => {
    setAuthLoading(true);
    await signOut();
  };

  const handleFourVideos = async () => {
    try {
      mutate({ videoTitle: 'infinity xD', videoUrl: 'https://www.youtube.com/watch?v=PWqEPKduGm8' });
      mutate({ videoTitle: 'i just wanna dance dude', videoUrl: 'https://www.youtube.com/watch?v=9nrEaHinGmY' });
      mutate({ videoTitle: 'baseeed', videoUrl: 'https://www.youtube.com/watch?v=8esxRCOQ0pM' });
      mutate({ videoTitle: 'rebel', videoUrl: 'https://www.youtube.com/watch?v=AGsjA1pXajk' });
      toast('debug: added 4 videos to Q');
    } catch (e) {
      toast.error('Coś poszło nie tak...');
    }
  };

  return (
    <DashboardWrapper>
      <DashboardContainer maxWidth='xl'>
        <Grid container>
          <Grid item xs={12}>
            <Stack flexDirection='row' justifyContent='space-between' alignItems='center' sx={{ mt: '0.5rem' }}>
              <Typography variant='h1'>Playlista</Typography>
              <Box sx={{ width: '25%', display: 'flex', justifyContent: 'flex-end' }}>
                {session && status === 'authenticated' ? (
                  <Stack flexDirection='row' width='100%' gap='0.5rem'>
                    <ButtonWithLoader
                      onClick={handleTwitchLogout}
                      loading={authLoading}
                      disabled={authLoading}
                      variant='contained'
                      fullWidth
                    >
                      DODAJ FILM
                    </ButtonWithLoader>
                    <ButtonWithLoader
                      onClick={handleTwitchLogout}
                      loading={authLoading}
                      disabled={authLoading}
                      variant='contained'
                      fullWidth
                    >
                      WYLOGUJ SIĘ
                    </ButtonWithLoader>
                  </Stack>
                ) : (
                  <ButtonWithLoader
                    onClick={handleTwitchLogin}
                    loading={authLoading}
                    disabled={authLoading}
                    variant='contained'
                    startIcon={<Twitch />}
                    fullWidth
                  >
                    ZALOGUJ SIĘ
                  </ButtonWithLoader>
                )}
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Grid container sx={{ mt: '1rem', height: '100%' }} spacing={2}>
              <Grid item sm={12} md={8}>
                <Playlist />
              </Grid>
              <Grid item sm={12} md={4}>
                <Paper sx={{ height: '500px' }}>
                  <Typography>__debug optons__</Typography>
                  <Button variant='contained' onClick={handleFourVideos}>
                    Add 4 videos to Q
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
