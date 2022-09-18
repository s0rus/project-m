import { Box, styled } from '@mui/material';

import { theme } from '@/styles/theme';

export const PlaylistWrapper = styled(Box)`
  display: flex;
  padding: 1rem;

  border: 2px solid ${theme.palette.success.main};
  border-radius: 8px;
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
