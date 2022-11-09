import { styled, Button, Box, Stack, Avatar, } from '@mui/material';
import { theme, gradients } from '@/styles/theme';
import SimpleBar from 'simplebar-react';

 export const Options = styled('div')`
position: relative;
padding-top: 1rem;
transition: 0.3s;
border-radius: 8px;
margin-bottom: 1rem;
background: ${gradients.gradientPaper};
box-shadow: rgb(0, 0, 0, 0.55) 0px 20px 30px -10px;
`
export const OptionsBox = styled('div')`
box-sizing: border-box;
padding: 0rem 1.5rem;
-webkit-font-smoothing: antialiased;
outline-color: rgb(117, 122, 255);
transition: 0.3s ease-in-out;
`


export const OptionsTitle = styled('h1')({
  fontSize: '1.5rem',
  fontWeight: '600',
  textAlign: 'left',
  marginLeft: '20px',
  marginTop: '0px',
  cursor: 'default',
  display: 'flex'
});


export const ChatBox = styled('div')`
color: #FFF;
transition: all 0.5s;
min-width: 150px;
cursor: default;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
max-width: 100%;
background: ${gradients.gradientMain};
border-radius: 8px;
position: relative; all 0.3s;
margin-bottom: 20px;
text-transform: capitalize;
&:hover{
  background-color: rgba(255,255,255,0.09);
}`

export const TitleOption = styled('h2')`

line-height: 1.1;
font-size: 16px;
width: 100px;
letter-spacing: 1px;
cursor: default;
position: relative;
text-shadow: 0px 0px 10px white;
text-align: left;
margin: 0px;
padding: 0px;
bottom: 16px;
left: 55px;
font-weight: 500; 
`

export const SubTitleOption = styled('h2')`
line-height: 1.1;
font-size: 13px;
font-weight: 400;
letter-spacing: 1px;
width: 200px;
cursor: default;
display: flex;
transition: all 0.3s ease 0s;
position: relative;
text-align: left;
margin: 0px;
padding: 0px;
bottom: 16px;
left: 55px;
font-weight: 400;
color: ${theme.palette.primary.main};
`

export const TitleSelect = styled('h2')`
line-height: 1.1;
font-size: 16px;
width: 100px;
letter-spacing: 1px;
position: relative;
text-shadow: 0px 0px 10px white;
text-align: left;
margin: 0px;
padding: 0px;
right: 15px;
font-weight: 500; `

export const TitleSubSelect = styled('h2')`
line-height: 1.1;
font-size: 13px;
font-weight: 400;
letter-spacing: 1px;
display: flex;
transition: all 0.3s ease 0s;
position: relative;
text-align: left;
margin: 0px;
padding: 0px;
right: 15px;
font-weight: 400;
color: ${theme.palette.primary.main};`


export const StyledButton = styled(Button)({
  transition: 'all 0.2s',
  width: '100%',
  marginBottom: '10px',
  background: 'rgba(0,0,0, 0.55)',
  height: '45px',
  fontSize: '15px',
  color: 'white',
  borderRadius: '14px',
  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  textTransform: 'capitalize',
  ":hover": {
    color: `${theme.palette.primary.main}`,
    transform: 'scale(1.05,1.05)',
    background: 'rgba(0,0,0, 0.55)',
    border: `1px solid ${theme.palette.primary.main}`
  }  
});


export const CurrentVideoWrapper = styled(Box)`
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  gap: 1rem;
`;

export const CurrentVideoDetails = styled(Stack)`
  flex-direction: column;
  gap: 0.5rem;
`;

export const AddedByWrapper = styled(Stack)`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 0.8rem;
  background-color: #18181b;
  border-radius: 4px;
  padding-right: 0.8rem;
  border-radius: 8px;
`;

export const AddedByAvatar = styled(Avatar)`
  border-radius: 4px;
`;

export const Background = styled(SimpleBar)({
  maxHeight: '100vh',
  zIndex: '100',
  background: 'radial-gradient(circle, rgba(48,48,68,1) -10%, rgba(20,23,46,1) 100%)'
});