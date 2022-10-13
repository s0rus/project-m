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
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import noResponsive from '@/domain/Icons/noResponsive.svg'
import Obiecuje from '@/domain/Icons/Obiecuje.svg'

const Home: NextPage = () => {
  const [pointerActive, setIsActive] = useState(false);
  const setPointerActive = () => {setIsActive(true)}
  const setPointerRemove = () => {setIsActive(false)}
  const { t } = useTranslation();
  
  return (
    <>
      <Head>
        <title>Murzyniarnia.TV</title>
        <meta name='description' content='Strona do oglądania filmów' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainLayout>


        <Hidden lgDown>
      <HorizontalPageSplit onResizeMove={setPointerActive} onResizeEnd={setPointerRemove} >
      <div style={{minWidth: '57%' }} >
        <MainContent>
          <SimpleBar style={{ maxHeight: '100vh', zIndex: '100',background: 'linear-gradient(0deg, rgba(24,24,27,1) 0%, rgba(36,39,45,1) 70%)', }}>
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
            <div style={{height: '100vh', width: '100%'}} >
            <SimpleBar style={{ maxHeight: '100vh', zIndex: '100',background: 'linear-gradient(to right bottom, rgb(24, 26, 33), rgb(36, 37, 46))', }}>
            <VideoPlayer />
            <div style={{height: '50vh', width: '100%', padding: '0px 24px', display: 'flex', boxAlign: 'center', alignItems: 'center', boxPack: 'center', justifyContent: 'center', flexFlow: 'column', textAlign: 'center'}} >

            <Image src={noResponsive} />

            <h1 style={{textAlign: 'center'}} >
            {t('noResponsive.title')}
            </h1>

            <h3 style={{textAlign: 'center', fontWeight: '200'}} >
            {t('noResponsive.subtitle')}
            </h3>

            <Image src={Obiecuje} />

            </div>
          </SimpleBar>
          
            </div>
            
          </Hidden>

      </MainLayout>
    </>
  );
};

export default Home;
