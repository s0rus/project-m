import CardLayout from '@/layouts/CardLayout';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import ScheduleItem from '../components/ScheduleItem';

const Schedule = () => {
  return (
    <CardLayout>
      <Stack>
        <Typography variant='h2'>Schedule</Typography>
        {[1, 2, 3].map((_, index) => (
          <ScheduleItem key={index} />
        ))}
      </Stack>
    </CardLayout>
  );
};

export default Schedule;
