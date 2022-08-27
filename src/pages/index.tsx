import TwitchChat from '@/components/TwitchChat';
import VideoPlayer from '@/components/VideoPlayer';
import MainLayout, { MainContent } from '@/layouts/MainLayout';
import { Box, styled } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Home: NextPage = () => {
  const DummyDiv = styled('div')`
    height: 1000px;
  `;

  return (
    <>
      <Head>
        <title>Projekt M</title>
        <meta name='description' content='Projekt M sussy' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainLayout>
        <MainContent>
          <SimpleBar style={{ maxHeight: '100vh' }}>
            <VideoPlayer />
            <DummyDiv />
          </SimpleBar>
        </MainContent>
        <Box>
          <TwitchChat />
        </Box>
      </MainLayout>
    </>
  );
};

export default Home;
