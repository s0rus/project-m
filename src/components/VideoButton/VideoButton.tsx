<<<<<<< Updated upstream
import { Box, Button } from '@mui/material';
import { ChatIconBox,VideoBttn,VideoTitle,BackgroundAccentVideo }  from '@/styles/style'
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import React, { useState } from 'react';

=======
import { styled ,Box, Button } from '@mui/material';
import { ChatIconBox,VideoBttn,VideoTitle,BackgroundAccentVideo, A }  from '@/styles/style'
import VideoIcon from 'components/Icons/VideoIcon.svg'
import Image from 'next/image';
import React, { useState } from 'react';

const BoxIcon = styled('div')`
margin-top: 10px;`

>>>>>>> Stashed changes
const VideoButton = () => {
    return (
        <Box style={{width: '1px',}} >
    <Button style={BackgroundAccentVideo}/>
<<<<<<< Updated upstream
    <ChatIconBox><MissedVideoCallIcon/></ChatIconBox>
    <VideoTitle>Video</VideoTitle>
=======
    <ChatIconBox><A> <BoxIcon> <Image src={VideoIcon} width={48} height={60} /></BoxIcon></A></ChatIconBox>
    <VideoTitle>Kamerka</VideoTitle>
>>>>>>> Stashed changes
    </Box>
    )};
  
  export default VideoButton;
  