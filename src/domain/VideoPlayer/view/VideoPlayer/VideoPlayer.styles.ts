import { Box } from '@mui/material';
import ReactPlayer from 'react-player';
import { styled } from '@mui/material';

export const VideoPlayerBox = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: #18181b;
  position: relative;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  width: inherit;
  height: inherit;
`;
