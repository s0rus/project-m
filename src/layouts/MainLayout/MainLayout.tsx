import { styled, Box } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

const MainBox = styled(Box)`
  width: 100%;
  height: 100%;

  display: flex;
`;

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return <MainBox>{children}</MainBox>;
};

export default MainLayout;
