import { TwitchChatBox, TwitchChatContainer, TwitchChatHolder } from './TwitchChat.styles';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import { theme } from '@/styles/theme';
import { useAddonsContext } from '@/domain/App/context/Addons.context';
import Hidden from '@mui/material/Hidden';
const TwitchChat = () => {
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  const { theaterView } = useAddonsContext();
  return (
    <>
      <Hidden lgDown>
        <TwitchChatBox style={{ height: isMediumDown ? '46%' : '' }}>
          <TwitchChatContainer style={{ width: '100%' }}>
            <TwitchChatHolder
              style={{
                width: isMediumDown ? '100%' : '100%',
                height: theaterView ? '95.4vh' : '80vh',
                borderTopRightRadius: theaterView ? '0px' : '14px',
                borderBottomRightRadius: theaterView ? '0px' : '14px',
              }}
              src={`https://www.twitch.tv/embed/videomtv/chat?parent=murzyniarnia.com&darkpopout`}
            />
          </TwitchChatContainer>
        </TwitchChatBox>
      </Hidden>

      <Hidden lgUp>
        <TwitchChatBox style={{ height: '46%' }}>
          <TwitchChatContainer style={{ width: '100%' }}>
            <TwitchChatHolder
              style={{
                width: '100%',
                height: '100%',
              }}
              src={`https://www.twitch.tv/embed/videomtv/chat?parent=murzyniarnia.com&darkpopout`}
            />
          </TwitchChatContainer>
        </TwitchChatBox>
      </Hidden>
    </>
  );
};

export default TwitchChat;
