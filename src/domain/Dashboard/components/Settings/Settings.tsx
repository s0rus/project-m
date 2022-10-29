import React, { Dispatch, SetStateAction } from 'react';
import SettingWithCheckbox from '@/components/SettingWithCheckbox';
import { useAddonsContext } from '@/contexts/AddonsContext';
import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';
import {  Options, OptionsBox, OptionsTitle, ChatBox, TitleOption, SubTitleOption } from '@/styles/style';
import { useAuthContext } from '@/contexts/AuthContext';
import CurrentAuth from '../CurrentAuth';
import SettingWithSelect from '@/components/SettingWithSelect';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AdminPanel from '../../components/AdminPanel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { theme } from '@/styles/theme';
import { useMediaQuery  } from '@mui/material';
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
      <ChatBox onClick={logoutOfTwitch} style={{cursor: 'pointer'}} >
      <AccountCircleIcon style={{ marginLeft: '15px', height: '30px', width: '30px', position: 'relative', top: '20px' }}/>
      <TitleOption style={{cursor: 'pointer'}} >
      {t('options.twitchTitle')}
      </TitleOption>
      <SubTitleOption style={{cursor: 'pointer'}} >
      {t('options.twitchSubTitleLOGOUT')}
      </SubTitleOption>
    </ChatBox>
    ):(
    <ChatBox onClick={loginWithTwitch} style={{cursor: 'pointer'}} >
      <AccountCircleIcon style={{ marginLeft: '15px', height: '30px', width: '30px', position: 'relative', top: '20px' }}/>
      <TitleOption style={{cursor: 'pointer'}} >
      {t('options.twitchTitle')}
      </TitleOption>
      <SubTitleOption style={{cursor: 'pointer'}} >
      {t('options.twitchSubTitleLOGIN')}
      </SubTitleOption>
    </ChatBox>
    )}
     <ChatBox>
    <ChatBubbleOutlineIcon style={{ marginLeft: '15px', height: '30px', width: '30px', position: 'relative', top: '20px' }} />
      <TitleOption>
      {t('options.chatTitle')}
      </TitleOption>
      <SubTitleOption>
      {t('options.chatSubTitle')}
      </SubTitleOption>
      <SettingWithCheckbox checked={isChatOn} setter={setIsChatOn}/>
    </ChatBox>
    <div style={{marginTop: '-15px', height: '110px'}} >
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
