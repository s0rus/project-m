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
    <SettingStack>
      <Box>
        <InnerStack>
          {icon}
          <Box sx={{ lineHeight: 1, cursor: 'pointer' }}>
            <TitleOption style={{cursor: 'pointer'}} >{header}</TitleOption>
            <SubTitleOption style={{cursor: 'pointer'}} >{subtitle}</SubTitleOption>
          </Box>
        </InnerStack>
      </Box>
    </SettingStack>
  );
};

export default SettingsOnClick;
