import { Box, Stack, styled } from '@mui/material';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';

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

export const MainContent = styled(Box)`
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
