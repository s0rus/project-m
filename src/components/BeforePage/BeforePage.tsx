
import { BackgroundBefore, BeforeFont, ContainerBefore, LinearBox, Button1, AHREF, CodeIconBox }  from '@/styles/style'
import * as React from "react";
import { Box, Button, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import CodeIcon from '@mui/icons-material/Code';
import Brug from 'components/Icons/Brug.svg'
import Image from 'next/image';


const BeforePage = () => {
    const [beforexit, beforePage] = useState(true);
  return (
    <Box>{beforexit && 
<BackgroundBefore>
    <ContainerBefore>

      <BeforeFont>Murzyniarnia.TV</BeforeFont>

      <LinearBox><Box sx={{ width: '500px' }}> <LinearProgress /></Box></LinearBox>
        <Button1>
            <Button style={{ background: '#6430ff', borderRadius: '30px',width: '150px',  fontSize: '1.45rem', color: 'white', height: '60px', backgroundColor: '#6430ff', fontFamily: 'poppins, sans-serif', fontWeight: '650', fontStyle: 'normal', transition: '0.5s'}} onClick={() => beforePage((prev) => !prev) } variant='contained'>Oglądaj</Button>
        </Button1>
    </ContainerBefore>
    <AHREF target="_blank" href='https://github.com/s0rus' >
      <CodeIconBox> 

       <CodeIcon style={{ marginRight: '10px', marginBottom: '-7px' }} />soruse#1407

      </CodeIconBox>
    </AHREF>
</BackgroundBefore>
}</Box>
  );
}
export default BeforePage;