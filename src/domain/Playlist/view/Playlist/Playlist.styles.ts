import { Box, Stack, styled } from '@mui/material';
import { gradients, theme } from '@/styles/theme';

import hexToRgba from 'hex-to-rgba';

export const PlaylistWrapper = styled(Box)<{ locked: number }>`
  padding: 1rem;
  margin-bottom: 1vh;
  display: flex;
  flex-flow: column nowrap;
  background: ${({ locked }) => (locked ? gradients.playlistLocked : gradients.playlistUnlocked)};
  border: 1px solid
    ${({ locked }) => (locked ? hexToRgba(theme.palette.error.main, 0.1) : hexToRgba(theme.palette.success.main, 0.1))};
  border-radius: 8px;
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