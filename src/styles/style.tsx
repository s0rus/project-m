import { styled, Button, Box, Stack, Avatar, Slider } from '@mui/material';
import { theme } from '@/styles/theme';
import SimpleBar from 'simplebar-react';

 export const Options = styled('div')`
position: relative;
width: 100%;
padding-left: 2rem;
padding-right: 2rem;
padding-top: 1rem;
`

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
text-shadow: 0px 0px 10px white;
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
  box-shadow: 0px 0px 10px ${theme.palette.primary.main};
  height: 100%;
  opacity: 0;
  transition: all 0.2s;
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
text-shadow: 0px 0px 10px white;
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
text-shadow: 0px 0px 4px white;
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

export const Background = styled(SimpleBar)`
max-height: 100vh;
z-index: 100;
background-color: #18181B;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%231e1d2f' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23231d48' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23291865' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23311087' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%233E02AD' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23311087' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23291865' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23231d48' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%231e1d2f' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%2318181B' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
`