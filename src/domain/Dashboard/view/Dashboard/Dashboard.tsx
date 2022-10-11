import { Grid, Box } from '@mui/material';
import { DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import {  Options, OptionsBox, OptionsTitle, ChatBox, TitleOption, SubTitleOption } from '@/styles/style';
import DashboardBar from '../../components/DashboardBar';
import Playlist from '@/domain/Playlist/view/Playlist';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import Checkbox from '@mui/material/Checkbox';
import TwitchVideo from 'domain/TwitchVideo/TwitchVideo';
import { Twitch } from '@/assets/logos/Twitch';
import Navigation from '@/domain/Navigation';
import { theme } from '@/styles/theme';
import { useAuthContext } from '@/contexts/AuthContext';


const Dashboard = () => {

  const { loginWithTwitch, logoutOfTwitch } = useAuthContext();
  const { data: session, status } = useSession();
  const [twitchvideo, toggleTwitchVideo] = useState(false);
  const { t } = useTranslation();

  
  return (
    <DashboardWrapper>
      <DashboardContainer>
        <Grid container>
          <Grid item xs={12}>
            <DashboardBar />
          </Grid>
          <Grid item xs={12}>
            <Grid container sx={{ mt: '1rem', height: '100%' }} spacing={2}>
              <Grid item sm={12} md={8}>
                <Playlist />
              </Grid>
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
                {t('options.camTitle')}
                </TitleOption>
                <SubTitleOption>
                {t('options.camSubTitle')}
                </SubTitleOption>
                <Checkbox style={{color: `${theme.palette.primary.main}`, display: 'flex', position: 'absolute', right: '20px', bottom: '22px' , padding: '0px', transform: "scale(1.3)", zIndex:' 999' ,}} 
                onClick={() => toggleTwitchVideo((prev) => !prev)}/>
              </ChatBox>
              <ChatBox>
              <ChatBubbleOutlineIcon  style={{ marginLeft: '10px', height: '30px', width: '30px', position: 'relative', top: '20px' }} />
                <TitleOption>
                  {t('options.chatTitle')}
                </TitleOption>
                <SubTitleOption>
                {t('options.chatSubTitle')}
                </SubTitleOption>
                <Checkbox style={{color: `gray`, display: 'flex', position: 'absolute', right: '20px', bottom: '22px' , padding: '0px', transform: "scale(1.3)", zIndex:' 999' ,}} 
                disabled checked />
              </ChatBox>
              </OptionsBox>
                </Options>
                </Grid>
                <Box> { twitchvideo && <TwitchVideo/> }</Box> 
              </Grid>
            </Grid>
          </Grid>
      </DashboardContainer>
      <Navigation/>
    </DashboardWrapper>
  );
};

export default Dashboard;