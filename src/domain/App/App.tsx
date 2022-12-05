import 'simplebar/dist/simplebar.min.css';
import 'react-page-split/style.css';

import MainLayout, { MainContent } from '@/layouts/MainLayout';
import Snowfall from 'react-snowfall';

import Dashboard from '@/domain/Dashboard/view/Dashboard';
import SimpleBar from 'simplebar-react';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
import VideoPlayer from '@/domain/VideoPlayer/view/VideoPlayer';
import { theme } from '@/styles/theme';
import { useAddonsContext } from '@/domain/App/context/Addons.context';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CircularProgress } from '@mui/material';
import BlankLayout from '@/layouts/BlankLayout';
import { useSocketStore } from './store/Socket.store';
import { useSocket } from './hooks/useSocket';
import { useAuth } from './hooks/useAuth';
import { usePlaylist } from '../Playlist/hooks/usePlaylist';
import { HorizontalPageSplit } from 'react-page-split';

const App = () => {
  useSocket();
  useAuth();
  usePlaylist();

  const isMediumUp = useMediaQuery(theme.breakpoints.up('lg'));
  const { isChatOn } = useAddonsContext();
  const socket = useSocketStore((state) => state.socket);
  const leader = useSocketStore((state) => state.leader);

  if (!leader || !socket || !socket.connected) {
    return (
      <BlankLayout>
        <CircularProgress size={48} />
      </BlankLayout>
    );
  }

  return (
    <>
      <Snowfall
        style={{ zIndex: '9999999999999999999999999999999' }}
        snowflakeCount={35}
        radius={[0.5, 2]}
        wind={[4, 10]}
      />
      <MainLayout>
        <HorizontalPageSplit>
          <div style={{ minWidth: isChatOn && isMediumUp ? '65%' : '100%' }}>
            <MainContent>
              <SimpleBar style={{ height: '100vh' }}>
                <VideoPlayer />
                <Dashboard />
              </SimpleBar>
            </MainContent>
          </div>
          {isChatOn && isMediumUp && (
            <div style={{ minWidth: '12%', width: '20%' }}>
              <TwitchChat />
            </div>
          )}
        </HorizontalPageSplit>
      </MainLayout>
    </>
  );
};

export default App;
