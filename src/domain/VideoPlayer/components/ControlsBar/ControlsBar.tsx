import { ControlsBarWrapper, Seeker, Timer } from './ControlsBar.styles';
import { FullscreenExitRounded, FullscreenRounded, SyncRounded } from '@mui/icons-material';
import { IconButton, Tooltip, Typography } from '@mui/material';
import type { FC } from 'react';
import React, { useCallback, useEffect, useState } from 'react';

import { ToastTypes } from '@/utils/CustomToast';
import VolumeControl from '../VolumeControl';
import { getPlayingStateIcon } from '../../model/VideoPlayer.model';
import timeFormatter from '@/utils/timeFormatter';
import useFullscreen from '@/domain/VideoPlayer/hooks/useFullscreen';
import { useTranslation } from 'react-i18next';
import { useVideoPlayerStore } from '../../store/VideoPlayer.store';
import { useVideoPlayer } from '../../hooks/useVideoPlayer';
import { useAuthChange } from '@/domain/App/hooks/useAuthChange';
import { useAuthStore } from '@/domain/App/store/Auth.store';
import { useSocketStore } from '@/domain/App/store/Socket.store';

interface ControlsBarProps {
  handlePlaying: () => void;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

const ControlsBar: FC<ControlsBarProps> = ({ handlePlaying, onMouseOver, onMouseLeave }) => {
  const { t } = useTranslation();
  const { toggleFullscreen, isFullscreen } = useFullscreen();
  const socket = useSocketStore((state) => state.socket);
  const isCurrentUserLeader = useSocketStore((state) => state.isCurrentUserLeader());
  const { isAdmin } = useAuthChange();
  const currentUser = useAuthStore((state) => state.currentUser);

  const isReady = useVideoPlayerStore((state) => state.isReady);
  const isPlaying = useVideoPlayerStore((state) => state.isPlaying);
  const activeVideo = useVideoPlayerStore((state) => state.activeVideo);
  const loadedSeconds = useVideoPlayerStore((state) => state.loadedSeconds);
  const playedSeconds = useVideoPlayerStore((state) => state.playedSeconds);
  const setPlayedSeconds = useVideoPlayerStore((state) => state.setPlayedSeconds);
  const duration = useVideoPlayerStore((state) => state.duration);
  const controlsVisible = useVideoPlayerStore((state) => state.controlsVisible);
  const seeking = useVideoPlayerStore((state) => state.seeking);
  const setSeeking = useVideoPlayerStore((state) => state.setSeeking);

  const [seekedSecondsPlayed, setSeekedSecondsPlayed] = useState(playedSeconds);
  const { seekTo, sendSeekTo, requestPlayerState } = useVideoPlayer();

  const handleSyncWithLeader = useCallback(() => {
    if (isCurrentUserLeader || !activeVideo) {
      return;
    }
    requestPlayerState();
  }, [requestPlayerState, isCurrentUserLeader, activeVideo]);

  const handleSeekMouseUp = useCallback(() => {
    setSeeking(false);
    setPlayedSeconds(seekedSecondsPlayed);
    seekTo(seekedSecondsPlayed);
    if (socket) {
      sendSeekTo(seekedSecondsPlayed);
      socket.emit('SEND_TOAST', t('toast.videoSeeked', { username: currentUser.name }), ToastTypes.VideoSeeked);
    }
  }, [seekedSecondsPlayed, setSeeking, setPlayedSeconds, currentUser.name, socket, t, seekTo, sendSeekTo]);

  const handleOnChange = (_: Event, value: number | number[]) => {
    setSeekedSecondsPlayed(value as number);
    setPlayedSeconds(value as number);
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
      <Tooltip title={isPlaying ? t('playerControls.tooltip.pause') : t('playerControls.tooltip.play')} placement='top'>
        <span>
          <IconButton disabled={!isReady} onClick={handlePlaying}>
            {getPlayingStateIcon(isPlaying)}
          </IconButton>
        </span>
      </Tooltip>
      <VolumeControl />
      <Timer islong={duration >= 3600 ? 1 : 0}>
        <Typography variant='h5'>{timeFormatter(playedSeconds, duration >= 3600)}</Typography>
      </Timer>
      <Seeker
        aria-label='time-indicator'
        size='small'
        value={playedSeconds}
        min={0}
        step={1}
        max={duration}
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
