import { Box, Skeleton, Stack } from '@mui/material';

import React from 'react';

const ButtonsSkeleton = () => {
  return (
    <Stack>
      <Skeleton variant='rounded'>
        <Box sx={{ height: '42.25px', width: '10vw' }} />
      </Skeleton>
    </Stack>
  );
};

export default ButtonsSkeleton;
