import { Box, Button, styled } from '@mui/material';
<<<<<<< Updated upstream
import { ChatIconBox,ChatBttn,ChatTitle,BackgroundAccentChat }  from '@/styles/style'
import ChatIcon from '@mui/icons-material/Chat';

=======
import { A,ChatIconBox,ChatBttn,ChatTitle,BackgroundAccentChat, Icon }  from '@/styles/style'
import ChatIcon from 'components/Icons/ChatIcon.svg';
import Image from 'next/image';
import React from 'react';

const BoxIcon = styled('div')`
margin-top: 6px;`
>>>>>>> Stashed changes

const VideoIconBox = styled('div')`
height: 48px;
width: 50px;
<<<<<<< Updated upstream
display:flex;
=======
display: flex;
>>>>>>> Stashed changes
position: absolute;
border: 2px solid #6430ff;
background: #1f1f28;
border-radius: 50px;
right: -20%;
bottom: -20%;
padding: 10px;
cursor: pointer;
transition: 0.5s;
&:hover {
  -webkit-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
  -moz-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
  box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
  border: 2px solid white;`

const ChatButton = () => {
    return (
        <ChatBttn>
        <Button style={BackgroundAccentChat}/>
<<<<<<< Updated upstream
        <VideoIconBox><ChatIcon/></VideoIconBox>
        <ChatTitle>Chat</ChatTitle>
=======
        <VideoIconBox><A> <BoxIcon> <Image src={ChatIcon} width={48} height={60} /></BoxIcon></A></VideoIconBox>
        <ChatTitle>Czat</ChatTitle>
>>>>>>> Stashed changes
        </ChatBttn>
    )};
  
  export default ChatButton;
  