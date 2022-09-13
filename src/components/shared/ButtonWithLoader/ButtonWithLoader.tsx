import React, { FC } from 'react';
import { Button, CircularProgress, styled, type ButtonProps } from '@mui/material';

export interface ButtonWithLoaderProps extends ButtonProps {
  loading: boolean;
}

const StyledButton = styled(Button)`
  height: 50px;
  width: 100%;
  background: #0e0e10;
  position: 'relative';
  &:hover{
    background: rgba(100, 48, 255, 0.04);
  }
`;

const ButtonWithLoader: FC<ButtonWithLoaderProps> = ({ children, loading, startIcon, size = 'large', ...props }) => {
  return (
    <StyledButton startIcon={loading ? '' : startIcon} size={size} {...props}>
      {loading ? <CircularProgress size={22} /> : children}
    </StyledButton>
  );
};

export default ButtonWithLoader;
