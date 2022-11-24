import { Box, Stack, styled } from '@mui/material';
import { gradients } from '@/styles/theme';

export const PlaylistWrapper = styled(Box)<{ locked: number }>`
  padding: 1rem 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  background: ${({ locked }) => (locked ? gradients.playlistLocked : gradients.playlistUnlocked)};
  border-radius: 8px;
  transition: all 0.3s;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export const PlaylistHeader = styled(Stack)`
  flex-flow: row nowrap;
  align-items: center;
  margin-top: -5px;
  margin-bottom: 5px;
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
  padding: 0.5rem 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  height: inherit;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
`;

export const EmptyPlaylistBox = styled(Box)`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
