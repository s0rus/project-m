import { Box, BoxProps } from '@mui/material';
import { InnerStack, SettingStack, TitleOption, SubTitleOption } from './SettingsOnClick.styles';
import React, { FC } from 'react';
interface SettingsOnClick extends BoxProps {
  icon: JSX.Element;
  header: string;
  subtitle: string;
}

const SettingsOnClick: FC<SettingsOnClick> = ({ icon, header, subtitle }) => {
  return (
    <SettingStack  style={{cursor: 'default'}}>
      <Box>
        <InnerStack>
          {icon}
          <Box sx={{ lineHeight: 1, width: '20px', cursor: 'default' }}>
            <TitleOption>{header}</TitleOption>
            <SubTitleOption>{subtitle}</SubTitleOption>
          </Box>
        </InnerStack>
      </Box>
    </SettingStack>
  );
};

export default SettingsOnClick;
