import { Box, Button, Slider, styled, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import { theme } from '@/styles/theme';

const ControlsWrapper = styled(Box)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1;
`;

const ControlsContainer = styled(Box)`
  width: inherit;
  height: inherit;

  padding: 1rem;
  margin: 0;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ControlsBar = styled(Box)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
`;

interface PlayerControlsProps {
  setPlaying: () => void;
  handleSeek: (newSecondsPlayed: number) => void;
  handleSeekMouseDown: () => void;
  handleSeekMouseUp: (newSecondsPlayed: number) => void;
  playing: boolean;
  duration: number;
  position: number;
}

const PlayerControls: FC<PlayerControlsProps> = ({
  playing,
  setPlaying,
  position,
  duration,
  handleSeek,
  handleSeekMouseDown,
  handleSeekMouseUp,
}) => {
  const [newSecondsPlayed, setNewSecondsPlayed] = useState(position);

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = parseInt((value - minute * 60).toFixed());
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const handleOnChange = (_: Event, value: number | number[]) => {
    setNewSecondsPlayed(value as number);
    handleSeek(value as number);
  };

  const onMouseUpHandler = () => {
    handleSeekMouseUp(newSecondsPlayed);
  };

  return (
    <ControlsWrapper>
      <ControlsContainer>
        <Typography variant='h1'>MORDO WIERTARA</Typography>
        <ControlsBar>
          <Button variant='text' onClick={setPlaying}>
            {playing ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
          </Button>
          <Typography>{formatDuration(position)}</Typography>
          <Slider
            aria-label='time-indicator'
            size='small'
            value={position}
            min={0}
            step={1}
            max={duration}
            onMouseDown={handleSeekMouseDown}
            onChange={handleOnChange}
            onMouseUp={onMouseUpHandler}
            sx={{
              color: theme.palette.primary.main,
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,

                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark' ? 'rgb(255 255 255 / 16%)' : 'rgb(0 0 0 / 16%)'
                  }`,
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />
          <Typography>{formatDuration(duration)}</Typography>
        </ControlsBar>
      </ControlsContainer>
    </ControlsWrapper>
  );
};

export default PlayerControls;
