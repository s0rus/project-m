import { Button, Hidden } from '@mui/material';
import { PlaylistAddRounded } from '@mui/icons-material';
import React, { useState } from 'react';

import AddVideoModal from '../AddVideoModal';
import ButtonWithLoader from '@/domain/App/components/ButtonWithLoader';
import ButtonsSkeleton from '../../skeletons/ButtonsSkeleton';
import { Twitch } from '@/assets/logos/Twitch';
import { useTranslation } from 'react-i18next';
import { useAuthChange } from '@/domain/App/hooks/useAuthChange';
import { usePlaylistStore } from '@/domain/Playlist/store/Playlist.store';
import { useVideoPlayer } from '@/domain/VideoPlayer/hooks/useVideoPlayer';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useAuthStore } from '@/domain/App/store/Auth.store';

const BarButtons = () => {
  const { t } = useTranslation();
  const { isAuthLoading, isAuthChanging, isLoggedIn, loginWithTwitch } = useAuthChange();
  const { currentVideo } = usePlaylistStore();
  const isPlaylistLocked = usePlaylistStore((state) => state.isPlaylistLocked);
  const [modalOpen, setModalOpen] = useState(false);
  const isAdmin = useAuthStore((state) => state.isAdmin());
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const { handleOnVideoSkip } = useVideoPlayer();

  if (isAuthLoading) return <ButtonsSkeleton />;

  return (
    <>
      {isLoggedIn ? (
        <>
          <Hidden lgDown>
            {isAdmin && (
              <Button
                onClick={() => handleOnVideoSkip()}
                variant='contained'
                size='large'
                startIcon={<SkipNextIcon />}
                disabled={!currentVideo}
              >
                {t('video.skip')}
              </Button>
            )}
            <Button
              onClick={handleOpen}
              disabled={isPlaylistLocked && !isAdmin}
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
                onClick={() => handleOnVideoSkip()}
                variant='contained'
                size='large'
                startIcon={<SkipNextIcon />}
              ></Button>
            )}
            <Button variant='contained' size='large' onClick={handleOpen} disabled={isPlaylistLocked && !isAdmin}>
              <PlaylistAddRounded />
            </Button>
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
