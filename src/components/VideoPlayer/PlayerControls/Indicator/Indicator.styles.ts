import { Box, styled } from '@mui/material';

import hexToRgba from 'hex-to-rgba';
import { theme } from '@/styles/theme';

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

export const IndicatorElement = styled(Box)<{ playing: number; initialmute: number }>`
  width: 5rem;
  height: 5rem;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
  background-color: ${hexToRgba(theme.palette.primary.main, 0.6)};

  opacity: ${({ playing, initialmute }) => (!playing || initialmute ? 1 : 0)};

  &:hover {
    background-color: ${hexToRgba(theme.palette.primary.main, 0.7)};
  }

  & svg {
    width: 4rem;
    height: 4rem;
  }

  & > h5 {
    width: 200%;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
