import { Typography, styled } from '@mui/material';

import { Box } from '@mui/system';
import hexToRgba from 'hex-to-rgba';
import { theme } from '@/styles/theme';

export const ControlsWrapper = styled(Box)<{ playing: number; initialmute: number; controls: number }>`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1;

  background-color: ${({ playing, initialmute }) => (!playing || initialmute ? 'rgba(0, 0, 0, 0.6)' : 'transparent')};
  transition: 'background-color 0.2s ease-in-out';
  cursor: ${({ controls }) => (controls ? 'default' : 'none')};

  overflow: hidden;
`;

export const SeekerPreview = styled('span')<{ controls: number; playedPercentage: number }>`
  width: 100%;
  height: 4px;

  position: absolute;
  top: calc(100% - 4px);

  z-index: 1;

  background-color: #6430ff, 0.1;

  transition: transform 0.2s ease-in-out;
  transform: ${({ controls }) => (!controls ? 'translateY(0px)' : 'translateY(8px)')};

  overflow: hidden;

  &::before,
  &::after {
    content: '';
    height: 100%;
    display: block;
    position: absolute;
    top: calc(100% - 4px);

    transition: width 0.1s ease-in-out;
  }

  // '&::before': {
  //   width: '80%',
  //   backgroundColor: 'blue',
  // },

  &::after {
    width: ${({ playedPercentage }) => `${playedPercentage || 0}%`};
    background-color: ${theme.palette.primary.main};
  }
`;

export const ControlsContainer = styled(Box)`
  width: inherit;
  height: inherit;

  padding: 1rem;
  margin: 0;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const VideoTitle = styled(Typography)<{ controls: number }>`
  transition: transform 0.2s ease-in-out;
  transform: ${({ controls }) => (controls ? 'translateY(0px)' : 'translateY(-80px)')};
`;
