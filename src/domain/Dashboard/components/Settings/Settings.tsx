import React from 'react';
import SettingWithCheckbox from '@/components/SettingWithCheckbox';
import { useAddonsContext } from '@/contexts/AddonsContext';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import Checkbox from '@mui/material/Checkbox';
import TwitchVideo from 'domain/TwitchVideo/TwitchVideo';
import { Twitch } from '@/assets/logos/Twitch';
import {  Options, OptionsBox, OptionsTitle, ChatBox, TitleOption, SubTitleOption } from '@/styles/style';
import { useAuthContext } from '@/contexts/AuthContext';
import { Grid, Box } from '@mui/material';
import { theme } from '@/styles/theme';

const Settings = () => {
  const { isChatOn, setIsChatOn } = useAddonsContext();
  const { loginWithTwitch, logoutOfTwitch } = useAuthContext();
  const { data: session, status } = useSession();
  const [twitchvideo, toggleTwitchVideo] = useState(false);
  const { t } = useTranslation();

  return (
    <Grid item sm={12} md={4} mt={-3}>
    <Options> 
   <OptionsTitle>
   {t('options.optionsTitle')}
   </OptionsTitle>
    <OptionsBox>
    {session && status === 'authenticated' ? (
      <ChatBox onClick={logoutOfTwitch} style={{cursor: 'pointer'}} >
      <LogoutIcon style={{ marginLeft: '10px', height: '30px', width: '30px', position: 'relative', top: '20px' }}/>
      <TitleOption>
      {t('options.twitchTitle')}
      </TitleOption>
      <SubTitleOption>
      {t('options.twitchSubTitleLOGOUT')}
      </SubTitleOption>
    </ChatBox>
    ):(
    <ChatBox onClick={loginWithTwitch} style={{cursor: 'pointer'}} >
      <Twitch  style={{ marginLeft: '10px', height: '30px', width: '30px', position: 'relative', top: '20px' }} />
      <TitleOption>
      {t('options.twitchTitle')}
      </TitleOption>
      <SubTitleOption>
      {t('options.twitchSubTitleLOGIN')}
      </SubTitleOption>
    </ChatBox>
    )}
     <ChatBox>
    <MovieCreationOutlinedIcon style={{ marginLeft: '10px', height: '30px', width: '30px', position: 'relative', top: '20px' }} />
      <TitleOption>
      {t('options.chatTitle')}
      </TitleOption>
      <SubTitleOption>
      {t('options.chatSubTitle')}
      </SubTitleOption>
      <SettingWithCheckbox checked={isChatOn} setter={setIsChatOn}/>
    </ChatBox>
    <ChatBox>
    <MovieCreationOutlinedIcon style={{ marginLeft: '10px', height: '30px', width: '30px', position: 'relative', top: '20px' }} />
      <TitleOption>
      {t('options.camTitle')}
      </TitleOption>
      <SubTitleOption>
      {t('options.camSubTitle')}
      </SubTitleOption>
      <Checkbox style={{color: `white`, display: 'flex', position: 'absolute', right: '20px', bottom: '22px' , padding: '0px', transform: "scale(1.3)", zIndex:' 999' ,}} 
      onClick={() => toggleTwitchVideo((prev) => !prev)}/>
    </ChatBox>
    </OptionsBox>
      </Options>
      <Box> { twitchvideo && <TwitchVideo/> }</Box> 
      </Grid>
  );
};

export default Settings;
