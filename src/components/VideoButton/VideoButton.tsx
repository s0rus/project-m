
import { styled ,Box, Button } from '@mui/material';
import { ChatIconBox,VideoBttn,VideoTitle,BackgroundAccentVideo, A }  from '@/styles/style'
import VideoIcon from 'components/Icons/VideoIcon.svg'
import Image from 'next/image';
import React, { useState } from 'react';

const BoxIcon = styled('div')`
margin-top: 6px;`

const VideoIconBox = styled('div')`
height: 48px;
width: 50px;

display:flex;

display: flex;
position: absolute;
border: 2px solid #6430ff;
background: #1f1f28;
border-radius: 50px;
right: 18%;
bottom: 42.5%;
padding: 10px;
cursor: pointer;
transition: 0.5s;
&:hover {
  -webkit-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
  -moz-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
  box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
  border: 2px solid white;`

const VideoButton = () => {
    return (
        <Box style={{width: '10px',}} >
    <Button style={BackgroundAccentVideo}/>
    <VideoIconBox><A> <BoxIcon> <Image src={VideoIcon} width={48} height={60} /></BoxIcon></A></VideoIconBox>
    <VideoTitle>Video</VideoTitle>
    </Box>
    )};
  
  export default VideoButton;
  