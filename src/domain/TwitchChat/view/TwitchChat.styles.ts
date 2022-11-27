import { Box } from '@mui/material';
import { styled } from '@mui/material';
export const TwitchChatBox = styled('div')`
  height: 100%;
  overflow: hidden;
  min-width: 200px;
  width: 400px;
  border: none;
  display: flex;
  justify-content: right;
`;

export const TwitchChatContainer = styled(Box)`
  height: 100%;
  overflow: hidden;
  border: none;
  display: flex;
`;

export const TwitchChatHolder = styled('iframe')`
  border: none;
  display: flex;
  min-width: 100px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  height: 80vh;
`;
