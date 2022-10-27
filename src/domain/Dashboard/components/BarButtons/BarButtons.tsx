import {  Hidden, Tooltip } from '@mui/material';
import { PlaylistAddRounded} from '@mui/icons-material';
import React, { useState } from 'react';
import AddVideoModal from '../AddVideoModal';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useTranslation } from 'react-i18next';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { StyledButton, StyledButtonMini } from '@/styles/style';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import { CircularProgress  } from '@mui/material';
import IconButton from '@mui/material/IconButton';

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
          <Hidden lgDown>
          {isAdmin &&
            <StyledButton onClick={() => handleOnVideoSkip()} >
              <SkipNextIcon style={{marginRight: '5px',}} />
              {t('video.skip')}
            </StyledButton>
          }
            <StyledButton
              onClick={handleOpen}
              disabled={playlistLocked && !isAdmin}
              style={{marginRight: '2rem'}}
            >
              <PlaylistAddRounded style={{marginRight: '5px'}} />
              {t('video.add')}
            </StyledButton>
          </Hidden>


          <Hidden lgUp>
          {isAdmin &&
            <StyledButtonMini 
            style={{marginTop: '4rem', paddingRight: '0.5rem', paddingLeft: '0.5rem', marginRight: '40px'}}
            onClick={() => handleOnVideoSkip()} >
              <SkipNextIcon style={{marginRight: '5px'}} />

            </StyledButtonMini>
          }
            <StyledButtonMini
              onClick={handleOpen}
              disabled={playlistLocked && !isAdmin}
              style={{marginBottom: '6rem', paddingRight: '0.5rem', paddingLeft: '0.5rem',  marginRight: '40px'}}
            >

              <PlaylistAddRounded style={{marginRight: '5px'}} />
            </StyledButtonMini>

          </Hidden>
          <AddVideoModal handleClose={handleClose} open={modalOpen} />
        </>
        
      ) : (
        <>
        <Tooltip title={t('options.twitchSubTitleLOGIN')}>
              <StyledButton
              style={{marginBottom: '2rem', marginRight: '1.5rem'}}
              onClick={handleLogging}>
                <IconButton disabled={logging} >
                {logging ? <CircularProgress size={32} /> : <PlaylistAddRounded style={{marginRight: '5px', color: 'gray'}} />}
                </IconButton>
            </StyledButton>
        </Tooltip>
        </>
      )}
    </>
  );
};
export default BarButtons;