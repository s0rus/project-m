import { theme } from '@/styles/theme';
import { Box, styled } from '@mui/material';
import React from 'react';

const BlankBox = styled(Box)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background: ${theme.palette.background.default};
`;

const BlankLayout = () => <BlankBox />;

export default BlankLayout;
