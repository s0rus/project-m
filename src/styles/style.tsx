import { styled, Button, Box, Stack, Avatar, Slider } from '@mui/material';
import { theme } from '@/styles/theme';

 export const Options = styled('div')`
position: relative;
width: 100%;
padding-left: 2rem;
padding-right: 2rem;
padding-top: 1rem;`

export const OptionsBox = styled('div')`
width: 100%;
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
outline-color: rgb(117, 122, 255);
transition: 0.3s ease-in-out;
`

export const OptionsTitle = styled('h1')`
font-size: 1.5rem;
font-weight: 600;
text-align: left;
`

export const ChatBox = styled('div')`
color: #FFF;
transition: all 0.5s;
min-width: 240px;
max-width: 100%;
border-radius: 8px;
position: relative; all 0.3s;
margin-bottom: 20px;
text-transform: capitalize;
&:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  opacity: 0;
  transition: all 0.2s;
  border: 1px solid ${theme.palette.primary.main};
  transform: scale(1.2,1.2);
}
&:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  background-color: rgba(255,255,255,0.1);
  transition: all 0.3s;
}
&:hover::after{
  opacity: 1;
  border-radius: 8px;
  transform: scale(1,1);
}
&:hover::before{
  opacity: 0 ;
  cursor: pointer;
  border-radius: 8px;
  transform: scale(0.5,0.5);
}`

export const TitleOption = styled('h2')`
line-height: 1.1;
font-size: 16px;
letter-spacing: 1px;
position: relative;
text-align: left;
margin: 0px;
padding: 0px;
bottom: 16px;
left: 50px;
font-weight: 500; `

export const SubTitleOption = styled('h2')`
line-height: 1.1;
font-size: 12px;
font-weight: 400;
letter-spacing: 1px;
display: flex;
transition: all 0.3s ease 0s;
position: relative;
text-align: left;
margin: 0px;
width: 60%;
padding: 0px;
bottom: 16px;
left: 50px;
color: hsla(233, 13%, 44%, 0.50);
&:hover{
  color: ${theme.palette.primary.main};
}`

export const StyledButton = styled(Button)`
color: #FFF;
transition: all 0.5s;
border-radius: 8px;
width: 130px;
min-width: 130px;
height: 40px;
position: relative; all 0.3s;
text-transform: capitalize;
&:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.2s;
  border: 1px solid ${theme.palette.primary.main};
  transform: scale(1.2,1.2);
}
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
&:hover::after{
  opacity: 1;
  border-radius: 8px;
  transform: scale(1,1);
}
&:hover::before{
  opacity: 0 ;
  border-radius: 8px;
  transform: scale(0.5,0.5);
}
` 
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

export const StyledButtonModal = styled(Button)`
color: #FFF;
display: flex;
top: 20px;
left: 50%;
transform: translate(-50%, -50%);
transition: all 0.5s;
border-radius: 8px;
width: 130px;
height: 40px;
position: relative; all 0.3s;
text-transform: capitalize;
&:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.2s;
  border: 1px solid hsla(255, 68%, 45%, 0.50);
  transform: scale(1.2,1.2);
}
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
&:hover::after{
  opacity: 1;
  border-radius: 8px;
  transform: scale(1,1);
}
&:hover::before{
  opacity: 0 ;
  border-radius: 8px;
  transform: scale(0.5,0.5);
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
  background-color: #18181b;
  border-radius: 4px;
  padding-right: 0.8rem;
  border-top-left-radius: 37%;
  border-bottom-left-radius: 37%;
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