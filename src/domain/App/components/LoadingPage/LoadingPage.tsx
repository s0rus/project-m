import { InnerStack, SettingStack, TitleOption, Background } from './LoadingPage.styles';
import React from 'react';
import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';
import Jan from '@/domain/Icons/Ok.svg';

const LoadingPage = () => {
  return (
    <>
      <Background>
        <SettingStack>
          <Image style={{ borderRadius: '28px' }} src={Jan} alt='jan' />
          <InnerStack>
            <TitleOption>Murzyniarnia.com</TitleOption>
          </InnerStack>
          <CircularProgress size={128} style={{ marginLeft: '150px' }} />
        </SettingStack>
      </Background>
    </>
  );
};

export default LoadingPage;
