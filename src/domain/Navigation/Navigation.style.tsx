
import { styled } from '@mui/material';

export const TwitchBox = styled('div')`
height: 40px;
width: 40px;
min-width: 40px;
display: inline-flex;
margin-top: 7.5px;
background: #9146FF;
border-radius: 12px;
cursor: pointer;
transition: border 0.2s, transform 0.2s, width 0.2s;
&:hover{
    width: 60px;
    border: 3px solid #5A2C9E;
}`


export const DiscordBox = styled('div')`
height: 40px;
width: 40px;
display: inline-flex;
margin-top: 7.5px;
background: #5764F0;
border-radius: 12px;
cursor: pointer;
transition: border 0.2s, transform 0.2s, width 0.2s;
&:hover{
    width: 60px;
    border: 3px solid #2F3682;
}`

export const NavText = styled('h5')`
font-size: 15px;
display: flex;
position: relative;
margin-left: -140px;
margin-top: 20px;
font-weight: 600;
cursor: default;`


export const NavTitle = styled('h5')`
font-size: 25px;
display: flex;
color: hsla(233, 13%, 44%, 0.32);
position: relative;
margin-top: -35px;
margin-left: 85px;
font-weight: 600;
cursor: default;
transition: color 0.2s;
&:hover{
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: black;
    color: #5529da;
}`
export const Paper = styled('div')`
height: 100vh;
width: 50vw;
cursor: move;
position: fixed;
left: 10%;
top: 0%;
transform: translate(-50%, -50%);
border: 2px solid hsla(255, 68%, 45%, 0.57);
background: #1f1f1f;
padding: 10px;
z-index: 9999999;
transition: background 0.3s;
&:hover{
    background: #18181b;
}
`