import TwitchChat from '@/components/TwitchChat';
import TwitchVideo from '@/components/TwitchVideo';
import VideoPlayer from '@/components/VideoPlayer';
import OptionsBox from '@/components/OptionsBox';
import VideoButton from '@/components/VideoButton';
import ChatButton from '@/components/ChatButton';
import NavBottom from '@/components/NavBottom';
import AddFunction from '@/components/AddFunction';
import MainLayout, { MainContent } from '@/layouts/MainLayout';
import { Box, Button, styled } from '@mui/material';
import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import AddIcon from '@mui/icons-material/Add';
import { BoxOptions,BackgroundAccentAdd,DummyDiv,NavTop,AddIconBox,MiddleNav,PlaylistMain,ChatBox,VideoBox,}  from '@/styles/style'
import { Fab } from '@mui/material';
import Draggable from 'react-draggable';

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

const ComponentA = styled('div')`
`
const ComponentB = styled('div')`
`

  return (
    <>
<Head>
<title>Projekt M</title>
<meta name='description' content='Projekt M sussy' />
<link rel='icon' href='/favicon.ico' />
</Head>

<MainLayout>
<MainContent>
      <ComponentA>
<SimpleBar style={{ maxHeight: '100vh' }}>
            {/* PLAYER */}
              <VideoPlayer />
<DummyDiv>
<NavTop>

                              {/* GÓRNY PASEK */}
      <AddIconBox> <Fab onClick={() => toggleBox((prev) => !prev) } style={BackgroundAccentAdd} color="primary" aria-label="add"><AddIcon/></Fab> </AddIconBox>
                              {/* DODAWANIE FILMOW */}
              <Box> {boxadd && <AddFunction/> }</Box>
              <MiddleNav>Playlista</MiddleNav>
</NavTop>
<PlaylistMain>
                              {/* USTAWIENIA (w optionsbox jest logowanie) */}
  <Draggable bounds={{left: -1236, right: 50, top: -40, bottom: 350,}}>
    <BoxOptions>
              <OptionsBox/>
        <ChatBox onClick={() => toggleChat((prev) => !prev)}> <ChatButton/> </ChatBox>
        <VideoBox onClick={() => toggleVideo((prev) => !prev)}> <VideoButton/> </VideoBox>
    </BoxOptions>
  </Draggable>
                              {/* Video Twitch */} 
              <Box> {video && <TwitchVideo/> }</Box>
</PlaylistMain>
                              {/* DOLNY PASEK */}
              <NavBottom/>
</DummyDiv>
</SimpleBar>
</ComponentA>
</MainContent>
                              {/* TWITCH CHAT */}
              <Box> {chat && <TwitchChat/> } </Box>
</MainLayout></>);};

export default Home;
