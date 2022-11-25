import { Button } from '@mui/material';
import { PlaylistAddRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import AddVideoModal from '../AddVideoModal';
import ButtonsSkeleton from '../../skeletons/ButtonsSkeleton';
import { useTranslation } from 'react-i18next';
import { useAuthChange } from '@/domain/App/hooks/useAuthChange';
import { usePlaylistStore } from '@/domain/Playlist/store/Playlist.store';
import { useVideoPlayer } from '@/domain/VideoPlayer/hooks/useVideoPlayer';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useAuthStore } from '@/domain/App/store/Auth.store';
import ButtonWithLoader from '@/domain/App/components/ButtonWithLoader';
import { Twitch } from '@/assets/logos/Twitch';

const BarButtons = () => {
  const { isAuthLoading, isAuthChanging, isLoggedIn, loginWithTwitch } = useAuthChange();
  const { t } = useTranslation();
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
        </>
      ) : (
        <ButtonWithLoader
          onClick={loginWithTwitch}
          loading={isAuthChanging || isAuthLoading}
          disabled={isAuthChanging || isAuthLoading}
          variant='contained'
          startIcon={<Twitch />}
        >
          {t('logIn')}
        </ButtonWithLoader>
      )}

      <AddVideoModal handleClose={handleClose} open={modalOpen} />
    </>
  );
};
export default BarButtons;
