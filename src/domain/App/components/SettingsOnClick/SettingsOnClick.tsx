import { Box, BoxProps } from '@mui/material';
import { InnerStack, SettingStack, TitleOption, SubTitleOption } from './SettingsOnClick.styles';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { Checkbox } from '@mui/material';
interface SettingsOnClick extends BoxProps {
  icon: JSX.Element;
  header: string;
  subtitle: string;
  checked: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}

const SettingsOnClick: FC<SettingsOnClick> = ({ icon, header, subtitle, setter, checked }) => {
  const handleOnChange = () => setter(!checked);
  return (
    <>
      <SettingStack onClick={handleOnChange}>
        <Box>
          <InnerStack>
            {icon}
            <Box sx={{ lineHeight: 1, cursor: 'pointer' }}>
              <TitleOption style={{ cursor: 'pointer' }}>{header}</TitleOption>
              <SubTitleOption style={{ cursor: 'pointer' }}>{subtitle}</SubTitleOption>
            </Box>
          </InnerStack>
        </Box>
        <Checkbox
          style={{ position: 'absolute', right: '10px', transform: 'scale(1.5,1.5)' }}
          checked={checked}
          onChange={handleOnChange}
        />
      </SettingStack>
    </>
  );
};

export default SettingsOnClick;
