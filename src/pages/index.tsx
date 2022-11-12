import 'simplebar/dist/simplebar.min.css';
import 'react-page-split/style.css';
import MainLayout, { MainContent } from '@/layouts/MainLayout';
import Dashboard from '@/domain/Dashboard/view/Dashboard';
import Head from 'next/head';
import type { NextPage } from 'next';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
import VideoPlayer from '@/domain/VideoPlayer/view/VideoPlayer';
import { HorizontalPageSplit } from 'react-page-split';
import SimpleBar from 'simplebar-react';
import { useAddonsContext } from '@/contexts/AddonsContext';
import { theme } from '@/styles/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home: NextPage = () => {
  const { isChatOn } = useAddonsContext();
  const isMediumUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <Head>
        <title>Murzyniarnia</title>
        <meta name='description' content='Strona do oglądania filmów 👨🏾‍🦱' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
<>
      <MainLayout>
        <HorizontalPageSplit>
        <div style={{minWidth: isChatOn && isMediumUp ? '65%' : '100%'}} >
        <MainContent>
          <SimpleBar style={{height: '100vh'}} >
            <VideoPlayer/>
            <Dashboard />
          </SimpleBar>
        </MainContent>
        </div>
        {isChatOn && isMediumUp &&
        <div style={{minWidth: '12%', width: '20%'}}>
            <TwitchChat />
        </div>
        }
        </HorizontalPageSplit>
      </MainLayout>


      </>
    </>
  );
};

export default Home;
