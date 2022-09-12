import { styled ,Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import TwitchChat from '@/components/TwitchChat';
import ButtonWithLoader from '../shared/ButtonWithLoader';
import Playlist from './Playlist';
import { Twitch } from '@/assets/logos/Twitch';
import { toast } from 'react-toastify';
import { trpc } from '@/utils/trpc';
import TwitchVideo from '@/components/TwitchVideo';

const Dashboard = () => {
  const { mutate } = trpc.useMutation(['protected-playlist.add-video']);
  const { data: session, status } = useSession();
  const [authLoading, setAuthLoading] = useState(false);
  const [twitchvideo, toggleTwitchVideo] = useState(false);
  const [twitchchat, toggleTwitchChat] = useState(true);

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
      mutate({ videoTitle: 'Louis Villain x Kaz Bałagane - Criminal', videoUrl: 'https://www.youtube.com/watch?v=LI35s14OMmU&ab_channel=MoyaLabel' });
      mutate({ videoTitle: 'WHITE WIDOW - BEEF (PROD. NOLYRICS) [OFFICIAL MUSIC VIDEO]', videoUrl: 'https://www.youtube.com/watch?v=VHn4xavY9CY&ab_channel=WHITEWIDOW' });
      mutate({ videoTitle: 'MACIAS - MAIN CZY PODZIEMIE', videoUrl: 'https://www.youtube.com/watch?v=js5B3xr4QA8&ab_channel=mlodyrafi' });
      mutate({ videoTitle: 'Avi x Kaz Bałagane - Warsaw Vice (prod. @atutowy)', videoUrl: 'https://www.youtube.com/watch?v=tioACk4kn-s&ab_channel=MoyaLabel' });
      toast('Dodano 4 filmy');
    } catch (e) {
      toast.error('Coś poszło nie tak...');
    }
  };

const NavTop = styled('div')`
height: 80px;
width: 100%;
background: #15161c;
border-bottom: 2px solid rgba(98, 46, 255, 0.58);`

  return (
    <DashboardWrapper >
      <NavTop/>
      <DashboardContainer style={{marginTop: '-70px'}} maxWidth='xl'>
        <Grid container>
          <Grid item xs={12}>
            <Stack flexDirection='row' justifyContent='space-between' alignItems='center' sx={{ mt: '0.5rem' }}>
              <Typography variant='h1'>Playlista</Typography>
              <Button variant='contained' onClick={handleFourVideos}>
                    Add 4 videos to Q
                  </Button>
              <Box sx={{ width: '20%', display: 'flex', justifyContent: 'flex-end' }}>
                {session && status === 'authenticated' ? (
                  <Stack flexDirection='row' width='100%' gap='0.5rem'>
                    <ButtonWithLoader
                      onClick={handleTwitchLogout}
                      loading={authLoading}
                      disabled={authLoading}
                      variant='contained'
                      fullWidth style={{background: 'red'}}
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
              <Paper sx={{ marginTop: '25px', height: '100px', width: '100%' }}>
                  <Button onClick={() => toggleTwitchVideo((prev) => !prev) } style={{height: '50px', width: '100%', }} >Kamerka</Button>
                  <Button onClick={() => toggleTwitchChat((prev) => !prev) } style={{height: '50px', width: '100%', }} >Czat</Button>
              </Paper>
              <Box> { twitchvideo && <TwitchVideo/> }</Box> 
              </Grid>
            </Grid>
          </Grid> 
        </Grid>
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
