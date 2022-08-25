import { theme } from '@/styles/theme';
import { styled } from '@mui/material';
import { Box } from '@mui/material';

export const TwitchChatBox = styled(Box)`
  width: 340px;

  position: relative;
`;

export const TwitchChatContainer = styled(Box)`
  max-height: 100vh;
  width: inherit;

  position: fixed;
  top: 0;
  right: 0;
`;

export const TwitchChatHolder = styled('iframe')`
  min-height: 100vh;
  height: 100%;
  width: 100%;

  pointer-events: all;
  border: none;
  border-left: 1px solid ${theme.palette.secondary.main};

  position: sticky;
  top: 0;
`;
