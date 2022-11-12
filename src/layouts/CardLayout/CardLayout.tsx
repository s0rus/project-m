import { Paper, styled } from '@mui/material';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';

const StyledPaper = styled(Paper)`
  padding: 1rem;
  margin-bottom: 1rem;
`;

const CardLayout: FC<PropsWithChildren> = ({ children }) => {
  return <StyledPaper elevation={0}>{children}</StyledPaper>;
};

export default CardLayout;
