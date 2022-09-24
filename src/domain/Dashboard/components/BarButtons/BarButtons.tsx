import { Button, Hidden } from '@mui/material';
import { LogoutRounded, PlaylistAddRounded } from '@mui/icons-material';
import React, { useState } from 'react';

import AddVideoModal from '../AddVideoModal';
import ButtonWithLoader from '@/components/shared/ButtonWithLoader';
import ButtonsSkeleton from '../../skeletons/ButtonsSkeleton';
import { Twitch } from '@/assets/logos/Twitch';
import useAuth from '@/hooks/useAuth';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useTranslation } from 'react-i18next';

const BarButtons = () => {
  const { t } = useTranslation();
  const { isLoggedIn, isAuthLoading, authChange, loginWithTwitch, logoutOfTwitch } = useAuth();
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
              disabled={playlistLocked}
              variant='contained'
              size='large'
              startIcon={<PlaylistAddRounded />}
            >
              {t('video.add')}
            </Button>
            <ButtonWithLoader
              onClick={logoutOfTwitch}
              loading={authChange}
              disabled={authChange}
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
              onClick={logoutOfTwitch}
              loading={authChange}
              disabled={authChange}
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
              loading={authChange}
              disabled={authChange}
              variant='contained'
              startIcon={<Twitch />}
            >
              {t('logIn')}
            </ButtonWithLoader>
          </Hidden>
          <Hidden lgUp>
            <ButtonWithLoader
              onClick={loginWithTwitch}
              loading={authChange}
              disabled={authChange}
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
