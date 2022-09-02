import TwitchChat from '@/components/TwitchChat';
import VideoPlayer from '@/components/VideoPlayer';
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
import Brug from 'components/Icons/Brug.svg'
import Image from 'next/image';
import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ChatBox,ChatBttn,OptionsBox,BackgroundAccentChat,BackgroundAccentAdd,BackgroundAccentLogin,FingerprintColor,FontOk,FontStyle,DummyDiv, TTVimg,H5twitch,TwitchButton,NavTop,NavBox,AddIconBox,MoreVertIconBox,LockOpenIconBox,MiddleNav,PlaylistMain,BackgroundPlaylist,H1,H2,H3,TwitchImgBox,NavBot,ChatIconBox,ChatIconImg,ChatTitle,A,Icon,NavTitle,BackgroundAdd,AddVideo,TextFieldBox,TextFieldcss,ButtonBox,BrugImgBox }  from '@/styles/style'
import { Fab } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import TextField from '@mui/material/TextField';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const [chat, toggleChat] = useState(true);
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
        <aside id='main'>
          <SimpleBar style={{ maxHeight: '100vh' }}>
            <VideoPlayer />
            <DummyDiv>
            <NavTop>
                <NavBox>
                <AddIconBox><Fab style={BackgroundAccentAdd} onClick={() => toggleBox((prev) => !prev) } color="primary" aria-label="add"><AddIcon/></Fab></AddIconBox>
                <MoreVertIconBox><MoreVertIcon/></MoreVertIconBox>
                <LockOpenIconBox><LockOpenIcon/></LockOpenIconBox>
                <MiddleNav>Playlista</MiddleNav>
                    </NavBox>
                    </NavTop>
<PlaylistMain>
                        <BackgroundPlaylist>
                        <Image src={Brug} width={90} height={105} />
                        <H1>Tytuł </H1>
                        <H2>Dodane przez: </H2>
                        <a href="Link do kanalu ttv dodajacego" ><H3>Nick</H3></a>
                        <TwitchImgBox>
                        <Image src={TwitchLogo} width={25} height={25} />
                        </TwitchImgBox>
                        </BackgroundPlaylist>
              <Box> {boxadd && boxremove && <BackgroundAdd>
              <AddVideo>
                <BrugImgBox><Image src={Brug} width={50} height={50} /></BrugImgBox>
              <TextFieldBox>
              <TextField id="filled-basic" label="Link" autoComplete='off' variant="filled" />
              <p></p>
              <TextField id="filled-basic" label="Tytuł" autoComplete='off' variant="filled" />
              </TextFieldBox>
              <ButtonBox>
              <Button style={FontStyle} variant="contained" onClick={() => toggleBox((prev) => !prev)} >Dodaj<IconButton aria-label="fingerprint" color="secondary"><Fingerprint style={FingerprintColor} /></IconButton></Button>
              </ButtonBox>
              </AddVideo>
              </BackgroundAdd>}</Box>
    <OptionsBox>
          {session && status == 'authenticated' ? ( 
                <TwitchButton onClick={handleTwitchLogout}>
                  <Button style={BackgroundAccentLogin} variant='contained'/>
                  <H5twitch>Wyloguj</H5twitch>
                  <TTVimg><Icon><Image src={TwitchLogo} width={58} height={58}/></Icon></TTVimg></TwitchButton>
                  ) : (
                    <TwitchButton onClick={handleTwitchLogin}>
                    <Button style={BackgroundAccentLogin} variant='contained'/>
                    <H5twitch>Zaloguj</H5twitch>
                    <TTVimg><Icon><Image src={TwitchLogo} width={58} height={58}/></Icon></TTVimg></TwitchButton>
                    )}
              <ChatBox onClick={() => toggleChat((prev) => !prev)} >
              <ChatBttn>
                <Button style={BackgroundAccentChat}/>
                <ChatIconBox><ChatIcon/></ChatIconBox>
                </ChatBttn>
                <ChatTitle>Chat</ChatTitle>
              </ChatBox>
    </OptionsBox>
</PlaylistMain>
              <NavBot>
              <A href='https://discord.com/invite/bRwn7caV3f'> <Icon><Image src={DiscordLogo} width={48} height={48} /><NavTitle>Discord</NavTitle></Icon></A>
              <A href='https://www.twitch.tv/khamires'> <Icon><Image src={TwitchLogo} width={48} height={48} /><NavTitle>Twitch</NavTitle></Icon></A>
              <A href='https://streamelements.com/khamires/tip'> <Icon><Image src={PaypalLogo} width={48} height={48} /><NavTitle>Donate</NavTitle></Icon></A>
              </NavBot>
            </DummyDiv>
          </SimpleBar>
        </aside>
        </MainContent>
        <Box>{/* <TwitchChat /> */}</Box>
        <aside id='chat'>
    <Box>{chat && <TwitchChat/>}</Box>
        </aside>
      </MainLayout>
    </>
  );
};

export default Home;
