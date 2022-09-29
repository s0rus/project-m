import 'simplebar/dist/simplebar.min.css';

import MainLayout, { MainContent } from '@/layouts/MainLayout';

import { Box } from '@mui/material';
import Dashboard from '@/domain/Dashboard/view/Dashboard';
import Head from 'next/head';
import type { NextPage } from 'next';
import React from 'react';
import SimpleBar from 'simplebar-react';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
import VideoPlayer from '@/domain/VideoPlayer/view/VideoPlayer';

const Home: NextPage = () => {
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
            <Dashboard />
          </SimpleBar>
        </MainContent>
        {/* <Box>
          <TwitchChat />
        </Box> */}
      </MainLayout>
    </>
  );
};

export default Home;
