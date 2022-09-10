
import { BackgroundBefore, BeforeFont, ContainerBefore, LinearBox, Button1, AHREF, CodeIconBox }  from '@/styles/style'
import * as React from "react";
import { Box, Button, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import CodeIcon from '@mui/icons-material/Code';
<<<<<<< Updated upstream
import Brug from 'components/Icons/Brug.svg'
import Image from 'next/image';

const BrugBox = styled('div')`
width: 80px;
height: 80px;
magin: 0;
display:flex;
position: absolute;
top: 300px;
transition: all 0.8s ease-in-out;
&:hover{
  transform: rotate3d(360,1,100,360deg) ;
}
`
=======
import Image from 'next/image';


>>>>>>> Stashed changes

const BeforePage = () => {
    const [beforexit, beforePage] = useState(true);
  return (
    <Box>{beforexit && 
<BackgroundBefore>
    <ContainerBefore>
<<<<<<< Updated upstream
    <BrugBox><Image src={Brug} width={68} height={68} /></BrugBox>
      <BeforeFont>Projekt M</BeforeFont>
=======
      <BeforeFont>Murzyniarnia.TV</BeforeFont>
>>>>>>> Stashed changes
      <LinearBox><Box sx={{ width: '500px' }}> <LinearProgress /></Box></LinearBox>
        <Button1>
            <Button style={{ background: 'linear-gradient(144deg, rgba(186,28,255,1) 14%, rgba(87,27,247,1) 99%)', borderRadius: '30px',width: '150px',  fontSize: '1.45rem', color: 'white', height: '60px', backgroundColor: '#6430ff', fontFamily: 'poppins, sans-serif', fontWeight: '650', fontStyle: 'normal', transition: '0.5s'}} onClick={() => beforePage((prev) => !prev) } variant='contained'>Oglądaj</Button>
        </Button1>
    </ContainerBefore>
    <AHREF target="_blank" href='https://github.com/s0rus' >
      <CodeIconBox> 
<<<<<<< Updated upstream
       <CodeIcon style={{ marginRight: '10px' }} /> soruse#1407
=======
       <CodeIcon style={{ marginRight: '10px', marginBottom: '-7px' }} />soruse#1407
>>>>>>> Stashed changes
      </CodeIconBox>
    </AHREF>
</BackgroundBefore>
}</Box>
  );
}
export default BeforePage;