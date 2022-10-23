
import { styled } from '@mui/material';

export const NavHolder = styled('div')`
transition: all 0.2s;
position: relative; all 0.3s;
text-transform: capitalize;
width: 90%;
height: 56px;
display: flex;
position: relative;
gap: 40px;
justify-content: center;
background: rgba(0, 0, 0, 0.20);
left: 50%;
margin: 0;
padding: 0;
transform: translate(-50%, -50%);
box-shadow: rgba(0, 0, 0, 0.75) 0px 25px 20px -20px;
border-radius: 8px;
&:hover{
    background: rgba(0, 0, 0, 0.35);
}`

export const NavHolderFull = styled('div')`
transition: all 0.2s;
position: relative; all 0.3s;
text-transform: capitalize;
width: 96%;
height: 56px;
display: flex;
position: relative;
gap: 150px;
justify-content: center;
background: rgba(0, 0, 0, 0.20);
left: 50%;
margin: 0;
transition: background 0.2s;
padding: 0;
transform: translate(-50%, -50%);
box-shadow: rgba(0, 0, 0, 0.75) 0px 25px 20px -20px;
border-radius: 8px;
transition: 1s;
&:hover{
    background: rgba(0, 0, 0, 0.35);
}`

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
text-shadow: 0px 0px 10px white;
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

export const Halloween1 = styled('div')`
height: 100px;
width: 100px;
position: absolute;
right: 50px;
&:hover{
    transform:rotate(0.25deg);
    transition:.5s  cubic-bezier(0.5,120,0.5,-120);
}
`
