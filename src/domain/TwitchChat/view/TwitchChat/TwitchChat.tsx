import { TwitchChatBox, TwitchChatContainer, TwitchChatHolder } from './TwitchChat.styles';
import React from 'react';
import { getTwitchChatParent } from '@/pages/_app';


const TwitchChat = () => {

  return (
    <TwitchChatBox>
      <TwitchChatContainer>
      <TwitchChatHolder
          src={`https://www.twitch.tv/embed/khamires/chat?parent=murzyniarnia.com&darkpopout`}/>
      </TwitchChatContainer>
    </TwitchChatBox>
  );
};

export default TwitchChat;

