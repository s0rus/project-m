
import { BackgroundBefore, BeforeFont }  from '@/styles/style'
import * as React from "react";
import { Box, Button, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import CodeIcon from '@mui/icons-material/Code';
import { Popover } from 'react-tiny-popover'

const ContainerBefore = styled('div')`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;`

const Button1 = styled('div')`
height: 60px;
margin: 0;
display: flex;
position: absolute;
top: 50%;
border-radius: 30px;
transition: all 0.3s ease-in-out;
text-align: center;
&:hover{
  transform: rotate3d(0,1,0,360deg) ;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
}`

const LinearBox = styled('div')`
width: 1000px;
height: 10px;
margin: 0;
padding: 0;
display:flex;
position: absolute;
margin-left: 500px;
margin-bottom: 20px;`

const CodeIconBox = styled('div')`
display: flex;
position: absolute;
bottom: 10px;
left: 20px;
width: 140px;
transition: all 0.5s ease-in-out;
border-radius: 20px;
&:hover{
  font-size: 20px;
  transform: rotate3d(0,1,0,360deg);
  -webkit-text-stroke: 1.5px white;
  color: #6430ff;
  
}`

export const AHREF = styled('a')`
text-decoration:none;
color: white;
text-weight: 300;
display: flex;
position: absolute;
left: 10px;
bottom: 10px;`



const BeforePage = () => {
    const [beforexit, beforePage] = useState(true);
  return (
    <Box>{beforexit && 
<BackgroundBefore>
    <ContainerBefore>
      <BeforeFont>Projekt M</BeforeFont>
      <LinearBox><Box sx={{ width: '500px' }}> <LinearProgress /></Box></LinearBox>
        <Button1>
            <Button style={{ background: 'linear-gradient(144deg, rgba(186,28,255,1) 14%, rgba(87,27,247,1) 99%)', borderRadius: '30px',width: '150px',  fontSize: '1.45rem', color: 'white', height: '60px', backgroundColor: '#6430ff', fontFamily: 'poppins, sans-serif', fontWeight: '650', fontStyle: 'normal', transition: '0.5s'}} onClick={() => beforePage((prev) => !prev) } variant='contained'>Oglądaj</Button>
        </Button1>
    </ContainerBefore>
    <AHREF  href='https://github.com/s0rus' ><CodeIconBox> 
       <CodeIcon style={{marginRight: '10px' }} /> soruse#1407</CodeIconBox></AHREF>
</BackgroundBefore>
}</Box>
  );
}
export default BeforePage;