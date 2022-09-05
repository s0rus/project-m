import { Box, Button, styled } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useContext ,useEffect, useState } from 'react';
import 'simplebar/dist/simplebar.min.css';
import TwitchLogo from 'components/Icons/Twitch.svg'
import Image from 'next/image';
import ChatIcon from '@mui/icons-material/Chat';
import { OptionsBoxX, OptionsH1, TwitchButton, H5twitch, TTVimg, Icon, ChatBox, ChatBttn, ChatIconBox, ChatTitle, VideoBox, VideoBttn, VideoTitle, BackgroundAccentLogin, BackgroundAccentChat }  from '@/styles/style'
import OpenWithIcon from '@mui/icons-material/OpenWith';

const OptionsBox = () => {
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

const Box0 = styled('div')`
display: flex;`

const Box1 = styled('div')`
display: flex;`

const MoveIconBox = styled('div')`
display:flex;
position:absolute;
right: -10px;
top: -10px;
cursor: pointer;
`

    return (
        <Box0>
        <OptionsBoxX>
          <MoveIconBox><OpenWithIcon/></MoveIconBox>
  <OptionsH1>Ustawienia</OptionsH1>
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
    </OptionsBoxX>
    </Box0>
    );
  };

export default OptionsBox;