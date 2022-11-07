import { Box } from '@mui/material';
import { styled } from '@mui/material';
export const TwitchChatBox = styled(Box)`
  width: 100%;
  min-width: 200px;
  border: none;
`;

export const TwitchChatContainer = styled(Box)`
  width: 100%;
  height: 100%;
  border: none;
`;

export const TwitchChatHolder = styled('iframe')`
  min-height: 100vh;
  width: 100%;
  border: none;
`;
