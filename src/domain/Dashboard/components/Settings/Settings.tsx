import { Stack, Typography } from '@mui/material';

import CardLayout from '@/layouts/CardLayout';
import React from 'react';
import SettingWithCheckbox from '@/components/SettingWithCheckbox';
import { useAddonsContext } from '@/contexts/AddonsContext';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { t } = useTranslation();
  const { isChatOn, setIsChatOn } = useAddonsContext();

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
      </Stack>
    </CardLayout>
  );
};

export default Settings;
