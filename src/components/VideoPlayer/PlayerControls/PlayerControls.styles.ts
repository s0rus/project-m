import { theme } from '@/styles/theme';
import { Slider, styled } from '@mui/material';
import { Box } from '@mui/system';

export const ControlsWrapper = styled(Box)(({ playing }: { playing: boolean }) => ({
  width: '100%',
  height: '100%',

  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,

  zIndex: 1,

  backgroundColor: playing ? 'transparent' : 'rgba(0, 0, 0, 0.6)',
  transition: 'background-color 0.2s ease-in-out',
}));

export const ControlsContainer = styled(Box)`
  width: inherit;
  height: inherit;

  padding: 1rem;
  margin: 0;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ControlsBar = styled(Box)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.5rem;
`;

export const Seeker = styled(Slider)`
  color: ${theme.palette.primary.main};
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
    box-shadow: ${theme.palette.primary.main};
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
