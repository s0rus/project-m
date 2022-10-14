import { styled } from '@mui/material';

export const TwitchVideoBox = styled('div')`
display: flex;
position: fixed;
left: 1px;
top: 1px;
z-index: 1000000000000;`

export const VideoBox = styled('div')`
display: flex;
position: relative;`

export const MoveIconBox2 = styled('div')`
display:flex;
position: absolute;
cursor:move;
left: 0px;
top: 0px;
height: 30px;
margin-left: 380px;
width: 30px;
opacity: 0.2;
transition: 0.3s;
border-radius: 8px;
&:hover{
  opacity: 100%;
}`

export const TwitchVideoHolder = styled('iframe')`
height: 250px;
width: 400px;
border: none;
display:flex;
left: 5px;
top: 5px;
border-radius: 10px;
position: absolute;
overflow: hidden;
`;