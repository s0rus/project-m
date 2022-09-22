import React, { FC } from 'react';
import { CircularProgress, type ButtonProps, Button } from '@mui/material';

export interface ButtonWithLoaderProps extends ButtonProps {
  loading: boolean;
  iconVariant?: boolean;
}

const ButtonWithLoader: FC<ButtonWithLoaderProps> = ({
  children,
  loading,
  startIcon,
  size = 'large',
  iconVariant,
  ...props
}) => {
  return (
    <Button startIcon={loading && !iconVariant ? <CircularProgress size={24} /> : startIcon} size={size} {...props}>
      {iconVariant && loading ? <CircularProgress size={24} /> : children}
    </Button>
  );
};

export default ButtonWithLoader;
