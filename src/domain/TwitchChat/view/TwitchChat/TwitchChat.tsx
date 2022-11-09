import { TwitchChatBox, TwitchChatContainer, TwitchChatHolder } from './TwitchChat.styles';
import React from 'react';
import { useMediaQuery  } from '@mui/material';
import { theme } from '@/styles/theme';

const TwitchChat = () => {
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeDown = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  return (

    <TwitchChatBox style={{ width: isLargeDown ? '35%' : '100%'}} >
      <TwitchChatContainer>
      <TwitchChatHolder
          src={`https://www.twitch.tv/embed/videomtv/chat?parent=murzyniarnia.com&darkpopout`}
          style={{ minHeight: isMediumDown ? '35vh' : '100vh'}}/>
      </TwitchChatContainer>
    </TwitchChatBox>
  );
};

export default TwitchChat;

