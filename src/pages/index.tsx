import 'simplebar/dist/simplebar.min.css';
import 'react-page-split/style.css';
import MainLayout, { MainContent } from '@/layouts/MainLayout';
import Dashboard from '@/domain/Dashboard/view/Dashboard';
import Head from 'next/head';
import type { NextPage } from 'next';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
import VideoPlayer from '@/domain/VideoPlayer/view/VideoPlayer';
import { HorizontalPageSplit } from 'react-page-split';
import { Background } from '@/styles/style';
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
        <meta name='description' content='Strona do oglądania filmów' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=B612&display=swap" rel="stylesheet"/>
      </Head>
<>
      <MainLayout>
        <HorizontalPageSplit>
        <div style={{minWidth: isChatOn && isMediumUp ? '65%' : '100%'}} >
        <MainContent>
          <Background>
            <VideoPlayer/>
            <Dashboard />
          </Background>
        </MainContent>
        </div>
        {isChatOn && isMediumUp &&
        <div style={{minWidth: '11%', width: '15%'}}>
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
