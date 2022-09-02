import TwitchChat from '@/components/TwitchChat';
import VideoPlayer from '@/components/VideoPlayer';
import MainLayout, { MainContent } from '@/layouts/MainLayout';
import { Box, Button, styled } from '@mui/material';
import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  const DummyDiv = styled('div')`
    height: 1000px;
  `;

  useEffect(() => {
    console.log('SESSION', session);
    console.log('STATUS', status);
  }, [session, status]);

  const handleTwitchLogin = async () => {
    await signIn('twitch');
  };

  const handleTwitchLogout = async () => {
    await signOut();
  };

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
            <DummyDiv>
              {session && status === 'authenticated' ? (
                <Button variant='contained' onClick={handleTwitchLogout}>
                  LOGOUT
                </Button>
              ) : (
                <Button variant='contained' onClick={handleTwitchLogin}>
                  LOG IN WITH TWITCH
                </Button>
              )}
            </DummyDiv>
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
