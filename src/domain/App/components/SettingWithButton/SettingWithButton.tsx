import type { ButtonProps } from '@mui/material';
import { Box, Button } from '@mui/material';
import { InnerStack, SettingStack } from './SettingWithButton.styles';
import type { FC } from 'react';
import React from 'react';
import Typography from '@mui/material/Typography';

interface SettingWithButton extends ButtonProps {
  icon: JSX.Element;
  header: string;
  buttonAction: () => void;
  buttonLabel: string;
}

const SettingWithButton: FC<SettingWithButton> = ({ icon, header, buttonAction, buttonLabel, ...rest }) => {
  return (
    <Box>
      <SettingStack>
        <InnerStack>{icon}</InnerStack>
        <Typography variant='h5'>{header}</Typography>
        <Button {...rest} onClick={buttonAction}>
          {buttonLabel}
        </Button>
      </SettingStack>
    </Box>
  );
};

export default SettingWithButton;
