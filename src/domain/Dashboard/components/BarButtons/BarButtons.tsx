import { Button, Hidden } from '@mui/material';
import { LogoutRounded, PlaylistAddRounded } from '@mui/icons-material';
import React, { useState } from 'react';

import AddVideoModal from '../AddVideoModal';
import ButtonWithLoader from '@/domain/App/components/ButtonWithLoader';
import ButtonsSkeleton from '../../skeletons/ButtonsSkeleton';
import { Twitch } from '@/assets/logos/Twitch';
import { useAuthContext } from '@/domain/App/context/Auth.context';
import { usePlaylistContext } from '@/domain/Playlist/context/Playlist.context';
import { useTranslation } from 'react-i18next';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import SkipNextIcon from '@mui/icons-material/SkipNext';
const BarButtons = () => {
  const { t } = useTranslation();
  const { isAdmin, isLoggedIn, isAuthLoading, authChange, loginWithTwitch } = useAuthContext();
  const { playlistLocked, currentVideo } = usePlaylistContext();
  const { handleOnVideoSkip } = usePlayerContext();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  if (isAuthLoading) return <ButtonsSkeleton />;

  return (
    <>
      {isLoggedIn ? (
        <>
          <Hidden lgDown>
            {isAdmin && (
              <Button
                sx={{ width: '150px' }}
                onClick={handleOnVideoSkip}
                disabled={!currentVideo}
                variant='contained'
                size='large'
                startIcon={<SkipNextIcon />}
              >
                {t('video.skip')}
              </Button>
            )}
            <Button
              sx={{ width: '150px' }}
              onClick={handleOpen}
              disabled={playlistLocked && !isAdmin}
              variant='contained'
              size='large'
              startIcon={<PlaylistAddRounded />}
            >
              {t('video.add')}
            </Button>
          </Hidden>
          <Hidden lgUp>
            {isAdmin && (
              <Button
                sx={{ width: '150px' }}
                onClick={handleOnVideoSkip}
                disabled={!currentVideo}
                variant='contained'
                size='large'
                startIcon={<SkipNextIcon />}
              ></Button>
            )}
            <Button
              variant='contained'
              sx={{ width: '150px' }}
              size='large'
              onClick={handleOpen}
              disabled={playlistLocked && !isAdmin}
            >
              <PlaylistAddRounded />
            </Button>
          </Hidden>
          <AddVideoModal handleClose={handleClose} open={modalOpen} />
        </>
      ) : (
        <>
          <Hidden lgDown>
            <ButtonWithLoader
              sx={{ width: '150px' }}
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
              sx={{ width: '150px' }}
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
