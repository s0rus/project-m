import CardLayout from '@/layouts/CardLayout';
import { Stack } from '@mui/material';
import React from 'react';
import ScheduleHeader from '../components/ScheduleHeader';
import ScheduleItem from '../components/ScheduleItem';

const Schedule = () => {
  return (
    <CardLayout>
      <Stack>
        <ScheduleHeader />
        {[1, 2, 3].map((_, index) => (
          <ScheduleItem key={index} />
        ))}
      </Stack>
    </CardLayout>
  );
};

export default Schedule;
