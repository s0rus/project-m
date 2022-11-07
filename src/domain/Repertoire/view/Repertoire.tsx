import CardLayout from '@/layouts/CardLayout';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import RepertoireItem from '../components/RepertoireItem';

const Repertoire = () => {
  return (
    <CardLayout>
      <Stack>
        <Typography variant='h2'>Repertoire</Typography>
        {[1, 2, 3].map((_, index) => (
          <RepertoireItem key={index} />
        ))}
      </Stack>
    </CardLayout>
  );
};

export default Repertoire;
