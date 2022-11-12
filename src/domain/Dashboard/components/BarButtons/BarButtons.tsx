import { Tooltip, Button } from '@mui/material';
import React, { useState } from 'react';
import AddVideoModal from '../AddVideoModal';
import { useAuthContext } from '@/domain/App/context/Auth.context';
import { usePlaylistContext } from '@/domain/Playlist/context/Playlist.context.tsx';
import { useTranslation } from 'react-i18next';
import MovieIcon from '@mui/icons-material/Movie';
import { usePlayerContext } from '@/domain/VideoPlayer/context/VideoPlayer.context';
import NextPlanIcon from '@mui/icons-material/NextPlan';
const BarButtons = () => {
  const { isAdmin } = useAuthContext();
  const { t } = useTranslation();
  const { isLoggedIn } = useAuthContext();
  const { playlistLocked } = usePlaylistContext();
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const { handleOnVideoSkip } = usePlayerContext();
  const { loginWithTwitch } = useAuthContext();

  return (
    <>
      {isLoggedIn ? (
        <>
          {isAdmin && (
            <Button style={{ width: '100%', height: '45px' }} onClick={() => handleOnVideoSkip()}>
              <NextPlanIcon style={{ marginRight: '5px' }} />
              {t('video.skip')}
            </Button>
          )}
          <Button style={{ width: '100%', height: '45px' }} onClick={handleOpen} disabled={playlistLocked && !isAdmin}>
            <MovieIcon style={{ marginRight: '5px' }} />
            {t('video.add')}
          </Button>
          <AddVideoModal handleClose={handleClose} open={modalOpen} />
        </>
      ) : (
        <>
          <Tooltip title={t('options.twitchSubTitleLOGIN')}>
            <Button style={{ width: '100%', height: '45px' }} onClick={loginWithTwitch}>
              {t('logIn')}
            </Button>
          </Tooltip>
        </>
      )}
    </>
  );
};
export default BarButtons;
