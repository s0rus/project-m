import { styled ,Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import { H5dashboard, H6dashboard, H4dashboard, NavTop } from '@/styles/style';
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import TwitchChat from '@/components/TwitchChat';
import ButtonWithLoader from '../shared/ButtonWithLoader';
import Playlist from './Playlist';
import { Twitch } from '@/assets/logos/Twitch';
import { toast } from 'react-toastify';
import { trpc } from '@/utils/trpc';
import TwitchVideo from '@/components/TwitchVideo';
import ChatIcon from '@mui/icons-material/Chat';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Checkbox from '@mui/material/Checkbox';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
const {Resizable} = require('react-resizable');

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
      mutate({ videoTitle: 'WHITE WIDOW - BEEF', videoUrl: 'https://www.youtube.com/watch?v=VHn4xavY9CY&ab_channel=WHITEWIDOW' });
      mutate({ videoTitle: 'MACIAS - MAIN CZY PODZIEMIE', videoUrl: 'https://www.youtube.com/watch?v=js5B3xr4QA8&ab_channel=mlodyrafi' });
      toast('Dodano filmy');
    } catch (e) {
      toast.error('Coś poszło nie tak...');
    }
  };

  class Example extends React.Component {
    state = {
      width: 200,
      height: 200,
    };}


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <DashboardWrapper >
      <NavTop/>
      <DashboardContainer style={{marginTop: '-70px'}} maxWidth='xl'>
        <Grid container>
          <Grid item xs={12}>
            <Stack flexDirection='row' justifyContent='space-between' alignItems='center' sx={{ mt: '0.5rem' }}>
              <Typography variant='h1'>Playlista</Typography>
              <Button variant='contained' onClick={handleFourVideos}>
                    Dodaj filmy --debug
                  </Button>
              <Box sx={{ width: '21%', display: 'flex', justifyContent: 'flex-end' }}>
              {session && status === 'authenticated' && (
                    <ButtonWithLoader
                      onClick={handleTwitchLogout}
                      loading={authLoading}
                      disabled={authLoading}
                      variant='contained'
                      fullWidth 
                      style={{ maxWidth: '150px',background: '#10732d', padding: '10px', borderRadius: '30px'}}
                    >
                      <AddTaskIcon style={{marginRight: '10px'}} />
                      DODAJ FILM
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
              <Paper sx={{ height: '152px', width: '100%' }}>
                  <Button style={{ cursor: 'context-menu', height: '50px', width: '100%', }} ><CameraAltIcon style={{marginRight: '10px', color: '#6430ff',}} /><H4dashboard>Kamerka</H4dashboard> <H5dashboard>➜</H5dashboard> <H6dashboard>Włącz/Wyłącz widoczność kamerki</H6dashboard><Checkbox style={{color: '#10732d',}} onClick={() => toggleTwitchVideo((prev) => !prev) } {...label} /></Button>
                  <Button style={{ cursor: 'context-menu', height: '50px', width: '100%', }} ><ChatIcon style={{marginRight: '10px', color: '#6430ff',}} /><H4dashboard>Czat</H4dashboard> <H5dashboard>➜</H5dashboard> <H6dashboard>Włącz/Wyłącz widoczność czatu</H6dashboard><Checkbox style={{color: '#10732d',}} onClick={() => toggleTwitchChat((prev) => !prev) } {...label} defaultChecked /></Button>
                  {session && status === 'authenticated' ? (
                  <Stack flexDirection='row' width='100%' gap='0.5rem'>
                    <ButtonWithLoader
                      onClick={handleTwitchLogout}
                      loading={authLoading}
                      disabled={authLoading}
                      variant='contained'
                    >
                      <LogoutIcon style={{ color: 'red', marginRight: '10px'}} />
                      WYLOGUJ
                    </ButtonWithLoader>
                  </Stack>
                ) : (
                  <ButtonWithLoader
                    onClick={handleTwitchLogin}
                    loading={authLoading}
                    disabled={authLoading}
                    variant='contained'
                  >
                    <LoginIcon style={{ color: '#10732d', marginRight: '10px'}} />
                    Zaloguj
                  </ButtonWithLoader>
                )}
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
