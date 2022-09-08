import { Box, Button, styled } from '@mui/material';
import { ChatIconBox,ChatBttn,ChatTitle,BackgroundAccentChat }  from '@/styles/style'
import ChatIcon from '@mui/icons-material/Chat';


const VideoIconBox = styled('div')`
height: 48px;
width: 50px;
display:flex;
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
        <VideoIconBox><ChatIcon/></VideoIconBox>
        <ChatTitle>Chat</ChatTitle>
        </ChatBttn>
    )};
  
  export default ChatButton;
  