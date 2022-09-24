import { Box, Slider, styled } from '@mui/material';

import { theme } from '@/styles/theme';

export const ControlsBarWrapper = styled(Box)<{ controls: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: transform 0.2s ease-in-out;
  transform: ${({ controls }) => (controls ? 'translateY(0px)' : 'translateY(80px)')};
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

export const Timer = styled(Box)<{ islong: number }>`
  min-width: 4rem;
  margin: ${({ islong }) => (islong ? '0.1rem 1rem 0 1rem' : '0.1rem 0.5rem 0 0.5rem')};

  display: flex;
  align-items: center;
  justify-content: center;
`;