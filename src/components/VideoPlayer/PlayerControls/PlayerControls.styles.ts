import { theme } from '@/styles/theme';
import { Slider, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import hexToRgba from 'hex-to-rgba';

export const ControlsWrapper = styled(Box)(
  ({ playing, controls, initialmute }: { playing: boolean; controls: boolean; initialmute: boolean }) => ({
    width: '100%',
    height: '100%',

    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    zIndex: 1,

    backgroundColor: !playing || initialmute ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
    transition: 'background-color 0.2s ease-in-out',
    cursor: controls ? 'default' : 'none',

    overflow: 'hidden',
  })
);

export const SeekerPreview = styled('span')(
  ({ controls, playedPercentage }: { controls: boolean; playedPercentage: number }) => ({
    width: '100%',
    height: '4px',

    position: 'absolute',
    top: 'calc(100% - 4px)',

    zIndex: 1,

    backgroundColor: '#6430ff',

    transition: 'transform 0.2s ease-in-out',
    transform: !controls ? 'translateY(0px)' : 'translateY(8px)',

    overflow: 'hidden',

    '&::before, &::after': {
      content: '""',
      height: '100%',
      display: 'block',
      position: 'absolute',
      top: 'calc(100% - 4px)',

      transition: 'width 0.1s ease-in-out',
    },

    // '&::before': {
    //   width: '80%',
    //   backgroundColor: 'blue',
    // },

    '&::after': {
      width: `${playedPercentage || 0}%`,
      backgroundColor: '#6430ff',
    },
  })
);

export const ControlsContainer = styled(Box)`
  width: inherit;
  height: inherit;

  padding: 1rem;
  margin: 0;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const IndicatorWrapper = styled(Box)`
  width: '100%';
  height: '100%';

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const IndicatorContainer = styled(Box)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const Indicator = styled(Box)(({ playing, initialmute }: { playing: boolean; initialmute: boolean }) => ({
  width: '5rem',
  height: '5rem',
  borderRadius: '8px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  transition: 'background-color 0.2s ease-in-out, opacity 0.2s ease-in-out',
  backgroundColor: '#6430ff',

  opacity: !playing || initialmute ? 1 : 0,

  '&:hover': {
    backgroundColor: 'hsl(255,60%,39%)',
  },

  '& svg': {
    width: '4rem',
    height: '4rem',
  },

  '& > h5': {
    width: '200%',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
}));

export const ControlsBar = styled(Box)(({ controls }: { controls: boolean }) => ({
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  gap: '0.5rem',

  transition: 'transform 0.2s ease-in-out',
  transform: controls ? 'translateY(0px)' : 'translateY(80px)',
}));

export const Seeker = styled(Slider)`
  color: #6430ff;
  height: 4px;

  & .MuiSlider-thumb {
    width: 16px;
    height: 16px;
  }

  &::before {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
  }

  &:hover,
  &.Mui-focusVisible {
    box-shadow:white;
  }

  &.Mui-active {
    width: 20px;
    height: 20px;
  }

  & .MuiSlider-rail {
    opacity: 0.28;
  }
`;

export const Timer = styled(Box)`
  margin: 0.1rem 0.4rem 0 0.4rem;
  min-width: 2rem;
`;

export const VideoTitle = styled(Typography)(({ controls }: { controls: boolean }) => ({
  transition: 'transform 0.2s ease-in-out',
  transform: controls ? 'translateY(0px)' : 'translateY(-80px)',
}));
