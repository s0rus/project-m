import { Box } from '@mui/material';
import { styled } from '@mui/material';
export const TwitchChatBox = styled(Box)`
  height: 100%;
  width: 100%;
  min-width: 280px;
  overflow: hidden;
`;

export const TwitchChatContainer = styled(Box)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const TwitchChatHolder = styled('iframe')`
  min-height: 100vh;
  width: 100%;
  border: none;
  overflow: hidden;
`;
