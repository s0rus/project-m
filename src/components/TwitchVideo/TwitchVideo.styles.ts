import { theme } from '@/styles/theme';
import { styled } from '@mui/material';
import { Box } from '@mui/material';


export const TwitchVideoHolder = styled('iframe')`
height: 250px;
width: 400px;
display:flex;
top: 5px;
left: 1%;
border: none;
position: relative;
`;
export const TwitchVideoBox = styled('div')`
height: 260px;
width: 440px;
display:flex;
background: hsla(255, 100%, 59%, 0.53);
cursor: move;
margin: 0px;
padding 0px;
transition: 1.5s;
right: 50px;
bottom: -600px;
border-radius: 10px;
position: absolute;
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