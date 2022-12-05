import { Box } from '@mui/material';
import { styled } from '@mui/material';
export const TwitchChatBox = styled(Box)`
  height: 100%;
  width: 100%;
  min-width: 200px;
  overflow: hidden;
  border: none;
`;

export const TwitchChatContainer = styled(Box)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: none;
`;

export const TwitchChatHolder = styled('iframe')`
  width: 100%;
  border: none;
  overflow: hidden;
`;
