import AddFunction from '@/components/AddFunction';
import TwitchChat from '@/components/TwitchChat';
import TwitchVideo from '@/components/TwitchVideo';
import ChatButton from '@/components/ChatButton';
import NavBottom from '@/components/NavBottom';
import VideoButton from '@/components/VideoButton';
import VideoPlayer from '@/components/VideoPlayer';
import TwitchIcon from '@/components/TwitchIcon';
import MainLayout, { MainContent } from '@/layouts/MainLayout';
import { Box, Button, styled } from '@mui/material';
import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import TwitchLogo from 'components/Icons/Twitch.svg'
import Image from 'next/image';
import 'simplebar/dist/simplebar.min.css';
import AddIcon from '@mui/icons-material/Add';
import { BackgroundAccentAdd, BackgroundAccentOptions ,AddIconBox, NavTop, OptionsBox, OptionsH1, Tittle ,H5twitch, TTVimg, Icon}  from '@/styles/style'
import { Fab } from '@mui/material';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const [chat, toggleChat] = useState(true);
  const [video, toggleVideo] = useState(false);
  const [login, toggleLogin] = useState(true);
  const [boxadd, toggleBox] = useState(false);
  const [boxremove, removeBox] = useState(true);

  const DummyDiv = styled('div')`
    height: 100vh;
    width: 100%;
    margin-top: 80px;
    z-index: 999 !important;
    display: flex;
  `;

  useEffect(() => {
    console.log('SESSION', session);
    console.log('STATUS', status);
  }, [session, status]);

  const handleTwitchLogin = async () => {
    await signIn('twitch');
  };

  const handleTwitchLogout = async () => {
    await signOut();
  };
 
 const AbsoluteBox = styled('div')`
 display: flex;
 position: absolute;
 right: 10px;
 top: 10px;`

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
            <VideoPlayer />

            <NavTop>
                <Tittle>Playlista</Tittle>
                <AbsoluteBox>
                <Fab onClick={() => toggleBox((prev) => !prev) } style={BackgroundAccentAdd} color="primary" aria-label="add"><AddIcon/></Fab>
                </AbsoluteBox>
            </NavTop>
            
            <DummyDiv>

                <OptionsBox>
                <OptionsH1>Ustawienia</OptionsH1>
              {session && status === 'authenticated' ? (
                <Button style={BackgroundAccentOptions} variant='contained' onClick={handleTwitchLogout}>
                  <H5twitch>Wyloguj</H5twitch>
                  <TwitchIcon/>
                </Button>
              ) : (
                <Button style={BackgroundAccentOptions} variant='contained' onClick={handleTwitchLogin}>
                  <H5twitch>Zaloguj</H5twitch>
                  <TwitchIcon/>
                </Button>)}
                <div onClick={() => toggleVideo((prev) => !prev) }> <VideoButton/> </div> 
                <div onClick={() => toggleChat((prev) => !prev) }> <ChatButton/> </div> 
              </OptionsBox>
              
              <Box> {video && <TwitchVideo/> } </Box>

            <NavBottom/>

            </DummyDiv>
          </SimpleBar>
        </MainContent>
        <Box> {chat && <TwitchChat /> } </Box>
        <Box> {boxadd && <AddFunction/> }</Box>
      </MainLayout>
    </>
  );
};

export default Home;
