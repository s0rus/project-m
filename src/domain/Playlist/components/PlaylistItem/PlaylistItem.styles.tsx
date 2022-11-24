import { Avatar, Box, Card, CardContent, Stack, styled, IconButton } from '@mui/material';
import { theme } from '@/styles/theme';

export const PlaylistItemWrapper = styled(Card)`
  width: 100%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  transform: scale(0.98, 0.98);
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.55);
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

export const ItemTitle = styled('h4')`
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 20px;
  color: white;
  transition: 0.2s;
`;

export const ItemOptions = styled('div')`
  position: absolute;
  right: 0px;
  height: 100%;
  width: 50px;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  & svg {
    height: 22px;
    width: 22px;
  }
`;

export const Delete = styled(IconButton)`
  margin: 0;
  padding: 0;
  & svg {
    cursor: pointer;
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.1);
  }
  &:hover {
    transition: 0.2s;
    & svg {
      height: 28px;
      width: 28px;
      color: red;
    }
  }
`;
export const Current = styled(IconButton)`
  margin: 0;
  padding: 0;
  & svg {
    transition: 0.3s;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.1);
  }
  &:hover {
    transition: 0.2s;
    & svg {
      height: 28px;
      width: 28px;
      color: rgba(38, 255, 0, 0.49);
    }
  }
`;

export const Copy = styled(IconButton)`
  margin: 0;
  padding: 0;
  & svg {
    cursor: pointer;
    transition: 0.3s;
    height: 20px;
    width: 20px;
    color: rgba(255, 255, 255, 0.1);
  }
  &:hover {
    transition: 0.2s;
    & svg {
      height: 25px;
      width: 25px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const Copied = styled(IconButton)`
  margin: 0;
  padding: 0;
  & svg {
    transition: 0.2s;
    cursor: default;
    color: rgba(38, 255, 0, 0.49);
    &:hover {
      height: 30px;
      width: 30px;
    }
  }
`;
