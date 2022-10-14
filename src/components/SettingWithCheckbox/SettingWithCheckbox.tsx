import { Box, Checkbox, Stack, Typography, styled } from '@mui/material';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { gradients, theme } from '@/styles/theme';

import { ChatRounded } from '@mui/icons-material';

interface SettingWithCheckbox {
  header: string;
  subtitle: string;
  checked: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}

const SettingStack = styled(Stack)<{ checked: boolean }>`
  margin-top: 1rem;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${theme.palette.primary.dark};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ checked }) => (checked ? gradients.gradientMain : 'transparent')};

  cursor: pointer;
`;

const InnerStack = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

const SettingWithCheckbox: FC<SettingWithCheckbox> = ({ setter, checked, header, subtitle }) => {
  const handleOnChange = () => setter(!checked);

  return (
    <SettingStack checked={checked} onClick={handleOnChange}>
      <Box>
        <InnerStack>
          <ChatRounded />
          <Box sx={{ lineHeight: 1 }}>
            <Typography variant='h4'>{header}</Typography>
            <Typography variant='caption'>{subtitle}</Typography>
          </Box>
        </InnerStack>
      </Box>
      <Checkbox checked={checked} onChange={handleOnChange} sx={{ '& .MuiSvgIcon-root': { fontSize: '2rem' } }} />
    </SettingStack>
  );
};

export default SettingWithCheckbox;
