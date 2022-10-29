import { TwitchChatBox, TwitchChatContainer, TwitchChatHolder } from './TwitchChat.styles';
import React from 'react';


const TwitchChat = () => {

  return (
    <TwitchChatBox>
      <TwitchChatContainer>
      <TwitchChatHolder
          src={`https://www.twitch.tv/embed/videomtv/chat?parent=murzyniarnia.com&darkpopout`}/>
      </TwitchChatContainer>
    </TwitchChatBox>
  );
};

export default TwitchChat;

