import { Box, Grid, Stack, styled } from '@mui/material';

export const DashboardBarWrapper = styled(Box)`
  width: 100%;
  min-height: 100px;
  margin-bottom: 1rem;
`;

export const DashboardBarContainer = styled(Grid)`
  min-height: 100px;
  height: 100%;

  justify-content: space-between;
`;

export const DashboardBarButtons = styled(Stack)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;
