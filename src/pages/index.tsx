import TwitchChat from '@/components/TwitchChat';
import VideoPlayer from '@/components/VideoPlayer';
import MainLayout from '@/layouts/MainLayout';
import { Grid, styled } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

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
        <Grid container>
          <Grid item flex='1' height='100vh' style={{ overflow: 'overlay' }}>
            <div>
              <VideoPlayer />
              <DummyDiv />
            </div>
          </Grid>
          <Grid item>
            <TwitchChat />
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};

export default Home;
