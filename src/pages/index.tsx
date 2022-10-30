import 'simplebar/dist/simplebar.min.css';

import MainLayout, { MainContent } from '@/layouts/MainLayout';

import Dashboard from '@/domain/Dashboard/view/Dashboard';
import Head from 'next/head';
import type { NextPage } from 'next';
import SimpleBar from 'simplebar-react';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
import VideoPlayer from '@/domain/VideoPlayer/view/VideoPlayer';
import { theme } from '@/styles/theme';
import { useAddonsContext } from '@/domain/App/context/AddonsContext';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home: NextPage = () => {
  const isMediumUp = useMediaQuery(theme.breakpoints.up('lg'));
  const { isChatOn } = useAddonsContext();

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
        {isChatOn && isMediumUp && <TwitchChat />}
      </MainLayout>
    </>
  );
};

export default Home;
