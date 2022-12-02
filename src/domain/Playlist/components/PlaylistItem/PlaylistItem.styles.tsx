import { Avatar, Box, Card, CardContent, Stack, styled, IconButton } from '@mui/material';
import { theme } from '@/styles/theme';

export const PlaylistItemWrapper = styled(Card)`
  width: 100%;
  height: 120px;
  display: flex;
  background: #18181b;
  border-radius: 4px;
`;

export const PlaylistItemContent = styled(CardContent)`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
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
  border: 1px solid ${theme.palette.primary.main};
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
  right: 20px;
  height: 50px;
  border-radius: 8px;
  display: flex;
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
