import { Button, Hidden } from '@mui/material';
import { LogoutRounded, PlaylistAddRounded } from '@mui/icons-material';
import React, { useState } from 'react';

import AddVideoModal from '../AddVideoModal';
import ButtonWithLoader from '@/domain/App/components/ButtonWithLoader';
import ButtonsSkeleton from '../../skeletons/ButtonsSkeleton';
import { Twitch } from '@/assets/logos/Twitch';
import { useTranslation } from 'react-i18next';
import { useAuthChange } from '@/domain/App/hooks/useAuthChange';
import { usePlaylistStore } from '@/domain/Playlist/store/Playlist.store';

const BarButtons = () => {
  const { t } = useTranslation();
  const { loginWithTwitch, logoutOfTwitch, isAuthLoading, isAuthChanging, isLoggedIn, isAdmin } = useAuthChange();

  const isPlaylistLocked = usePlaylistStore((state) => state.isPlaylistLocked);
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
              disabled={isPlaylistLocked && !isAdmin}
              variant='contained'
              size='large'
              startIcon={<PlaylistAddRounded />}
            >
              {t('video.add')}
            </Button>
            <ButtonWithLoader
              onClick={logoutOfTwitch}
              loading={isAuthChanging || isAuthLoading}
              disabled={isAuthChanging || isAuthLoading}
              variant='contained'
              startIcon={<LogoutRounded />}
            >
              {t('logOut')}
            </ButtonWithLoader>
          </Hidden>
          <Hidden lgUp>
            <Button variant='contained' size='large' onClick={handleOpen} disabled={isPlaylistLocked && !isAdmin}>
              <PlaylistAddRounded />
            </Button>
            <ButtonWithLoader
              onClick={logoutOfTwitch}
              loading={isAuthChanging || isAuthLoading}
              disabled={isAuthChanging || isAuthLoading}
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
              loading={isAuthChanging || isAuthLoading}
              disabled={isAuthChanging || isAuthLoading}
              variant='contained'
              startIcon={<Twitch />}
            >
              {t('logIn')}
            </ButtonWithLoader>
          </Hidden>
          <Hidden lgUp>
            <ButtonWithLoader
              onClick={loginWithTwitch}
              loading={isAuthChanging || isAuthLoading}
              disabled={isAuthChanging || isAuthLoading}
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
