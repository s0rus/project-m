import { Box, Button, ButtonProps } from '@mui/material';
import { InnerStack, SettingStack, TitleOption, SubTitleOption } from './SettingWithButton.styles';
import React, { FC } from 'react';
interface SettingWithButton extends ButtonProps {
  icon: JSX.Element;
  header: string;
  subtitle: string;
  buttonAction: () => void;
  buttonLabel: string;
}

const SettingWithButton: FC<SettingWithButton> = ({ icon, header, subtitle, buttonAction, buttonLabel, ...rest }) => {
  return (
    <SettingStack>
      <Box>
        <InnerStack>
          {icon}
          <Box sx={{ lineHeight: 1 }}>
            <TitleOption>
              {header}
            </TitleOption>
            <SubTitleOption>
              {subtitle}
            </SubTitleOption>
          </Box>
        </InnerStack>
      </Box>
      <Button {...rest} onClick={buttonAction}>
        {buttonLabel}
      </Button>
    </SettingStack>
  );
};

export default SettingWithButton;
