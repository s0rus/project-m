import { ControlsBarWrapper, Seeker, Timer, BoxIcon } from './ControlsBar.styles';
import { FullscreenExitRounded, FullscreenRounded } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import React, { FC, useCallback, useEffect, useState } from 'react';

import { ToastTypes } from '@/utils/ToastTypes';
import VolumeControl from '../VolumeControl';
import { getPlayingStateIcon } from '../../model/VideoPlayer.model';
import timeFormatter from '@/utils/timeFormatter';
import { useAuthContext } from '@/contexts/AuthContext';
import useFullscreen from '@/domain/VideoPlayer/hooks/useFullscreen';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import { useSocketContext } from '@/contexts/SocketContext';
import { useTranslation } from 'react-i18next';

interface ControlsBarProps {
  handlePlaying: () => void;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

const ControlsBar: FC<ControlsBarProps> = ({ handlePlaying, onMouseOver, onMouseLeave }) => {
  const { socket } = useSocketContext();
  const { t } = useTranslation();
  const { isAdmin, currentUser } = useAuthContext();
  const { handleSeek, seeking, setSeeking, seekTo, playerState } = usePlayerContext();
  const { isPlaying, playedSeconds, duration, controlsVisible, activeVideo, loadedSeconds } = playerState;
  const [newSecondsPlayed, setNewSecondsPlayed] = useState(playedSeconds);
  const { toggleFullscreen, isFullscreen } = useFullscreen();

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
      <BoxIcon>
      <IconButton onClick={handlePlaying}>{getPlayingStateIcon(isPlaying)}</IconButton>
      </BoxIcon>
      <BoxIcon>
      <VolumeControl />
      </BoxIcon>
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
        loadedPercentage={(loadedSeconds / duration) * 100}
      />
      <Timer islong={duration >= 3600 ? 1 : 0}>
        <Typography variant='h5'>{timeFormatter(duration)}</Typography>
      </Timer>
      <BoxIcon>
      <IconButton onClick={() => toggleFullscreen()}>
        {isFullscreen ? <FullscreenExitRounded /> : <FullscreenRounded />}
      </IconButton>
      </BoxIcon>
    </ControlsBarWrapper>
  );
};

export default ControlsBar;
