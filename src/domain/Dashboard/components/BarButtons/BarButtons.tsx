import {  Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddVideoModal from '../AddVideoModal';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useTranslation } from 'react-i18next';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { StyledButton } from '@/styles/style';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import { CircularProgress  } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

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
  const [logging, setIsLogging] = useState(false);
  const handleLogging = async () => {
  setIsLogging(true);
  await loginWithTwitch();
  setIsLogging(false);
} 

  return (
    <>
      {isLoggedIn ? (
        <>
          {isAdmin &&
            <StyledButton onClick={() => handleOnVideoSkip()} >
              <span className='icon'><SkipNextIcon style={{height: '40px', width: '40px', cursor: 'pointer'}} /></span>
              <span className='text'> <Typography variant='h5' >{t('video.skip')}</Typography></span>
            </StyledButton>
          }
            <StyledButton
              onClick={handleOpen}
              disabled={playlistLocked && !isAdmin}
            >
              <span className='icon'><AddIcon style={{height: '40px', width: '40px', cursor: 'pointer'}} /></span>
              <span className='text'> <Typography variant='h5' >{t('video.add')}</Typography></span>
            </StyledButton>
          <AddVideoModal handleClose={handleClose} open={modalOpen} />
        </>
        
      ) : (
        <>
        <Tooltip title={t('options.twitchSubTitleLOGIN')}>
              <StyledButton
              style={{marginRight: '1.5rem'}}
              onClick={handleLogging}>
                <IconButton disabled={logging}>
                {logging ? <CircularProgress size={32} /> : <h6>{t('video.add')}</h6>}
                </IconButton>
            </StyledButton>
        </Tooltip>
        </>
      )}
    </>
  );
};
export default BarButtons;