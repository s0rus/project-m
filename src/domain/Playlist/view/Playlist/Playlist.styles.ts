import { Box, Stack, styled } from '@mui/material';
import { gradients} from '@/styles/theme';


export const PlaylistWrapper = styled(Box)<{ locked: number }>`
  padding: 1rem;
  margin-left: 1rem;
  margin-bottom: 1vh;
  display: flex;
  width: 100%;
  min-width: 100%;
  flex-flow: column nowrap;
  background: ${({ locked }) => (locked ? gradients.playlistLocked : gradients.playlistUnlocked)};
  border-radius: 8px;
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  &:hover{
    transform: scale(1.01,1.01);
  }
`;

export const PlaylistHeader = styled(Stack)`
  margin-bottom: 0.4rem;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1rem;
`;

export const PlaylistDetail = styled(Stack)`
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem;
  cursor: default;
`;

export const PlaylistContainer = styled(Box)`
  width: 100%;
  height: inherit;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`;

export const EmptyPlaylistBox = styled(Box)`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;