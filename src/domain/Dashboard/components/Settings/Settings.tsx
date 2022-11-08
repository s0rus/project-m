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
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
    <Options style={{paddingBottom: '1rem'}} >
   <OptionsTitle>
   {t('options.optionsTitle')}
   </OptionsTitle>
    <OptionsBox style={{cursor: 'pointer'}} >
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
    <div style={{cursor: 'default'}} >
    <SettingsOnClick 
      style={{cursor: 'default'}}
      icon={<ChatBubbleOutlineIcon/>}
      header={t('options.chatTitle')}
      subtitle={t('options.chatSubTitle')}/>
    <div style={{position: 'absolute', bottom: '110px', right: '50px'}}>
      <SettingWithCheckbox checked={isChatOn} setter={setIsChatOn}/>
      </div>
    </div>
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
