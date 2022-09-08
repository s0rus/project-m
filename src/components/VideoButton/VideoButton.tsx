import { Box, Button } from '@mui/material';
import { ChatIconBox,VideoBttn,VideoTitle,BackgroundAccentVideo }  from '@/styles/style'
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import React, { useState } from 'react';

const VideoButton = () => {
    return (
        <Box style={{width: '1px',}} >
    <Button style={BackgroundAccentVideo}/>
    <ChatIconBox><MissedVideoCallIcon/></ChatIconBox>
    <VideoTitle>Video</VideoTitle>
    </Box>
    )};
  
  export default VideoButton;
  