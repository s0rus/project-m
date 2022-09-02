import { styled,IconButton, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { PlayArrowRounded, PauseRounded, FullscreenRounded, FullscreenExitRounded } from '@mui/icons-material';
import { ControlsBar, ControlsContainer, ControlsWrapper, Seeker, Timer } from './PlayerControls.styles';
import { usePlayerContext } from '@/contexts/PlayerContext';
import VolumeControl from './VolumeControl/VolumeControl';

const PlayerControls = () => {
  const { handleSeek, seeking, setSeeking, seekTo, playerState, togglePlaying } = usePlayerContext();
  const [newSecondsPlayed, setNewSecondsPlayed] = useState(playerState.playedSeconds);
  const [isFullscreen, toggleFullScreen] = useState(false);

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

  const handlePlaying = () => togglePlaying();

  const handleFullscreen = () => {
    isFullscreen ? document.exitFullscreen() : document.body.requestFullscreen();
    toggleFullScreen((prevFullscreen) => !prevFullscreen);
  };

  useEffect(() => {
    if (seeking) {
      document.addEventListener('mouseup', handleSeekMouseUp);
    }

    return () => {
      document.removeEventListener('mouseup', handleSeekMouseUp);
    };
  }, [seeking, handleSeekMouseUp]);

  const MainPause = styled('div')`
  height: 100%;
  width:100%;`

  const FontStyleControls = {
    fontSize: '1rem',
    color: 'white',
    fontFamily: 'poppins, sans-serif',
    fontWeight: '600',
    fontStyle: 'normal',
    transition: '0.5s',
  };

  return (
  
    <ControlsWrapper playing={playerState.isPlaying}>
      <ControlsContainer>
      <MainPause onClick={handlePlaying} />
        <Typography style={FontStyleControls}></Typography>
        <ControlsBar>
          <IconButton onClick={handlePlaying}>
            {playerState.isPlaying ? <PauseRounded /> : <PlayArrowRounded />}
          </IconButton>
          <VolumeControl />
          <Timer>
            <Typography style={FontStyleControls}>{formatDuration(playerState.playedSeconds)}</Typography>
          </Timer>
          <Seeker
            aria-label='time-indicator'
            size='small'
            value={playerState.playedSeconds}
            min={0}
            step={1}
            max={playerState.duration}
            onChange={handleOnChange}
            onMouseDown={() => setSeeking(true)}
          />
          <Timer>
            <Typography style={FontStyleControls}>{formatDuration(playerState.duration)}</Typography>
          </Timer>
          <IconButton onClick={handleFullscreen}>
            {isFullscreen ? <FullscreenExitRounded /> : <FullscreenRounded />}
          </IconButton>
        </ControlsBar>
      </ControlsContainer>
    </ControlsWrapper>
  );
};

export default PlayerControls;