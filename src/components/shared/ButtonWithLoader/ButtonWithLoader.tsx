import React, { FC } from 'react';
import { Button, CircularProgress, styled, type ButtonProps } from '@mui/material';

export interface ButtonWithLoaderProps extends ButtonProps {
  loading: boolean;
}

const StyledButton = styled(Button)`
  height: ${({ size }) => (size === 'large' ? '46px' : size === 'medium' ? '36px' : '32px')};

  position: 'relative';
`;

const ButtonWithLoader: FC<ButtonWithLoaderProps> = ({ children, loading, startIcon, size = 'large', ...props }) => {
  return (
    <StyledButton startIcon={loading ? '' : startIcon} size={size} {...props}>
      {loading ? <CircularProgress size={22} /> : children}
    </StyledButton>
  );
};

export default ButtonWithLoader;
