import { TwitchChatBox, TwitchChatContainer, TwitchChatHolder } from './TwitchChat.styles';
import React from 'react';
import { theme } from '@/styles/theme';
import { useMediaQuery  } from '@mui/material';
const TwitchChat = () => {
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <TwitchChatBox>
      <TwitchChatContainer>
      <TwitchChatHolder style={{ minHeight: isMediumDown ? '50vh' : '100vh', marginTop: isMediumDown ? '-10px' : '0'}} 
          src={`https://www.twitch.tv/embed/videomtv/chat?parent=murzyniarnia.com&darkpopout`}/>
      </TwitchChatContainer>
    </TwitchChatBox>
  );
};

export default TwitchChat;

