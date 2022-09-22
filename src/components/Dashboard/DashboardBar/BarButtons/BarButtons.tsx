import { Button, Hidden } from '@mui/material';
import { LogoutRounded, PlaylistAddRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

import AddVideoModal from '../../AddVideoModal';
import ButtonWithLoader from '@/components/shared/ButtonWithLoader';
import { Twitch } from '@/assets/logos/Twitch';
import { useTranslation } from 'react-i18next';

const BarButtons = () => {
  const { t } = useTranslation();
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
    <>
      {session && status === 'authenticated' ? (
        <>
          <Hidden lgDown>
            <Button onClick={handleOpen} variant='contained' size='large' startIcon={<PlaylistAddRounded />}>
              {t('video.add')}
            </Button>
            <ButtonWithLoader
              onClick={handleTwitchLogout}
              loading={authLoading}
              disabled={authLoading}
              variant='contained'
              startIcon={<LogoutRounded />}
            >
              {t('logOut')}
            </ButtonWithLoader>
          </Hidden>
          <Hidden lgUp>
            <Button variant='contained' size='large' onClick={handleOpen}>
              <PlaylistAddRounded />
            </Button>
            <ButtonWithLoader
              onClick={handleTwitchLogout}
              loading={authLoading}
              disabled={authLoading}
              variant='contained'
              iconVariant
            >
              <LogoutRounded />
            </ButtonWithLoader>
          </Hidden>
          <AddVideoModal handleClose={handleClose} open={modalOpen} />
        </>
      ) : (
        <>
          <Hidden lgDown>
            <ButtonWithLoader
              onClick={handleTwitchLogin}
              loading={authLoading}
              disabled={authLoading}
              variant='contained'
              startIcon={<Twitch />}
            >
              {t('logIn')}
            </ButtonWithLoader>
          </Hidden>
          <Hidden lgUp>
            <ButtonWithLoader
              onClick={handleTwitchLogin}
              loading={authLoading}
              disabled={authLoading}
              variant='contained'
              iconVariant
            >
              <Twitch />
            </ButtonWithLoader>
          </Hidden>
        </>
      )}
    </>
  );
};
export default BarButtons;
