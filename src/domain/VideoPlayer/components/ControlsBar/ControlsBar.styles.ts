import { Box, Slider, styled } from '@mui/material';

import hexToRgba from 'hex-to-rgba';
import { theme } from '@/styles/theme';


export const BoxIcon = styled('div')`
height: 50px;
width: 50px;
transition: 0.2s;
border-radius: 8px;
&:hover{
background: rgba(255, 255, 255, 0.20);
}
`

export const ControlsBarWrapper = styled(Box)<{ controls: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: transform 0.2s ease-in-out;
  transform: ${({ controls }) => (controls ? 'translateY(0px)' : 'translateY(80px)')};

  border-radius: 0.5rem;
  background-color: ${hexToRgba(theme.palette.background.paper, 0.2)};
`;

export const Seeker = styled(Slider)<{ loadedPercentage: number }>`
  color: ${theme.palette.primary.main};
  height: 4px;
&:hover{
  height: 10px;
}
  & .MuiSlider-thumb {
    width: 0.8rem;
    color: white;
    height: 0.8rem;
    &:hover{
      transition: 0.1s;
      width: 1.2rem;
      height: 1.2rem;
    }
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
    background-color: rgba(74, 74, 74, 0.78);

    &::before {
      content: '';
      height: 100%;
      display: block;
      position: absolute;
      top: 0;

      transition: width 0.1s ease-in-out;
      width: ${({ loadedPercentage }) => `${loadedPercentage || 0}%`};
      background-color: rgba(97, 97, 97, 0.78);
      border-radius: 8px;
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
