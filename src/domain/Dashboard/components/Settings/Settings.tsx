import React, { Dispatch, SetStateAction } from 'react';
import SettingWithCheckbox from '@/components/SettingWithCheckbox';
import { useAddonsContext } from '@/contexts/AddonsContext';
import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';
import {  Options, OptionsBox, OptionsTitle } from '@/styles/style';
import { useAuthContext } from '@/contexts/AuthContext';
import SettingWithSelect from '@/components/SettingWithSelect';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AdminPanel from '../../components/AdminPanel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOnClick from '@/components/SettingsOnClick';
import SettingWithButton from '@/components/SettingWithButton';
const Settings = () => {
  const { isChatOn, setIsChatOn, language, setLanguage  } = useAddonsContext();
  const { loginWithTwitch, logoutOfTwitch } = useAuthContext();
  const { data: session, status } = useSession();
  const { t } = useTranslation();
  const { isAdmin, currentUser } = useAuthContext();



  return (
    <>
      {isAdmin && (<AdminPanel />)}
    <Options style={{paddingBottom: '1.4rem'}}>
   <OptionsTitle>
   {t('options.optionsTitle')}
   </OptionsTitle>
    <OptionsBox>
    {session && status === 'authenticated' ? (
      <SettingWithButton
          header={t('options.twitchTitle')}
          subtitle={currentUser.name!}
          buttonLabel={t('logOut')}
          buttonAction={logoutOfTwitch}
          icon={<img style={{height: '35px', width: '35px', borderRadius: '12px'}}  src={currentUser.image!} alt='avatar' />}
          hiddenicon={<LogoutIcon/>}
          variant='contained'
        />

    ):(
      <SettingWithButton
          header={t('options.twitchTitle')}
          subtitle={t('options.twitchSubTitleLOGIN')}
          buttonLabel={t('logIn')}
          buttonAction={loginWithTwitch}
          icon={<AccountCircleIcon/>}
          hiddenicon={<AccountCircleIcon />}
          variant='contained'
        />
    )}
      <SettingsOnClick 
      icon={<ChatBubbleOutlineIcon/>}
      header={t('options.chatTitle')}
      subtitle={t('options.chatSubTitle')}
      checked={isChatOn}
      setter={setIsChatOn}/>
    <SettingWithSelect
      value={language}
      setter={setLanguage as Dispatch<SetStateAction<string>>}
      header={t('options.languageTitle')}
      subtitle={t('options.languageSubTitle')}/>
    </OptionsBox>
      </Options>
      </>
  );
};

export default Settings;
