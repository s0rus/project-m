import TwitchChat from '@/components/TwitchChat';
import VideoPlayer from '@/components/VideoPlayer';
import MainLayout from '@/layouts/MainLayout';
import { SocketProvider } from '@/server/sockets';
import { Grid, styled } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useCallback, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

let socket: SocketProvider.ClientIO;

const Home: NextPage = () => {
  // const [message, setMessage] = useState('');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const socketInitializer = useCallback(async () => {
    await fetch('/api/socket');

    socket = io();

    socket.on('connect', () => {
      console.log('CONNECTED');
    });

    socket.on('connect_error', (err: Error) => {
      console.log(`connect_error due to ${err}`);
    });

    // socket.on('newChangedMessage', (msg) => setMessage(msg));

    socket.on('receiveVideoStart', () => videoRef?.current?.play());
  }, []);

  useEffect(() => {
    socketInitializer();
  }, [socketInitializer]);

  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setMessage(e.target.value);

  //   socket.emit('changedMessage', e.target.value);
  // };

  const handlePlay = () => {
    socket.emit('videoStart');
  };

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
