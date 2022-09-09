import { getTwitchChatParent } from '@/pages/_app';
import React from 'react';
import { TwitchVideoHolder, TwitchVideoBox } from './TwitchVideo.styles';
import Draggable from 'react-draggable';
import { styled } from '@mui/material';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import { isAbsolute } from 'path';

export const TwitchTitle = styled('div')`
height: 100px;
font-size: 1.5rem;
font-family: poppins, sans-serif;
font-weight: 300;
font-style: normal;
width: 200px;
display: flex;
text-align: right;
margin: 0px;
padding: 0px;
-webkit-text-stroke: 0.5px black ;
&:hover {
  -webkit-text-stroke: 1px white;`

 export const TransitionBox = styled('div')`
transition: 0s;
display:flex;
width: 100vw;
position: absolute;`


const MoveIconBox2 = styled('div')`
display:flex;
position: absolute;
right: 210px;
top: -20px;
cursor:move;
opacity: 10%;
transition: 0.5s;
&:hover{
  opacity: 100%;
}`

const Box2 = styled('div')`
display:flex;
cursor: pointer;`

const TwitchVideo = () => {
  return (
<Draggable bounds={{left: -1040, top: -780, right: 60, bottom: 285}} >
<TransitionBox>
    <TwitchVideoBox>
    <MoveIconBox2> <OpenWithIcon/></MoveIconBox2>
      <TwitchVideoHolder src={`https://player.twitch.tv/?channel=khamires&parent=${getTwitchChatParent()}&muted=true`}>
      </TwitchVideoHolder>
    </TwitchVideoBox>
</TransitionBox>
</Draggable>

  );
};

export default TwitchVideo;
