import { Box, Button, Slider, styled, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import { theme } from '@/styles/theme';
import { TimeFont, PauseBox, IconBox, PauseStyle }  from '@/styles/style'
import { Icon } from '@mui/material';

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
  opacity: 0%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: .5s ease;

  gap: 1rem;
  &:hover {
    opacity: 100%;}
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
        <PauseBox onClick={setPlaying}>
        {playing ? <Icon/> 
        : <IconBox><PauseRoundedIcon style={(PauseStyle)}/></IconBox>}

        </PauseBox>
        <ControlsBar>
          <Button variant='text' onClick={setPlaying}>
            {playing ? <PauseRoundedIcon/> : <PlayArrowRoundedIcon />}
          </Button>
          <TimeFont>{formatDuration(position)}</TimeFont>
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
          <TimeFont>{formatDuration(duration)}</TimeFont>
        </ControlsBar>
      </ControlsContainer>
    </ControlsWrapper>
  );
};

export default PlayerControls;
