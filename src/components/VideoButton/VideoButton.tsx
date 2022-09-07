import { Box, Button, styled } from '@mui/material';
import { ChatIconBox,VideoBttn,VideoTitle,BackgroundAccentChat }  from '@/styles/style'
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';


const VideoButton = () => {
    return (
        <VideoBttn>
    <Button style={BackgroundAccentChat}/>
    <ChatIconBox><MissedVideoCallIcon/></ChatIconBox>
    <VideoTitle>Video</VideoTitle>
    </VideoBttn>
    )};
  
  export default VideoButton;
  