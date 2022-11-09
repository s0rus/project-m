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
    <SettingStack>
      <Box>
      <Checkbox style={{transform: 'scale(1.5, 1.5)', position: 'absolute', marginTop: '-6px', right: '10px'}} checked={checked} onChange={handleOnChange}/>
        <InnerStack>
          {icon}
          <Box sx={{ lineHeight: 1, cursor: 'default' }}>
            <TitleOption style={{cursor: 'default'}} >{header}</TitleOption>
            <SubTitleOption style={{cursor: 'default'}} >{subtitle}</SubTitleOption>
          </Box>
        </InnerStack>
      </Box>
    </SettingStack>
  );
};

export default SettingsOnClick;
