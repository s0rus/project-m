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
          <Box sx={{ lineHeight: 1 }}>
            <TitleOption>
              {header}
            </TitleOption>
            <SubTitleOption>
              {subtitle}
            </SubTitleOption>
          </Box>
        </InnerStack>
        <Hidden lgDown>
        <Button style={{position: 'absolute', right: '20px', bottom: '18px', height: '35px', minWidth: '60px', width: '120px' , fontSize: '12px', textTransform: 'capitalize'}} {...rest} onClick={buttonAction}>
        <Typography style={{fontSize: '12px'}} >
          {buttonLabel}
        </Typography>
        </Button>
        </Hidden>
        <Hidden lgUp>
        <Button style={{position: 'absolute', right: '20px', bottom: '18px', height: '35px', fontSize: '12px', textTransform: 'capitalize'}} {...rest} onClick={buttonAction}>
            {hiddenicon}
          </Button>
        </Hidden>

      </Box>
    </SettingStack>
  );
};

export default SettingWithButton;