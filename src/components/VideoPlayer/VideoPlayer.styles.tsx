import { styled } from '@mui/material';
import { Box } from '@mui/material';
import ReactPlayer from 'react-player';

export const VideoPlayerBox = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: #000;

  position: relative;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
