import { getTwitchChatParent } from '@/pages/_app';
import React from 'react';
import { TwitchVideoHolder, TwitchVideoBox } from './TwitchVideo.styles';
import Draggable from 'react-draggable';
import { styled } from '@mui/material';


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
&:hover {
  -webkit-text-stroke: 1px white;`

 export const TransitionBox = styled('div')`
transition: 0s;`


const TwitchVideo = () => {
  return (
    <Draggable>
      <TransitionBox>
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
                </TransitionBox>
        </Draggable>
  );
};

export default TwitchVideo;
