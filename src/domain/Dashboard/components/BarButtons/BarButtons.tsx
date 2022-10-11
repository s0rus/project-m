import {  Hidden, Tooltip } from '@mui/material';
import { PlaylistAddRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import AddVideoModal from '../AddVideoModal';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useTranslation } from 'react-i18next';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { StyledButton } from '@/styles/style';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import { useSocketContext } from '@/contexts/SocketContext';
import { theme } from '@/styles/theme';


const BarButtons = () => {
  const { isAdmin } = useAuthContext();
  const { socket } = useSocketContext();
  const { t } = useTranslation();
  const { isLoggedIn, authChange} = useAuthContext();
  const { playlistLocked } = usePlaylistContext();
  const [modalOpen, setModalOpen] = useState(false);
  const { handleOnEnd } = usePlayerContext();
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);


  return (
    <>
      {isLoggedIn ? (
        <>
          <Hidden lgDown>
          {isAdmin ? (
            <Tooltip title={t('playlist.tooltip.admin')} >
            <AdminPanelSettingsIcon style={{color: 'red'}} />
              </Tooltip>
          ) : (
            <Tooltip title={t('playlist.tooltip.logged')} >
          <AdminPanelSettingsIcon style={{color: `${theme.palette.primary.main}`}} />
            </Tooltip>
          )}
          {isAdmin &&
            <StyledButton
            onClick={() => {
              handleOnEnd();
              socket.emit('SKIP_VIDEO')}}
              disabled={authChange}
            >
              <SkipNextIcon style={{marginRight: '5px'}} />
              {t('video.skip')}
            </StyledButton>
          }
            <StyledButton
              onClick={handleOpen}
              disabled={playlistLocked && !isAdmin}
              style={{marginRight: '8%'}}
            >
              <PlaylistAddRounded style={{marginRight: '5px'}} />
              {t('video.add')}
            </StyledButton>
          </Hidden>
          <Hidden lgUp>
          {isAdmin ? (<AdminPanelSettingsIcon style={{color: 'red'}} />) : (<AdminPanelSettingsIcon style={{color: 'gray'}} />)}
          {isAdmin &&
            <StyledButton
            onClick={() => {
              handleOnEnd();
              socket.emit('SKIP_VIDEO');
            }}
            disabled={authChange}
          >
            <SkipNextIcon style={{marginBottom: '-6px', marginRight: '5px'}} />
            </StyledButton>
          }
            <StyledButton
              onClick={handleOpen}
              disabled={playlistLocked && !isAdmin}
              style={{marginRight: '8%'}}
            >
              <PlaylistAddRounded style={{marginBottom: '-6px', marginRight: '5px'}} />
            </StyledButton>
          </Hidden>
          <AddVideoModal handleClose={handleClose} open={modalOpen} />
        </>
      ) : (
        <>
          <Hidden lgDown>
          </Hidden>
        </>
      )}
    </>
  );
};
export default BarButtons;