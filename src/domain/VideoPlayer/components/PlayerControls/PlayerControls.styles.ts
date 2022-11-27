import { Typography, styled } from '@mui/material';

import { Box } from '@mui/system';
import hexToRgba from 'hex-to-rgba';
import { theme } from '@/styles/theme';

export const ControlsWrapper = styled(Box)<{ playing: number; initialmute: number; controls: number }>`
  width: 100%;
  height: 100%;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
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

export const SeekerPreview = styled('span')<{ controls: number; playedPercentage: number; loadedPercentage: number }>`
  width: 100%;
  height: 4px;

  position: absolute;
  top: calc(100% - 4px);

  z-index: 1;

  background-color: ${hexToRgba(theme.palette.primary.main, 0.3)};

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

  &::before {
    width: ${({ loadedPercentage }) => `${loadedPercentage || 0}%`};
    background-color: ${hexToRgba(theme.palette.primary.light, 0.2)};
  }

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
export const LoadingOverlay = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;
