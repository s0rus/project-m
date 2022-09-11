import { styled, Box, Stack } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

const MainBox = styled(Box)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`;

const MainStack = styled(Stack)`
  width: 100%;
  max-width: 100vw;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

export const MainContent = styled('div')`
  flex: 1;
  height: 100vh;
`;

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainStack>
      <MainBox>{children}</MainBox>
    </MainStack>
  );
};

export default MainLayout;
