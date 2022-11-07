import { styled, Button, Box, Stack, Avatar, Slider } from '@mui/material';
import { theme, gradients } from '@/styles/theme';
import SimpleBar from 'simplebar-react';

 export const Options = styled('div')`
position: relative;
width: 100%;
border-radius: 8px;
padding-top: 0.5rem;
transition: 0.3s;
box-shadow: rgba(0, 0, 0, 1) 0px 25px 20px -20px;
background: ${gradients.gradientMain};
&:hover{
  transform: scale(1.01,1.01);
  background: rgba(0, 0, 0, 0.25);}
`
export const OptionsBox = styled('div')`
min-width: 150px;
max-width: 100%;
box-sizing: border-box;
padding: 0rem 1.6rem;
-webkit-font-smoothing: antialiased;
outline-color: rgb(117, 122, 255);
transition: 0.3s ease-in-out;
`


export const OptionsTitle = styled('h1')({
  "@keyframes AnimateH1": {
  "0%": {
    textShadow: '0px 0px 10px white',
    },
  "50%": {
    textShadow: `0px 0px 0px white`,
    },
  "100%": {
    textShadow: '0px 0px 10px white',
  }
  },
  animation: 'AnimateH1 2s ease infinite',
  fontSize: '1.5rem',
  fontWeight: '600',
  textAlign: 'left',
  marginLeft: '30px',
  marginTop: '10px',
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
background-color: rgba(0,0,0,0.25);
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
  "@keyframes AnimText": {
  "0%": {
      color: `${theme.palette.primary.main}`,
    },
  "50%": {
      color: 'white',
      textShadow: '0px 0px 4px white',
    },
  "100%": {
      color: `${theme.palette.primary.main}`,
  }
  },
  animation: 'AnimText 4s ease infinite',
  transition: 'all 0.5s',
  borderRadius: '14px',
  width: '130px',
  height: '40px',
  boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
  position: 'relative',
  marginLeft: '20px',
  textTransform: 'capitalize',
  ":hover": {
    transform: 'scale(1.1,1.1)',
    background: 'rgba(0,0,0, 0.55)',
    border: `1px solid ${theme.palette.primary.main}`
  }  
});


export const StyledButtonSkeleton = styled(Button)`
color: #FFF;
transition: all 0.5s;
border-radius: 8px;
width: 130px;
height: 40px;
position: relative; all 0.3s;
text-transform: capitalize;
cursor: default;
&:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  z-index: 1;
  background-color: rgba(255,255,255,0.1);
  transition: all 0.3s;
}
` 

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
  background-color: rgba(255,255,255,0.10);
  border-radius: 4px;
  padding-right: 0.8rem;
  border-radius: 8px;
`;

export const AddedByAvatar = styled(Avatar)`
  border-radius: 4px;
`;

export const Seeker = styled(Slider)`
color: ${theme.palette.primary.main};
height: 4px;
pointer-events: none;
padding: 0;
margin: 0;
background-color: rgba(51, 51, 51, 0.53);
margin-bottom: 5px;
border-radius: 8px;
& .MuiSlider-thumb {
  width: 0px;
  height: 0px;
  color: white;
}
&::before {
  display: none;
  opacity: 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
}
&:hover,
&.Mui-focusVisible {
  box-shadow: ${theme.palette.primary.main};
}
&.Mui-active {
  width: 0px;
  height: 0px;
}
& .MuiSlider-rail {
  color: gray;
  opacity: 0.50;
}
`;

export const sd = styled(SimpleBar)`
max-height: 100vh;
z-index: 100;
background: radial-gradient(circle, rgba(48,48,68,1) -50%, rgba(20,23,46,1) 60%);
`
export const Background = styled(SimpleBar)({
  maxHeight: '100vh',
  zIndex: '100',
  background: 'radial-gradient(circle, rgba(48,48,68,1) -10%, rgba(20,23,46,1) 100%)'
});