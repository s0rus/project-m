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
import { useState } from 'react';
import { LightMode, DarkMode  } from '@mui/icons-material';


const Home: NextPage = () => {
  const { isChatOn } = useAddonsContext();
  const [background, setBackground] = useState(true)


  return (
    <>
      <Head>
        <title>Murzyniarnia</title>
        <meta name='description' content='Strona do oglądania filmów' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
<>
      <MainLayout>
        <HorizontalPageSplit>
        <div style={{minWidth: isChatOn ? '65%' : '100%'}} >
        <MainContent>
          <Background style={background ? {background: 'radial-gradient(circle, rgba(48,48,68,1) -10%, rgba(20,23,46,1) 100%)'}:{}} >
            <VideoPlayer/>


            <div style={{position: 'absolute', right: '20px', marginTop: '20px' , height: '40px', width: '20px' }} onClick={() => setBackground((prev) => !prev)}>
{background ? <DarkMode style={{color: 'gray', cursor: 'pointer'}} /> : <LightMode style={{color: 'gray', cursor: 'pointer'}} /> }
            </div>

            <Dashboard />
          </Background>
        </MainContent>
        </div>
        {isChatOn &&
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
