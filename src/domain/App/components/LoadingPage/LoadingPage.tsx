import { TitleOption, Background } from './LoadingPage.styles';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingPage = () => {
  return (
    <>
      <Background>
        <TitleOption>Loading...</TitleOption>
        <CircularProgress size={82} style={{ marginRight: '20px' }} />
      </Background>
    </>
  );
};

export default LoadingPage;
