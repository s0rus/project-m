import { styled } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, PropsWithChildren } from 'react';

const MainBox = styled(Box)`
  min-height: 200vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return <MainBox>{children}</MainBox>;
};

export default MainLayout;
