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
          <Box style={{width: '100px'}}>
            <TitleOption>
              {header}
            </TitleOption>
            <SubTitleOption>
              {subtitle}
            </SubTitleOption>
          </Box>
        </InnerStack>
      </Box>
      <Hidden lgDown>
        <Button style={{position: 'absolute', fontSize: '12px', textTransform: 'capitalize', right: '10px'}} {...rest} onClick={buttonAction}>
        <Typography style={{fontSize: '12px'}} >
          {buttonLabel}
        </Typography>
        </Button>
        </Hidden>
        <Hidden lgUp>
        <Button style={{position: 'absolute', fontSize: '12px', textTransform: 'capitalize', right: '10px'}} {...rest} onClick={buttonAction}>
            {hiddenicon}
          </Button>
        </Hidden>
    </SettingStack>
  );
};

export default SettingWithButton;