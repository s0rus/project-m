
import { BackgroundBefore, BeforeFont }  from '@/styles/style'
import React from "react";
import { Box, Button, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const ContainerBefore = styled('div')`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;`

const Button1 = styled('div')`
height: 70px;
margin: 0;
display: flex;
position: absolute;
top: 50%;
text-align: center;`

const LinearBox = styled('div')`
width: 1000px;
height: 10px;
margin: 0;
padding: 0;
display:flex;
position: absolute;
margin-left: 500px;
margin-bottom: 20px;`

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
</BackgroundBefore>
}</Box>
  );
}
export default BeforePage;