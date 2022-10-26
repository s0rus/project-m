import { Box, Grid, keyframes, Stack, styled } from '@mui/material';

export const DashboardBarWrapper = styled(Box)`
  width: 100%;
  min-height: 140px;
  margin-bottom: 2rem;
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

export const Halloween1 = styled('div')`
height: 100px;
width: 100px;
position: absolute;
margin-top: -80px;
right: 1px;
animation: spin infinite 20s linear;
margin-right: 70px;
&:hover{
    transform:rotate(.75deg);
    transition:.75s  cubic-bezier(0.5,120,0.5,-120);
}
`
