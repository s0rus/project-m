import { Box, BoxProps, ButtonProps } from '@mui/material';
import { InnerStack, SettingStack } from './SettingsOnClick.styles';
import React, { Dispatch, FC, SetStateAction } from 'react';
import Typography from '@mui/material/Typography';
interface SettingsOnClick extends ButtonProps {
  icon: JSX.Element;
  header: string;
  checked: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}

const SettingsOnClick: FC<SettingsOnClick> = ({ icon, header, setter, checked }) => {
  const handleOnChange = () => setter(!checked);
  return (
    <>
      <Box>
        <SettingStack onClick={handleOnChange}>
          <InnerStack>{icon}</InnerStack>
          <Typography variant='h5'>{header}</Typography>
        </SettingStack>
      </Box>
    </>
  );
};

export default SettingsOnClick;
