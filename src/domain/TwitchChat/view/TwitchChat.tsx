import { TwitchChatBox, TwitchChatContainer, TwitchChatHolder } from './TwitchChat.styles';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import { theme } from '@/styles/theme';

const TwitchChat = () => {
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <TwitchChatBox style={{ width: isMediumDown ? '100%' : '380px' }}>
      <TwitchChatContainer style={{ width: isMediumDown ? '100%' : '' }}>
        <TwitchChatHolder
          style={{ height: isMediumDown ? '30vh' : '80vh', width: isMediumDown ? '100%' : '' }}
          src={`https://www.twitch.tv/embed/videomtv/chat?parent=murzyniarnia.com&darkpopout`}
        />
      </TwitchChatContainer>
    </TwitchChatBox>
  );
};

export default TwitchChat;
