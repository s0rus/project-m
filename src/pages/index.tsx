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

const Home: NextPage = () => {
  const { isChatOn } = useAddonsContext();

  return (
    <>
      <Head>
        <title>Murzyniarnia</title>
        <meta name='description' content='Strona do oglądania filmów' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
<>

      <MainLayout>
        {isChatOn ? ( 
        <HorizontalPageSplit>
        <div style={{minWidth: '65%'}} >
        <MainContent>
          <Background>
            <VideoPlayer/>
            <Dashboard />
          </Background>
        </MainContent>
        </div>
        <div style={{minWidth: '11%', width: '15%'}}>
            <TwitchChat />
        </div>
        </HorizontalPageSplit>

        ) : ( 
          <MainLayout>
          <MainContent>
            <Background>
              <VideoPlayer/>
              <Dashboard />
            </Background>
          </MainContent>
          </MainLayout>
        )}
      </MainLayout>


      </>
    </>
  );
};

export default Home;
