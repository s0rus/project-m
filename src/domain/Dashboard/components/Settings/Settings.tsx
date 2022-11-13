import type { Dispatch, SetStateAction } from 'react';
import { Options, OptionsBox, OptionsTitle } from '@/styles/style';
import React from 'react';
import SettingWithSelect from '@/domain/App/components/SettingWithSelect';
import SettingWithButton from '@/domain/App/components/SettingWithButton';
import SettingsOnClick from '@/domain/App/components/SettingsOnClick';
import { useAddonsContext } from '@/domain/App/context/Addons.context';
import { useAuthContext } from '@/domain/App/context/Auth.context';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Settings = () => {
  const { isChatOn, setIsChatOn, language, setLanguage } = useAddonsContext();
  const { loginWithTwitch, logoutOfTwitch } = useAuthContext();
  const { data: session, status } = useSession();
  const { t } = useTranslation();
  const { currentUser } = useAuthContext();

  return (
    <Options style={{ paddingBottom: '1.7rem' }}>
      <OptionsTitle>{t('options.optionsTitle')}</OptionsTitle>
      <OptionsBox>
        {session && status === 'authenticated' ? (
          <SettingWithButton
            header={t('options.twitchTitle')}
            subtitle={currentUser.name!}
            buttonLabel={t('logOut')}
            buttonAction={logoutOfTwitch}
            icon={
              <img
                style={{ height: '35px', width: '35px', borderRadius: '12px' }}
                src={currentUser.image!}
                alt='avatar'
              />
            }
            hiddenicon={<LogoutIcon />}
            variant='contained'
          />
        ) : (
          <SettingWithButton
            header={t('options.twitchTitle')}
            subtitle={t('options.twitchSubTitleLOGIN')}
            buttonLabel={t('logIn')}
            buttonAction={loginWithTwitch}
            icon={<AccountCircleIcon />}
            hiddenicon={<AccountCircleIcon />}
            variant='contained'
          />
        )}

        <SettingsOnClick
          icon={<ChatIcon />}
          header={t('options.chatTitle')}
          subtitle={t('options.chatSubTitle')}
          checked={isChatOn}
          setter={setIsChatOn}
        />

        <SettingWithSelect
          value={language}
          setter={setLanguage as Dispatch<SetStateAction<string>>}
          header={t('options.languageTitle')}
          subtitle={t('options.languageSubTitle')}
        />
      </OptionsBox>
    </Options>
  );
};

export default Settings;
