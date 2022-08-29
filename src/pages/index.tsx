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
import { TTVimg,H5twitch,TwitchButton,NavTop,NavBox,AddIconBox,MoreVertIconBox,LockOpenIconBox,MiddleNav,PlaylistMain,BackgroundPlaylist,H1,H2,H3,TwitchImgBox,NavBot,ChatIconBox,ChatIconImg,ChatTitle,A,Icon,NavTitle,BackgroundAdd,AddVideo,TextFieldBox,TextFieldcss,ButtonBox,BrugImgBox }  from '@/styles/style'


const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const [chat, toggleChat] = useState(true);
  const [login, toggleLogin] = useState(true);
  const [boxadd, toggleBox] = useState(false);
  const [boxremove, removeBox] = useState(true);
  const DummyDiv = styled('div')`
    height: 1000px;
  `;

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
              <AddIconBox onClick={() => toggleBox((prev) => !prev) }><AddIcon/></AddIconBox> 
              <MoreVertIconBox><MoreVertIcon/></MoreVertIconBox>
              <LockOpenIconBox><LockOpenIcon/></LockOpenIconBox>
                <MiddleNav>Playlista</MiddleNav>
                {session && status == 'authenticated' ? ( 
                <TwitchButton onClick={handleTwitchLogout}>
                  <Button style={{maxWidth: "150px",maxHeight: "30px",minWidth: "150px",minHeight: "20px"}} variant='contained'/>
                  <H5twitch>Wyloguj</H5twitch>
                  <TTVimg><Image src={TwitchLogo} width={58} height={48}/></TTVimg></TwitchButton>
                ) : (
                    <TwitchButton onClick={handleTwitchLogin}>
                    <Button style={{maxWidth: "150px",maxHeight: "30px",minWidth: "150px",minHeight: "20px"}} variant='contained'/>
                    <H5twitch>Zaloguj</H5twitch>
                    <TTVimg><Image src={TwitchLogo} width={58} height={48}/></TTVimg></TwitchButton>
                    )}
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
              <form>
                <BrugImgBox>
              <Image src={Brug} width={50} height={50} />
              </BrugImgBox>
              <TextFieldBox>
              <TextFieldcss id="outlined-input" label="Link"/>
              <TextFieldcss id="outlined-input" label="Tytuł"/>
              </TextFieldBox>
              <ButtonBox>
              <Button variant="contained" onClick={() => removeBox((prev) => !prev)} onClick={() => toggleBox((prev) => !prev)} >Dodaj✔️</Button>
              </ButtonBox>
              </form>
              </AddVideo>
              </BackgroundAdd>}</Box>
            </PlaylistMain>
            <NavBot>
            <ChatIconBox onClick={() => toggleChat((prev) => !prev)}>
            <ChatIconImg><ChatIcon/></ChatIconImg><ChatTitle>Chat</ChatTitle></ChatIconBox>
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
