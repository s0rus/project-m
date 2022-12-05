import { Box } from '@mui/material';
import ReactPlayer from 'react-player';
import { styled } from '@mui/material';

export const VideoPlayerContainer = styled(Box)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  z-index: 99;
`;

export const VideoPlayerBox = styled(Box)`
  height: 100vh;
  width: 100%;
  z-index: 99;
  background-color: #000;
  position: relative;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  width: inherit;
  height: inherit;
  z-index: 99;
`;
