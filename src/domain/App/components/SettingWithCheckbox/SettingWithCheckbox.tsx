import { Box, Checkbox, Typography } from '@mui/material';
import { InnerStack, SettingStack } from './SettingWithCheckbox.styles';
import type { Dispatch, FC, SetStateAction } from 'react';
import React from 'react';

import { ChatRounded } from '@mui/icons-material';

interface SettingWithCheckbox {
  header: string;
  checked: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}

const SettingWithCheckbox: FC<SettingWithCheckbox> = ({ setter, checked, header }) => {
  const handleOnChange = () => setter(!checked);

  return (
    <SettingStack checked={checked} onClick={handleOnChange}>
      <Box>
        <InnerStack>
          <ChatRounded />
          <Box sx={{ lineHeight: 1 }}>
            <Typography variant='h4'>{header}</Typography>
          </Box>
        </InnerStack>
      </Box>
      <Checkbox checked={checked} onChange={handleOnChange} sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }} />
    </SettingStack>
  );
};

export default SettingWithCheckbox;
