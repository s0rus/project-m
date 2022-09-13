import { theme } from '@/styles/theme';
import { styled } from '@mui/material';
import { Box } from '@mui/material';


export const TwitchVideoHolder = styled('iframe')`
height: 250px;
width: 420px;
border: none;
display:flex;
left: 10px;
top: 5px;
border-radius: 10px;
position: absolute;
`;
export const TwitchVideoBox = styled('div')`
height: 260px;
width: 440px;
position: absolute;
display: flex;
background: hsla(255, 100%, 59%, 0.53);
cursor: move;
margin-top: 30px;
transition: 1.5s;
border-radius: 10px;
pointer-events: all;
box-shadow: 4px 4px 44px 4px rgb(98 46 255 / 13%);
&:hover{
  background: #6430ff;
  cursor: move;}`

export const VideoBox = styled('div')`
maxWidth: 150px;
maxHeight: 30px;
minWidth: 150px;
minHeight: 20px;
display: flex;
position: relative;`