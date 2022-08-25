import { theme } from '@/styles/theme';
import { styled } from '@mui/material';
import { Box } from '@mui/material';

export const TwitchChatBox = styled(Box)`
  height: 100%;
  width: 340px;
`;

export const TwitchChatContainer = styled(Box)`
  width: 100%;
  height: 100%;
`;

export const TwitchChatHolder = styled('iframe')`
  min-height: 100vh;
  width: 100%;

  pointer-events: all;
  border: none;
  border-left: 1px solid ${theme.palette.primary.main};
`;
