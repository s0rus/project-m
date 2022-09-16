import 'simplebar/dist/simplebar.min.css';
import Dashboard from '@/components/Dashboard';
import NavBottom from '@/components/NavBottom';
import BeforePage from '@/components/BeforePage';
import TwitchChat from '@/components/TwitchChat';
import VideoPlayer from '@/components/VideoPlayer';
import MainLayout, { MainContent } from '@/layouts/MainLayout';
import { Box } from '@mui/material';
import { ResizerStyle }  from '@/styles/style'
import SplitPane from "react-split-pane";
import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';
import type { NextPage } from 'next';
import Head from 'next/head';


const Home: NextPage = () => {
  const [twitchchat, toggleTwitchChat] = useState(true);
  const [pointerActive, setIsActive] = useState(false);

  const setPointerActive = () => {
    setIsActive(current => !current);
  }
  const setPointerRemove = () => {
    setIsActive(false);
  }

  return (
    <>
      <Head>
        <title>Murzyniarnia.TV</title>
        <meta name='description' content='Projekt M sussy' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BeforePage/>
      <MainLayout>
      <SplitPane minSize={850} maxSize={1680} defaultSize={1500} resizerStyle={ResizerStyle} onDragStarted={setPointerActive}  onDragFinished={setPointerRemove}> 
        <MainContent>
          <SimpleBar style={{ background: 'radial-gradient(rgb(24, 26, 33), rgb(36, 37, 46))' ,maxHeight: '100vh' }}>
            <VideoPlayer />
            <Dashboard />
            <NavBottom/>
          </SimpleBar>
        </MainContent>
       <Box> { twitchchat &&  <div style={{ pointerEvents: pointerActive ? 'none' : 'auto', }} >  <TwitchChat/> </div> }</Box>
       </SplitPane>
      </MainLayout>
    </>
  );
};

export default Home;

