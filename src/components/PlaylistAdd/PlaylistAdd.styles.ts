import { theme } from '@/styles/theme';
import { styled } from '@mui/material';
import { Box } from '@mui/material';

export const PlaylistAddHolder = styled('div')`
width: 420px;
height: 100px;
padding: 0px;
margin-left: 10px;
margin-top: 20px;
display: flex;
background: #272835;
border-radius: 20px;
transition: 0.8s;
border-bottom: 3px solid hsla(255, 100%, 59%, 0.53);
box-shadow: 4px 4px 44px 4px rgb(98 46 255 / 13%);
&:hover{
    border-bottom: 2px solid #6430ff;
}`

export const PlaylistBackground = styled('div')`
display:flex;
position:relative;
top: 1px;
margin-left: 10px;
padding: 0px;`

export const IconStyleBox = styled('div')`
display:flex;
height: 100px;
bottom: 2px;
position:relative;
margin-left: 0px;
border-radius: 10px;
padding: 0px;
transition: 0.5s;`