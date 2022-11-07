import React, { Dispatch, SetStateAction } from 'react';
import { useAddonsContext } from '@/domain/App/context/Addons.context';
import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';
import {  Options, OptionsBox, OptionsTitle } from '@/styles/style';
import { useAuthContext } from '@/domain/App/context/Auth.context';
import SettingWithSelect from '@/domain/App/components/SettingWithSelect';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AdminPanel from '../../components/AdminPanel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsOnClick from '@/domain/App/components/SettingsOnClick';
import SettingWithButton from '@/domain/App/components/SettingWithButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Image from 'next/image';
const Settings = () => {
  const { language, setLanguage  } = useAddonsContext();
  const { loginWithTwitch, logoutOfTwitch } = useAuthContext();
  const { data: session, status } = useSession();
  const { t } = useTranslation();
  const { isAdmin, currentUser } = useAuthContext();


  return (
    <>
    {isAdmin && (<AdminPanel />)}
    <Options>
   <OptionsTitle>
   {t('options.optionsTitle')}
   </OptionsTitle>
    <OptionsBox style={{cursor: 'pointer', height: '260px'}} >
    {session && status === 'authenticated' ? (
<SettingWithButton
          header={t('options.twitchTitle')}
          subtitle={currentUser.name!}
          buttonLabel={t('logOut')}
          buttonAction={logoutOfTwitch}
          icon={<Image style={{height: '35px', width: '35px', borderRadius: '12px'}}  src={currentUser.image!} alt='avatar' />}
          hiddenicon={<LogoutIcon />}
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
      style={{cursor: 'default'}}
      icon={<ChatBubbleOutlineIcon/>}
      header={t('options.chatTitle')}
      subtitle={t('options.chatSubTitle')}/>

    <div style={{marginTop: '-1.5vh'}} >
    <SettingWithSelect
          value={language}
          setter={setLanguage as Dispatch<SetStateAction<string>>}
          header={t('options.languageTitle')}
          subtitle={t('options.languageSubTitle')}
        />
    </div>
    </OptionsBox>
      </Options>
      </>
  );
};

export default Settings;
