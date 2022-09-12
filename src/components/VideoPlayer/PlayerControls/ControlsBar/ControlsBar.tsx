import { ControlsBarWrapper, Seeker, Timer } from './ControlsBar.styles';
import { FullscreenExitRounded, FullscreenRounded } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import React, { FC, useCallback, useEffect, useState } from 'react';

import VolumeControl from '../VolumeControl';
import { getPlayingStateIcon } from '../../VideoPlayer.model';
import timeFormatter from '@/utils/timeFormatter';
import useFullscreen from '@/hooks/useFullscreen';
import { usePlayerContext } from '@/contexts/PlayerContext';

interface ControlsBarProps {
  handlePlaying: () => void;
}

const ControlsBar: FC<ControlsBarProps> = ({ handlePlaying }) => {
  const { handleSeek, seeking, setSeeking, seekTo, playerState } = usePlayerContext();
  const { isPlaying, playedSeconds, duration, controlsVisible } = playerState;
  const [newSecondsPlayed, setNewSecondsPlayed] = useState(playedSeconds);
  const { toggleFullscreen, isFullscreen } = useFullscreen();

  const handleSeekMouseUp = useCallback(() => {
    setSeeking(false);
    seekTo(newSecondsPlayed);
  }, [newSecondsPlayed, setSeeking, seekTo]);

  const handleOnChange = (_: Event, value: number | number[]) => {
    setNewSecondsPlayed(value as number);
    handleSeek(value as number);
  };

  useEffect(() => {
    if (seeking) {
      document.addEventListener('mouseup', handleSeekMouseUp);
    }

    return () => {
      document.removeEventListener('mouseup', handleSeekMouseUp);
    };
  }, [seeking, handleSeekMouseUp]);

  return (
    <ControlsBarWrapper controls={controlsVisible}>
      <IconButton onClick={handlePlaying}>{getPlayingStateIcon(isPlaying)}</IconButton>
      <VolumeControl />
      <Timer>
        <Typography variant='h5'>{timeFormatter(playedSeconds)}</Typography>
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
      />
      <Timer>
        <Typography variant='h5'>{timeFormatter(duration)}</Typography>
      </Timer>
      <IconButton onClick={() => toggleFullscreen()}>
        {isFullscreen ? <FullscreenExitRounded /> : <FullscreenRounded />}
      </IconButton>
    </ControlsBarWrapper>
  );
};

export default ControlsBar;
