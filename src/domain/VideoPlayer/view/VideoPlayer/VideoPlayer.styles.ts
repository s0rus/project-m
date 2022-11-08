import { Box } from '@mui/material';
import ReactPlayer from 'react-player';
import { styled } from '@mui/material';

export const VideoPlayerContainer = styled(Box)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

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