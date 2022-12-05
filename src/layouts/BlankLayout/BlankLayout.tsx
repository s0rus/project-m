import { theme } from '@/styles/theme';
import { Box, styled } from '@mui/material';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';

const BlankBox = styled(Box)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background: ${theme.palette.background.default};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlankLayout: FC<PropsWithChildren> = ({ children }) => <BlankBox>{children}</BlankBox>;

export default BlankLayout;
