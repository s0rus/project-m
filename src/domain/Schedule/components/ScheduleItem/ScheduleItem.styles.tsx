import { gradients } from '@/styles/theme';
import { Card, Grid, styled } from '@mui/material';

export const ScheduleItemCard = styled(Card)`
  margin-bottom: 1rem;

  background: ${gradients.gradientMain};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ScheduleItemContentStack = styled(Grid)`
  flex-direction: row;
`;
