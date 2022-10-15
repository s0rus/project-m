import { Avatar, Box, Card, CardContent, Stack, styled } from '@mui/material';
import { theme } from '@/styles/theme';

export const PlaylistItemWrapper = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  background-color: rgba(255,255,255,0.1);
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  &:hover{
    transform: scale(1.02,1.02);
    background: ${theme.palette.background.paper};
  }
`;

export const PlaylistItemContent = styled(CardContent)`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const PlaylistItemBox = styled(Box)`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

export const PlaylistItemDetails = styled(Stack)`
  flex-direction: column;
  gap: 0.5rem;
`;

export const AddedByWrapper = styled(Stack)`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 0.8rem;
  background-color: ${theme.palette.background.paper};
  border-radius: 4px;
  padding-right: 0.8rem;
`;

export const AddedByAvatar = styled(Avatar)`
  border-radius: 4px;
`;