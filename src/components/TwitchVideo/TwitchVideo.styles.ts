import { theme } from '@/styles/theme';
import { styled } from '@mui/material';
import { Box } from '@mui/material';


export const TwitchVideoHolder = styled('iframe')`
height: 250px;
width: 400px;
display:flex;
top: 5px;
left: 1%;
position: relative;
`;
export const TwitchVideoBox = styled('div')`
height: 260px;
width: 440px;
display:flex;
background: #6430ff;
cursor: move;
top: 200px;
left: 66%;
border-radius: 10px;
position: relative;
transition: 0.5s;
pointer-events: all;
&:hover{
  cursor: move;
  background: hsla(255, 100%, 59%, 0.53);
}
`;

export const VideoBox = styled('div')`
maxWidth: 150px;
maxHeight: 30px;
minWidth: 150px;
minHeight: 20px;
display: flex;
position: relative;`