import { Box, Button, styled } from '@mui/material';
import { ChatIconBox,ChatBttn,ChatTitle,BackgroundAccentChat }  from '@/styles/style'
import ChatIcon from '@mui/icons-material/Chat';


const ChatButton = () => {
    return (
        <ChatBttn>
        <Button style={BackgroundAccentChat}/>
        <ChatIconBox><ChatIcon/></ChatIconBox>
        <ChatTitle>Chat</ChatTitle>
        </ChatBttn>
    )};
  
  export default ChatButton;
  