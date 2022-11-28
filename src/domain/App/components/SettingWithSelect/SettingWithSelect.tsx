import { Box, Typography } from '@mui/material';
import { ExpandMoreRounded, LanguageRounded } from '@mui/icons-material';
import { InnerStack, SettingStack } from './SettingWithSelect.styles';
import type { Dispatch, FC, SetStateAction } from 'react';
import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { theme } from '@/styles/theme';

interface SettingWithSelect {
  header: string;
  subtitle: string;
  value: string;
  setter: Dispatch<SetStateAction<string>>;
}

const SettingWithSelect: FC<SettingWithSelect> = ({ setter, value, header, subtitle }) => {
  const { t } = useTranslation();

  return (
    <Select
      value={value}
      onChange={(e) => setter(e.target.value as string)}
      sx={{ mt: '1rem' }}
      IconComponent={ExpandMoreRounded}
      renderValue={(value) => {
        const language = value === 'pl' ? t('language.pl') : t('language.en');

        return (
          <SettingStack>
            <InnerStack>
              <LanguageRounded />
              <Box sx={{ lineHeight: 1 }}>
                <Typography variant='h4'>{header}</Typography>
                <Typography variant='caption' sx={{ color: theme.palette.text.secondary }}>
                  {subtitle}
                </Typography>
              </Box>
            </InnerStack>
            <Typography variant='h5'>{language}</Typography>
          </SettingStack>
        );
      }}
    >
      <MenuItem value='pl'>{t('language.pl')}</MenuItem>
      <MenuItem value='en'>{t('language.en')}</MenuItem>
    </Select>
  );
};

export default SettingWithSelect;
