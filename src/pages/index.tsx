import 'simplebar/dist/simplebar.min.css';

import MainLayout, { MainContent } from '@/layouts/MainLayout';
import Dashboard from '@/domain/Dashboard/view/Dashboard';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Hidden } from '@mui/material';
import SimpleBar from 'simplebar-react';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
import VideoPlayer from '@/domain/VideoPlayer/view/VideoPlayer';
import { HorizontalPageSplit} from 'react-page-split';
import 'react-page-split/style.css';
import { useState } from 'react';

const Home: NextPage = () => {
  const [pointerActive, setIsActive] = useState(false);
  const setPointerActive = () => {setIsActive(true)}
  const setPointerRemove = () => {setIsActive(false)}

  return (
    <>
      <Head>
        <title>Projekt M</title>
        <meta name='description' content='Projekt M sussy' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainLayout>
        <Hidden lgDown>
      <HorizontalPageSplit onResizeMove={setPointerActive} onResizeEnd={setPointerRemove} >

      <div style={{minWidth: '57%' }} >
        <MainContent>
          <SimpleBar style={{ maxHeight: '100vh', zIndex: '100',
                              background: 'radial-gradient(circle, rgba(60, 60, 62, 1) 0%, rgba(23, 25, 31, 1) 100%)', }}>
            <VideoPlayer />
            <Dashboard />
          </SimpleBar>
        </MainContent>
        </div>

              <div style={{minWidth: '15%', maxWidth:'36%'}}>
                <TwitchChat />
              </div>
              
          </HorizontalPageSplit>
          </Hidden>

          <Hidden lgUp>
          <VideoPlayer/>
          </Hidden>

      </MainLayout>
    </>
  );
};

export default Home;
