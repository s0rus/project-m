import { ControlsBarWrapper, Seeker, Timer } from './ControlsBar.styles';
import { FullscreenExitRounded, FullscreenRounded, SyncRounded } from '@mui/icons-material';
import { IconButton, Tooltip, Typography } from '@mui/material';
import type { FC } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { useMemo } from 'react';
import { ToastTypes } from '@/utils/CustomToast';
import VolumeControl from '../VolumeControl';
import { getPlayingStateIcon } from '../../model/VideoPlayer.model';
import timeFormatter from '@/utils/timeFormatter';
import { useAuthContext } from '@/domain/App/context/Auth.context';
import useFullscreen from '@/domain/VideoPlayer/hooks/useFullscreen';
import { usePlayerContext } from '../../context/PlayerContext';
import { useSocketContext } from '@/domain/App/context/Socket.context';
import { useTranslation } from 'react-i18next';

interface ControlsBarProps {
  handlePlaying: () => void;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

const ControlsBar: FC<ControlsBarProps> = ({ handlePlaying, onMouseOver, onMouseLeave }) => {
  const { socket, leader } = useSocketContext();
  const { t } = useTranslation();
  const { isAdmin, currentUser } = useAuthContext();
  const { handleSeek, seeking, setSeeking, seekTo, playerState, requestPlayerState } = usePlayerContext();
  const { isPlaying, playedSeconds, duration, controlsVisible, activeVideo, loadedSeconds, isReady } = playerState;
  const [newSecondsPlayed, setNewSecondsPlayed] = useState(playedSeconds);
  const { toggleFullscreen, isFullscreen } = useFullscreen();

  const isCurrentUserLeader = useMemo(() => {
    if (!leader || !currentUser) return false;
    return leader.userId === currentUser.id;
  }, [leader, currentUser]);

  const handleSyncWithLeader = useCallback(() => {
    if (isCurrentUserLeader || !activeVideo) {
      return;
    }
    requestPlayerState();
  }, [requestPlayerState, isCurrentUserLeader, activeVideo]);

  const handleSeekMouseUp = useCallback(() => {
    setSeeking(false);
    seekTo(newSecondsPlayed);
    socket && socket.emit('SEND_TOAST', t('toast.videoSeeked', { username: currentUser.name }), ToastTypes.VideoSeeked);
  }, [newSecondsPlayed, setSeeking, seekTo, currentUser.name, socket, t]);

  const handleOnChange = (_: Event, value: number | number[]) => {
    setNewSecondsPlayed(value as number);
    handleSeek(value as number);
  };

  useEffect(() => {
    if (seeking) document.addEventListener('mouseup', handleSeekMouseUp);

    if (!seeking) document.removeEventListener('mouseup', handleSeekMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleSeekMouseUp);
    };
  }, [seeking, handleSeekMouseUp]);

  return (
    <ControlsBarWrapper controls={controlsVisible} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <IconButton disabled={!isReady} onClick={handlePlaying}>
        {getPlayingStateIcon(isPlaying)}
      </IconButton>
      <VolumeControl />
      <Timer islong={duration >= 3600 ? 1 : 0}>
        <Typography variant='h5'>{timeFormatter(playedSeconds, duration >= 3600)}</Typography>
      </Timer>
      <Seeker
        aria-label='time-indicator'
        size='small'
        value={activeVideo ? playedSeconds : 0}
        min={0}
        step={1}
        max={activeVideo ? duration : 1}
        onChange={handleOnChange}
        onMouseDown={() => setSeeking(true)}
        disabled={!activeVideo || !isAdmin}
        loadedpercentage={loadedSeconds ? (loadedSeconds / duration) * 100 : 0}
      />
      <Timer islong={duration >= 3600 ? 1 : 0}>
        <Typography variant='h5'>{timeFormatter(duration)}</Typography>
      </Timer>
      <Tooltip title={t('playerControls.tooltip.sync')} placement='top'>
        <span>
          <IconButton onDoubleClick={handleSyncWithLeader} disabled={isCurrentUserLeader || !activeVideo}>
            <SyncRounded />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title={t('playerControls.tooltip.fullscreen')} placement='top'>
        <IconButton onClick={() => toggleFullscreen()}>
          {isFullscreen ? <FullscreenExitRounded /> : <FullscreenRounded />}
        </IconButton>
      </Tooltip>
    </ControlsBarWrapper>
  );
};

export default ControlsBar;
