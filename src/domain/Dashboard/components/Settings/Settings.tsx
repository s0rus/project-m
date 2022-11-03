import React, { Dispatch, SetStateAction } from 'react';
import SettingWithCheckbox from '@/components/SettingWithCheckbox';
import { useAddonsContext } from '@/contexts/AddonsContext';
import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';
import {  Options, OptionsBox, OptionsTitle } from '@/styles/style';
import { useAuthContext } from '@/contexts/AuthContext';
import CurrentAuth from '../CurrentAuth';
import SettingWithSelect from '@/components/SettingWithSelect';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AdminPanel from '../../components/AdminPanel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { theme } from '@/styles/theme';
import { useMediaQuery  } from '@mui/material';
import SettingsOnClick from '@/components/SettingsOnClick';

const Settings = () => {
  const { isChatOn, setIsChatOn, language, setLanguage  } = useAddonsContext();
  const { loginWithTwitch, logoutOfTwitch } = useAuthContext();
  const { data: session, status } = useSession();
  const { t } = useTranslation();
  const { isAdmin } = useAuthContext();
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));



  return (
    <div style={{margin: '0', padding: '0', minWidth: '100px',}} >
    <Options style={{minWidth: isMediumDown ? '96%' : '100%', width: isMediumDown ? '96%' : '100%',}} > 
      <div style={{display: 'flex'}} >
   <OptionsTitle>
   {t('options.optionsTitle')}
   </OptionsTitle>
   <CurrentAuth/>
      </div>


    <OptionsBox style={{cursor: 'pointer'}} >
    {session && status === 'authenticated' ? (
      <div onClick={logoutOfTwitch}>
        <SettingsOnClick
        style={{cursor: 'pointer'}}
        icon={<AccountCircleIcon/>}
        header={t('options.twitchTitle')}
        subtitle={t('options.twitchSubTitleLOGOUT')}/>
      </div>
    ):(
      <div onClick={loginWithTwitch}>
        <SettingsOnClick
        style={{cursor: 'pointer'}}
        icon={<AccountCircleIcon/>}
        header={t('options.twitchTitle')}
        subtitle={t('options.twitchSubTitleLOGIN')}/>
      </div>

    )}
    <div>
    <SettingsOnClick 
      style={{cursor: 'default'}}
      icon={<ChatBubbleOutlineIcon/>}
      header={t('options.chatTitle')}
      subtitle={t('options.chatSubTitle')}>
    </SettingsOnClick>
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
      <div style={{marginTop: '30px'}} >
      {isAdmin && (<AdminPanel />)}
      </div>
      </div>
  );
};

export default Settings;
