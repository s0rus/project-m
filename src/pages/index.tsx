import TwitchChat from '@/components/TwitchChat';
import TwitchVideo from '@/components/TwitchVideo';
import VideoPlayer from '@/components/VideoPlayer';
import OptionsBox from '@/components/OptionsBox';
import PlaylistAdd from '@/components/PlaylistAdd';
import AddFunction from '@/components/AddFunction';
import MainLayout, { MainContent } from '@/layouts/MainLayout';
import { Box, Button, styled } from '@mui/material';
import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import DiscordLogo from 'components/Icons/Discord.svg'
import TwitchLogo from 'components/Icons/Twitch.svg'
import PaypalLogo from 'components/Icons/PayPal.svg'
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import { BoxOptions,BackgroundAccentAdd,DummyDiv,NavTop,NavBox,AddIconBox,MoreVertIconBox,LockOpenIconBox,MiddleNav,PlaylistMain,NavBot,A,Icon,NavTitle,ChatBox,ChatIconBox,ChatBttn,ChatTitle,BackgroundAccentChat, VideoBox, VideoBttn, VideoTitle}  from '@/styles/style'
import { Fab } from '@mui/material';
import Draggable from 'react-draggable';
import Fingerprint from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const [chat, toggleChat] = useState(true);
  const [video, toggleVideo] = useState(false);
  const [login, toggleLogin] = useState(true);
  const [boxadd, toggleBox] = useState(false);
  const [boxremove, removeBox] = useState(true);

  useEffect(() => {
    console.log('SESSION', session);
    console.log('STATUS', status);
  }, [session, status]);

  const handleTwitchLogin = async () => {
    await signIn('discord');
  };

  const handleTwitchLogout = async () => {
    await signOut();
  };


  return (
    <>
<Head>
<title>Projekt M</title>
<meta name='description' content='Projekt M sussy' />
<link rel='icon' href='/favicon.ico' />
</Head>
<MainLayout>
<MainContent>
<SimpleBar style={{ maxHeight: '100vh' }}>
            {/* PLAYER */}
              <VideoPlayer />
<DummyDiv>
<NavTop>
    {/* GÓRNY PASEK */}
              <AddIconBox>
              <Fab onClick={() => toggleBox((prev) => !prev) } style={BackgroundAccentAdd} color="primary" aria-label="add"><AddIcon/></Fab>
              </AddIconBox>
              <MoreVertIconBox><MoreVertIcon/></MoreVertIconBox>
              <LockOpenIconBox><LockOpenIcon/></LockOpenIconBox>
              <MiddleNav>Playlista</MiddleNav>

</NavTop>
<PlaylistMain>
            {/* FILMIK TEMPLATE (tymczasowo) */}
              <PlaylistAdd/>
            {/* USTAWIENIA (w optionsbox jest logowanie) */}
<Draggable bounds={{left: -1236, right: 50, top: -40, bottom: 350,}}>
<BoxOptions>
              <OptionsBox/>
<ChatBox onClick={() => toggleChat((prev) => !prev)} >
<ChatBttn>
<Button style={BackgroundAccentChat}/>
<ChatIconBox><ChatIcon/></ChatIconBox>
</ChatBttn>
<ChatTitle>Chat</ChatTitle>
</ChatBox>
<VideoBox onClick={() => toggleVideo((prev) => !prev)} >
<VideoBttn>
<Button style={BackgroundAccentChat}/>
<ChatIconBox><MissedVideoCallIcon/></ChatIconBox>
</VideoBttn>
<VideoTitle>Video</VideoTitle>
</VideoBox>
</BoxOptions>
</Draggable>

            {/* Video Twitch */} 
              <Box> {video && <TwitchVideo/> }</Box>
            {/* DODAWANIE FILMOW (czasami trzeba 2 razy kliknac zeby zadzialalo sussy) */}
              <Box> {boxadd && <AddFunction/> }</Box>
</PlaylistMain>
<NavBot>
            {/* DOLNY PASEK */}
              <A href='https://discord.com/invite/bRwn7caV3f'> <Icon><Image src={DiscordLogo} width={48} height={48} /><NavTitle>Discord</NavTitle></Icon></A>
              <A href='https://www.twitch.tv/khamires'> <Icon><Image src={TwitchLogo} width={48} height={48} /><NavTitle>Twitch</NavTitle></Icon></A>
              <A href='https://streamelements.com/khamires/tip'> <Icon><Image src={PaypalLogo} width={48} height={48} /><NavTitle>Donate</NavTitle></Icon></A>
</NavBot>
</DummyDiv>
</SimpleBar>
</MainContent>
            {/* TWITCH CHAT */}
              <Box> {chat && <TwitchChat/> } </Box>
</MainLayout>
    </>
  );
};

export default Home;
