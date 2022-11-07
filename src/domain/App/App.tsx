import 'simplebar/dist/simplebar.min.css';
import 'react-page-split/style.css';
import MainLayout, { MainContent } from '@/layouts/MainLayout';
import Dashboard from '@/domain/Dashboard/view/Dashboard';
import type { NextPage } from 'next';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
import VideoPlayer from '@/domain/VideoPlayer/view/VideoPlayer';
import { HorizontalPageSplit } from 'react-page-split';
import { Background } from '@/styles/style';
import { useAddonsContext } from '@/domain/App/context/Addons.context';
import { theme } from '@/styles/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home: NextPage = () => {
  const { isChatOn } = useAddonsContext();
  const isMediumUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
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
        <div style={{minWidth: '12%', width: '23.3%'}}>
            <TwitchChat />
        </div>
        }
        </HorizontalPageSplit>
      </MainLayout>

    </>
  );
};

export default Home;
