import { Box } from '@mui/material';
import { styled } from '@mui/material';
import { theme } from '@/styles/theme';

export const TwitchChatBox = styled(Box)`
  height: 100%;
  width: 100%;
  min-width: 280px;
  pointerEvents: pointerActive ? 'none' : 'auto';
  overflow: hidden;
`;

export const TwitchChatContainer = styled(Box)`
  width: 100%;
  height: 100%;
  pointerEvents: pointerActive ? 'none' : 'auto';
  overflow: hidden;
`;

export const TwitchChatHolder = styled('iframe')`
  min-height: 100vh;
  width: 100%;
  pointerEvents: pointerActive ? 'none' : 'auto';
  border: none;
  overflow: hidden;
`;
