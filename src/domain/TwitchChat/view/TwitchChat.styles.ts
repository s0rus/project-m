import { Box } from '@mui/material';
import { styled } from '@mui/material';
import { theme } from '@/styles/theme';

export const TwitchChatBox = styled(Box)`
  height: 100%;
  width: 100%;
  min-width: 340px;
  max-width: 340px;

  @media (max-width: ${theme.breakpoints.values.lg}px) {
    min-width: 260px;
    max-width: 260px;
  }

  @media (max-width: ${theme.breakpoints.values.md}px) {
    min-width: 100%;
    max-width: 100%;

    height: 420px;
  }
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

  @media (max-width: ${theme.breakpoints.values.md}px) {
    min-height: 420px;
  }
`;
