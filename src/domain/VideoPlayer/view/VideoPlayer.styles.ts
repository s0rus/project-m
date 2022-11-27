import { Box } from '@mui/material';
import ReactPlayer from 'react-player';
import { styled } from '@mui/material';

export const VideoPlayerContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const VideoPlayerBox = styled(Box)`
  width: 100%;
  height: 80vh;
  position: relative;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  width: inherit;
  border-radius: 50%;
  height: inherit;
`;

export const EmptyPlayer = styled('div')`
  height: 100%;
  width: 100%;
  display: inline-flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background: #18181b;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
`;
