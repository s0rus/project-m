import { Box, styled } from '@mui/material';

import { theme } from '@/styles/theme';

export const PlaylistWrapper = styled(Box)`
  display: flex;
  padding: 0rem;
  border-radius: 20px;
`;

export const PlaylistContainer = styled(Box)`
  width: 100%;
  height: inherit;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  display: block;
  margin: auto;
  margin-left: auto;
  margin-right: auto;
`;
