import { Box, Slider, styled } from '@mui/material';

import hexToRgba from 'hex-to-rgba';
import { theme } from '@/styles/theme';

export const ControlsBarWrapper = styled(Box)<{ controls: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: transform 0.2s ease-in-out;
  transform: ${({ controls }) => (controls ? 'translateY(0px)' : 'translateY(80px)')};

  background: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;

  & button {
    border-radius: 8px;
    height: 40px;
    width: 40px;
    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }
  }
`;

export const Seeker = styled(Slider)<{ loadedpercentage: number }>`
  color: ${theme.palette.primary.main};
  height: 4px;

  & .MuiSlider-thumb {
    width: 1rem;
    height: 1rem;
    color: white;
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
    opacity: 0.5;
    background-color: ${theme.palette.primary.dark};

    &::before {
      content: '';
      height: 100%;
      display: block;
      position: absolute;
      top: 0;

      transition: width 0.1s ease-in-out;
      width: ${({ loadedpercentage }) => `${loadedpercentage || 0}%`};
      background-color: ${theme.palette.primary.light};
    }
  }
`;

export const Timer = styled(Box)<{ islong: number }>`
  min-width: 4rem;
  margin: ${({ islong }) => (islong ? '0.1rem 1rem 0 1rem' : '0.1rem 0.5rem 0 0.5rem')};

  display: flex;
  align-items: center;
  justify-content: center;
`;
