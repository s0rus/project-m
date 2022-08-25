import TwitchChat from '@/components/TwitchChat/TwitchChat';
import MainLayout from '@/layouts/MainLayout';
import { SocketProvider } from '@/server/sockets';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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

  return (
    <>
      <Head>
        <title>Projekt M</title>
        <meta name='description' content='Projekt M sussy' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainLayout>
        <div>
          <video ref={videoRef} onPlay={handlePlay} muted controls>
            <source src='/brus_fiora.mp4' />
          </video>
        </div>
        <TwitchChat />
      </MainLayout>
    </>
  );
};

export default Home;
