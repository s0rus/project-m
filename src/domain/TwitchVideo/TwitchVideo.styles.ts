import { styled } from '@mui/material';

export const TwitchVideoBox = styled('div')`
display: flex;
position: fixed;
left: 1px;
top: 1px;
z-index: 1000;`

export const VideoBox = styled('div')`
maxWidth: 150px;
maxHeight: 30px;
minWidth: 150px;
minHeight: 20px;
display: flex;
position: relative;`

export const MoveIconBox2 = styled('div')`
display:flex;
position: absolute;
cursor:move;
left: -100px;
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
height: 200px;
width: 300px;
border: none;
display:flex;
left: 5px;
top: 5px;
border-radius: 10px;
position: absolute;
overflow: hidden;
`;