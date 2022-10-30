import { Button, Hidden } from '@mui/material';
import { LogoutRounded, PlaylistAddRounded } from '@mui/icons-material';
import React, { useState } from 'react';

import AddVideoModal from '../AddVideoModal';
import ButtonWithLoader from '@/domain/App/components/ButtonWithLoader';
import ButtonsSkeleton from '../../skeletons/ButtonsSkeleton';
import { Twitch } from '@/assets/logos/Twitch';
import { useAuthContext } from '@/domain/App/context/AuthContext';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useTranslation } from 'react-i18next';

const BarButtons = () => {
  const { t } = useTranslation();
  const { isAdmin, isLoggedIn, isAuthLoading, authChange, loginWithTwitch, logoutOfTwitch } = useAuthContext();
  const { playlistLocked } = usePlaylistContext();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  if (isAuthLoading) return <ButtonsSkeleton />;

  return (
    <>
      {isLoggedIn ? (
        <>
          <Hidden lgDown>
            <Button
              onClick={handleOpen}
              disabled={playlistLocked && !isAdmin}
              variant='contained'
              size='large'
              startIcon={<PlaylistAddRounded />}
            >
              {t('video.add')}
            </Button>
            <ButtonWithLoader
              onClick={logoutOfTwitch}
              loading={authChange || isAuthLoading}
              disabled={authChange || isAuthLoading}
              variant='contained'
              startIcon={<LogoutRounded />}
            >
              {t('logOut')}
            </ButtonWithLoader>
          </Hidden>
          <Hidden lgUp>
            <Button variant='contained' size='large' onClick={handleOpen} disabled={playlistLocked && !isAdmin}>
              <PlaylistAddRounded />
            </Button>
            <ButtonWithLoader
              onClick={logoutOfTwitch}
              loading={authChange || isAuthLoading}
              disabled={authChange || isAuthLoading}
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
              onClick={loginWithTwitch}
              loading={authChange || isAuthLoading}
              disabled={authChange || isAuthLoading}
              variant='contained'
              startIcon={<Twitch />}
            >
              {t('logIn')}
            </ButtonWithLoader>
          </Hidden>
          <Hidden lgUp>
            <ButtonWithLoader
              onClick={loginWithTwitch}
              loading={authChange || isAuthLoading}
              disabled={authChange || isAuthLoading}
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
