import React, { Dispatch, SetStateAction } from 'react';
import { Stack, Typography } from '@mui/material';

import CardLayout from '@/layouts/CardLayout';
import SettingWithCheckbox from '@/components/SettingWithCheckbox';
import SettingWithSelect from '@/components/SettingWithSelect';
import { useAddonsContext } from '@/contexts/AddonsContext';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { t } = useTranslation();
  const { isChatOn, setIsChatOn, language, setLanguage } = useAddonsContext();

  return (
    <CardLayout>
      <Stack>
        <Typography variant='h2'>{t('settings.header')}</Typography>
        <SettingWithCheckbox
          checked={isChatOn}
          setter={setIsChatOn}
          header={t('settings.chat.header')}
          subtitle={t('settings.chat.subititle')}
        />
        <SettingWithSelect
          value={language}
          setter={setLanguage as Dispatch<SetStateAction<string>>}
          header={t('settings.language.header')}
          subtitle={t('settings.language.subititle')}
        />
      </Stack>
    </CardLayout>
  );
};

export default Settings;