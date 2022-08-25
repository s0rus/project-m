import { getTwitchChatParent } from '@/pages/_app';
import React from 'react';
import { TwitchChatBox, TwitchChatContainer, TwitchChatHolder } from './TwitchChat.styles';

const TwitchChat = () => {
  return (
    <TwitchChatBox>
      <TwitchChatContainer>
        <TwitchChatHolder
          src={`https://www.twitch.tv/embed/h2p_gucio/chat?parent=${getTwitchChatParent()}&darkpopout`}
        />
      </TwitchChatContainer>
    </TwitchChatBox>
  );
};

export default TwitchChat;
