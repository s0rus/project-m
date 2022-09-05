import { IconButton, Typography } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FullscreenRounded, FullscreenExitRounded } from '@mui/icons-material';
import {
  ControlsBar,
  ControlsContainer,
  ControlsWrapper,
  IndicatorContainer,
  IndicatorWrapper,
  Indicator,
  Seeker,
  Timer,
  VideoTitle,
} from './PlayerControls.styles';
import { usePlayerContext } from '@/contexts/PlayerContext';
import VolumeControl from './VolumeControl';
import { getPlayingStateIcon } from '../VideoPlayer.model';
import useFullscreen from '@/hooks/useFullscreen';

const PlayerControls = () => {
  const { handleSeek, seeking, setSeeking, seekTo, playerState, togglePlaying, toggleControls, disableInitialMute } =
    usePlayerContext();
  const { isPlaying, playedSeconds, duration, controlsVisible, initialMute } = playerState;
  const [newSecondsPlayed, setNewSecondsPlayed] = useState(playedSeconds);
  const controlsTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const { toggleFullscreen, isFullscreen } = useFullscreen();

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = parseInt((value - minute * 60).toFixed());
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const handleSeekMouseUp = useCallback(() => {
    setSeeking(false);
    seekTo(newSecondsPlayed);
  }, [newSecondsPlayed, setSeeking, seekTo]);

  const handleOnChange = (_: Event, value: number | number[]) => {
    setNewSecondsPlayed(value as number);
    handleSeek(value as number);
  };

  const handlePlaying = () => {
    if (initialMute) {
      disableInitialMute();
    } else {
      togglePlaying();
    }
  };

  useEffect(() => {
    if (seeking) {
      document.addEventListener('mouseup', handleSeekMouseUp);
    }

    return () => {
      document.removeEventListener('mouseup', handleSeekMouseUp);
    };
  }, [seeking, handleSeekMouseUp]);

  useEffect(() => {
    controlsTimerRef.current = isPlaying && !initialMute ? setTimeout(() => toggleControls(false), 4000) : undefined;

    return () => clearTimeout(controlsTimerRef.current);
  }, [controlsVisible, toggleControls, isPlaying, initialMute]);

  const handleControlsOnMouseMove = () => {
    toggleControls(true);
  };

  const handleControlsOnMouseLeave = () => {
    if (isPlaying && !initialMute) {
      toggleControls(false);
    }
    clearTimeout(controlsTimerRef.current);
  };

  return (
    <ControlsWrapper
      playing={isPlaying}
      initialmute={initialMute}
      controls={controlsVisible}
      onMouseMove={handleControlsOnMouseMove}
      onMouseLeave={handleControlsOnMouseLeave}
    >
      <ControlsContainer>
        <VideoTitle variant='h1' controls={controlsVisible}>
          MORDO WIERTARA
        </VideoTitle>
        <IndicatorWrapper onClick={handlePlaying}>
          <IndicatorContainer>
            <Indicator playing={isPlaying} initialmute={initialMute}>
              {getPlayingStateIcon(isPlaying, initialMute)}
              {initialMute && (
                <Typography variant='h5' sx={{ mt: '1rem' }}>
                  Anuluj wyciszenie
                </Typography>
              )}
            </Indicator>
          </IndicatorContainer>
        </IndicatorWrapper>
        <ControlsBar controls={controlsVisible}>
          <IconButton onClick={handlePlaying}>{getPlayingStateIcon(isPlaying)}</IconButton>
          <VolumeControl />
          <Timer>
            <Typography variant='h5'>{formatDuration(playedSeconds)}</Typography>
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
            <Typography variant='h5'>{formatDuration(duration)}</Typography>
          </Timer>
          <IconButton onClick={() => toggleFullscreen()}>
            {isFullscreen ? <FullscreenExitRounded /> : <FullscreenRounded />}
          </IconButton>
        </ControlsBar>
      </ControlsContainer>
    </ControlsWrapper>
  );
};

export default PlayerControls;
