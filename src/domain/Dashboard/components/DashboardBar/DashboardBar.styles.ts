import { Box, Grid, Stack, styled } from '@mui/material';

export const DashboardBarWrapper = styled(Box)`
  width: 100%;
  padding: 1rem 0rem;
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
  gap: 2rem;
`;


