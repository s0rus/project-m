import { theme } from '@/styles/theme';
import { styled } from '@mui/material';
import { Box } from '@mui/material';


export const TwitchVideoHolder = styled('iframe')`
height: 250px;
width: 420px;
border: none;
display:flex;
left: 5px;
top: 5px;
border-radius: 10px;
position: absolute;
pointer-events: all;
`;
export const TwitchVideoBox = styled('div')`
height: 260px;
width: 430px;
position: fixed;
display: flex;
bottom: 85px;
right: 420px;
border-radius: 10px;
pointer-events: all; 
&:hover{
  box-shadow: 4px 4px 44px 4px rgb(98 46 255 / 13%);
  background: #6430ff;}`

export const VideoBox = styled('div')`
maxWidth: 150px;
maxHeight: 30px;
minWidth: 150px;
minHeight: 20px;
display: flex;
position: relative;`