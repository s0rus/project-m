import { Box, Button, ButtonProps, Typography } from '@mui/material';
import { InnerStack, SettingStack, TitleOption, SubTitleOption } from './SettingWithButton.styles';
import React, { FC } from 'react';
import Hidden from '@mui/material/Hidden';
interface SettingWithButton extends ButtonProps {
  icon: JSX.Element;
  hiddenicon: JSX.Element;
  header: string;
  subtitle: string;
  buttonAction: () => void;
  buttonLabel: string;
}

const SettingWithButton: FC<SettingWithButton> = ({ icon, hiddenicon, header, subtitle, buttonAction, buttonLabel, ...rest }) => {

  return (
    <SettingStack>
      <Box>
        <InnerStack>
          {icon}
          <Box>
            <TitleOption>
              {header}
            </TitleOption>
            <SubTitleOption>
              {subtitle}
            </SubTitleOption>
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