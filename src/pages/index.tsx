import 'simplebar/dist/simplebar.min.css';
import MainLayout, { MainContent } from '@/layouts/MainLayout';
import { Box } from '@mui/material';
import Dashboard from '@/components/Dashboard';
import Head from 'next/head';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';
import NavBottom from '@/components/NavBottom';
import BeforePage from '@/components/BeforePage';
import TwitchChat from '@/components/TwitchChat';
import VideoPlayer from '@/components/VideoPlayer';
import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
const Home: NextPage = () => {
  const [twitchchat, toggleTwitchChat] = useState(true);

  return (
    <>
      <Head>
        <title>Projekt M</title>
        <meta name='description' content='Projekt M sussy' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BeforePage/>
      <MainLayout>
        <MainContent>
          <SimpleBar style={{ maxHeight: '100vh' }}>
            <VideoPlayer />
            <Dashboard />
            <NavBottom/>
          </SimpleBar>
        </MainContent> 
       <Box> { twitchchat && <TwitchChat/> }</Box>
      </MainLayout>
    </>
  );
};

export default Home;
