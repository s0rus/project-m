import { Typography } from '@mui/material';
import { ExpandMoreRounded, LanguageRounded } from '@mui/icons-material';
import { InnerStack, SettingStack, StyledSelect } from './SettingWithSelect.styles';
import type { Dispatch, FC, SetStateAction } from 'react';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';

interface SettingWithSelect {
  header: string;
  value: string;
  setter: Dispatch<SetStateAction<string>>;
}

const SettingWithSelect: FC<SettingWithSelect> = ({ setter, value }) => {
  const { t } = useTranslation();

  return (
    <>
      <StyledSelect
        id='language-selector'
        variant='filled'
        value={value}
        onChange={(e) => setter(e.target.value as string)}
        IconComponent={ExpandMoreRounded}
        renderValue={() => {
          const language = value === 'pl' ? t('language.pl') : t('language.en');
          return (
            <>
              <SettingStack>
                <InnerStack>
                  <LanguageRounded style={{ marginRight: '0rem' }} />
                </InnerStack>
                <Typography variant='h5'>{language}</Typography>
              </SettingStack>
            </>
          );
        }}
      >
        <MenuItem value='pl'>{t('language.pl')}</MenuItem>
        <MenuItem value='en'>{t('language.en')}</MenuItem>
      </StyledSelect>
    </>
  );
};

export default SettingWithSelect;
