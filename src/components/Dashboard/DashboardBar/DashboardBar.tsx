import { Box, Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

import AddVideoModal from '../AddVideoModal';
import ButtonWithLoader from '@/components/shared/ButtonWithLoader';
import CurrentVideo from './CurrentVideo/CurrentVideo';
import { Twitch } from '@/assets/logos/Twitch';
import { usePlaylistContext } from '@/contexts/PlaylistContext';

const DashboardBar = () => {
  const { currentVideo } = usePlaylistContext();
  const { data: session, status } = useSession();
  const [authLoading, setAuthLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleTwitchLogin = async () => {
    setAuthLoading(true);
    await signIn('twitch');
  };

  const handleTwitchLogout = async () => {
    setAuthLoading(true);
    await signOut();
  };

  return (
    <Stack flexDirection='row' justifyContent='space-between' alignItems='center' sx={{ mt: '0.5rem' }}>
      <CurrentVideo video={currentVideo} />
      <Box sx={{ width: '25%', display: 'flex', justifyContent: 'flex-end' }}>
        {session && status === 'authenticated' ? (
          <>
            <Stack flexDirection='row' width='100%' gap='0.5rem'>
              <Button onClick={handleOpen} variant='contained' fullWidth>
                DODAJ FILM
              </Button>
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
            <AddVideoModal handleClose={handleClose} open={modalOpen} />
          </>
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
  );
};

export default DashboardBar;
