import { getTwitchChatParent } from '@/pages/_app';
import React from 'react';
import { TwitchVideoHolder, TwitchVideoBox } from './TwitchVideo.styles';
import Draggable from 'react-draggable';
import { styled } from '@mui/material';

export const Pion = styled('h1')`
height: 260px;
transform: rotate: '90deg'
width: 440px;
`

export const TwitchTitle = styled('div')`
height: 100px;
font-size: 1.5rem;
font-family: poppins, sans-serif;
font-weight: 300;
font-style: normal;
width: 200px;
display: flex;
text-align: right;
position: relative;
margin-top: 10px;
-webkit-text-stroke: 0.5px black ;
transition: 0.5s;
&:hover {
  -webkit-text-stroke: 1px white;`

const TwitchChat = () => {
  return (
    <Draggable>
    <TwitchVideoBox>
      <TwitchTitle style={{
          position: "absolute",
          top: "30%",
          left: "85%",
          width: "100px",
          height: "50px",
          transform: "rotate(90deg)",
          fontFamily: 'poppins, sans-serif',
          fontWeight: '300',
          fontSize: '2.3rem',
          fontStyle: 'normal',
        }}>Twitch</TwitchTitle>
        <TwitchVideoHolder
          src={`https://player.twitch.tv/?channel=khamires&parent=${getTwitchChatParent()}&muted=true`}
        />
        </TwitchVideoBox>
        </Draggable>
  );
};

export default TwitchChat;
