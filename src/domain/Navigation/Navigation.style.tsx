
import { styled } from '@mui/material';
import { gradients,theme } from '@/styles/theme';

export const NavHolder = styled('div')`
transition: all 0.2s;
position: relative; all 0.3s;
text-transform: capitalize;
width: 100%
min-width: 250px;
height: 60px;
display: flex;
position: relative;
gap: 40px;
justify-content: center;
background: rgba(0,0,0,0.25);
left: 50%;
top: 40px;
margin: 0;
padding: 0;
transform: translate(-50%, -50%);
box-shadow: rgba(0, 0, 0, 0.75) 0px 25px 20px -20px;
`

export const NavHolderFull = styled('div')`
transition: all 0.2s;
position: relative;
text-transform: capitalize;
width: 100%;
height: 63px;
display: flex;
position: relative;
gap: 150px;
justify-content: center;
background: rgba(0,0,0,0.25);`

export const SocialBox = styled('div')`
height: 40px;
width: 40px;
min-width: 40px;
display: inline-flex;
margin-top: 10px;
border-radius: 4px;
cursor: pointer;
transition: border 0.2s, transform 0.2s, width 0.2s;
&:hover{
    filter:blur(1px)
}`


export const NavText = styled('h5')`
font-size: 15px;
display: flex;
position: absolute;
top: 0px;
margin-left: 50px;
text-shadow: 0px 0px 4px white;
font-weight: 600;
cursor: default;
transition: 0.3s;
margin-top: 20px;
&:hover{
    text-shadow: 0px 0px 0px ;
    color: ${theme.palette.primary.main};
}`


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
