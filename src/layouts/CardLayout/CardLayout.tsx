import { Paper, styled } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

const StyledPaper = styled(Paper)`
  padding: 1rem;
`;

const CardLayout: FC<PropsWithChildren> = ({ children }) => {
  return <StyledPaper elevation={0}>{children}</StyledPaper>;
};

export default CardLayout;
