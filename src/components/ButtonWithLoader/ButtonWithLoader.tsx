import React, { FC } from 'react';
import { CircularProgress, type ButtonProps, Button, Tooltip } from '@mui/material';

export interface ButtonWithLoaderProps extends ButtonProps {
  loading: boolean;
  iconVariant?: boolean;
  tooltip?: string;
}

const ButtonWithLoader: FC<ButtonWithLoaderProps> = ({
  children,
  loading,
  startIcon,
  size = 'large',
  iconVariant,
  tooltip,
  ...props
}) => {
  return (
    <Tooltip title={tooltip || ''}>
      <Button startIcon={loading && !iconVariant ? <CircularProgress size={24} /> : startIcon} size={size} {...props}>
        {iconVariant && loading ? <CircularProgress size={24} /> : children}
      </Button>
    </Tooltip>
  );
};

export default ButtonWithLoader;