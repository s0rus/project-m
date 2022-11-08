import { Box, Typography } from '@mui/material';
import { ExpandMoreRounded, LanguageRounded } from '@mui/icons-material';
import { InnerStack, SettingStack, StyledSelect } from './SettingWithSelect.styles';
import React, { Dispatch, FC, SetStateAction } from 'react';
import {  TitleSubSelect, TitleSelect } from '@/styles/style';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';

interface SettingWithSelect {
  header: string;
  subtitle: string;
  value: string;
  setter: Dispatch<SetStateAction<string>>;
}

const SettingWithSelect: FC<SettingWithSelect> = ({ setter, value, header, subtitle }) => {
  const { t } = useTranslation();


  return (
    <StyledSelect
      id='language-selector'
      value={value}
      onChange={(e) => setter(e.target.value as string)}
      sx={{ mt: '1rem', cursor: 'pointer' }}
      style={{width: '100%', minWidth: '150px',}}
      IconComponent={ExpandMoreRounded}
      renderValue={(value) => {
        const language = value === 'pl' ? t('language.pl') : t('language.en');

        return (
          <SettingStack>
            <InnerStack>
              <LanguageRounded />
              <Box sx={{ lineHeight: 1 }}>
                <TitleSelect>{header}</TitleSelect>
                <TitleSubSelect>{subtitle}</TitleSubSelect>
              </Box>
            </InnerStack>
            <Typography variant='h5' style={{ textShadow: '0px 0px 10px white' }} >{language}</Typography>
          </SettingStack>
        );
      }}
    >
      <MenuItem value='pl' style={{textShadow: '0px 0px 10px white'}} >{t('language.pl')}</MenuItem>
      <MenuItem value='en' style={{textShadow: '0px 0px 10px white'}} >{t('language.en')}</MenuItem>
    </StyledSelect>
  );
};

export default SettingWithSelect;
