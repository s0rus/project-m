import { Avatar, Box, Stack, styled } from '@mui/material';

import { theme } from '@/styles/theme';

export const CurrentVideoWrapper = styled(Box)`
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  gap: 1rem;
`;

export const CurrentVideoPoster = styled(Box)`
  height: 100px;
  width: 151px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.primary.main};
  background-color: ${theme.palette.background.paper};
`;

export const CurrentVideoDetails = styled(Stack)`
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
