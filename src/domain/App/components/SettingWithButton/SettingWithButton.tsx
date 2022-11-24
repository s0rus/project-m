import type { ButtonProps } from '@mui/material';
import { Box, Button } from '@mui/material';
import { InnerStack, SettingStack, TitleOption, SubTitleOption } from './SettingWithButton.styles';
import type { FC } from 'react';
import React from 'react';
import Hidden from '@mui/material/Hidden';

interface SettingWithButton extends ButtonProps {
  icon: JSX.Element;
  hiddenicon: JSX.Element;
  header: string;
  subtitle: string;
  buttonAction: () => void;
  buttonLabel: string;
}

const SettingWithButton: FC<SettingWithButton> = ({
  icon,
  header,
  subtitle,
  buttonAction,
  hiddenicon,
  buttonLabel,
  ...rest
}) => {
  return (
    <SettingStack>
      <Box>
        <InnerStack>
          {icon}
          <Box>
            <TitleOption>{header}</TitleOption>
            <SubTitleOption>{subtitle}</SubTitleOption>
          </Box>
        </InnerStack>
      </Box>
      <Box>
        <Hidden lgDown>
          <Button {...rest} onClick={buttonAction}>
            {buttonLabel}
          </Button>
        </Hidden>
        <Hidden lgUp>
          <Button {...rest} onClick={buttonAction}>
            {hiddenicon}
          </Button>
        </Hidden>
      </Box>
    </SettingStack>
  );
};

export default SettingWithButton;
