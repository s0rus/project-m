import React from 'react';
import Image from 'next/image';
import { Box, Button, styled } from '@mui/material';
import TwitchLogo from 'components/Icons/Twitch.svg'

const BoxIcon = styled('div')`
height: 64px;
width: 64px;
margin-top: -1px;`


const VideoIconBox = styled('div')`
height: 48px;
width: 50px;
display:flex;
display: flex;
position: absolute;
border: 2px solid #6430ff;
background: #1f1f28;
border-radius: 50px;
right: -3%;
bottom: -20%;
padding: 0px;
cursor: pointer;
transition: 0.5s;
&:hover {
  -webkit-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
  -moz-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
  box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
  border: 2px solid white;`

const TwitchIcon = () => {
  return (
    <VideoIconBox>
        <BoxIcon> 
          <Image src={TwitchLogo} width={60} height={60} />
        </BoxIcon>
    </VideoIconBox>
  );
};

export default TwitchIcon;
