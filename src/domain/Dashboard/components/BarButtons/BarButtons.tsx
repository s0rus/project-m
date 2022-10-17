import {  Hidden, Tooltip } from '@mui/material';
import { PlaylistAddRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import AddVideoModal from '../AddVideoModal';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useTranslation } from 'react-i18next';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { StyledButton, StyledButtonSkeleton, StyledButtonMini } from '@/styles/style';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import { useSocketContext } from '@/contexts/SocketContext';
const BarButtons = () => {
  const { isAdmin } = useAuthContext();
  const { socket } = useSocketContext();
  const { t } = useTranslation();
  const { isLoggedIn, authChange } = useAuthContext();
  const { playlistLocked } = usePlaylistContext();
  const [modalOpen, setModalOpen] = useState(false);
  const { handleOnEnd } = usePlayerContext();
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const { handleOnVideoSkip } = usePlayerContext();


  return (
    <>
      {isLoggedIn ? (
        <>
          <Hidden lgDown>
          {isAdmin &&
            <StyledButton onClick={() => handleOnVideoSkip()} >
              <SkipNextIcon style={{marginRight: '5px'}} />
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
            style={{marginTop: '4rem', paddingRight: '0.5rem', paddingLeft: '0.5rem'}}
            onClick={() => handleOnVideoSkip()} >
              <SkipNextIcon style={{marginRight: '5px'}} />
              {t('video.skip')}
            </StyledButtonMini>
          }
            <StyledButtonMini
              onClick={handleOpen}
              disabled={playlistLocked && !isAdmin}
              style={{marginBottom: '6rem', paddingRight: '0.5rem', paddingLeft: '0.5rem'}}
            >
                            {t('video.add')}
              <PlaylistAddRounded style={{marginRight: '5px'}} />
            </StyledButtonMini>

          </Hidden>
          <AddVideoModal handleClose={handleClose} open={modalOpen} />
        </>
        
      ) : (
        <>
        <Tooltip title={t('options.twitchSubTitleLOGIN')}>
              <StyledButton
              
              disabled={playlistLocked && !isAdmin}
              style={{marginBottom: '2rem', marginRight: '1.5rem'}}
            >
              <PlaylistAddRounded style={{marginRight: '5px', color: 'gray'}} />
            </StyledButton>
        </Tooltip>
        </>
      )}
    </>
  );
};
export default BarButtons;