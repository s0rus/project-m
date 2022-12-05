import 'simplebar/dist/simplebar.min.css';

import MainLayout, { MainContent } from '@/layouts/MainLayout';

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
    <MainLayout>
      <MainContent>
        <SimpleBar style={{ maxHeight: '100vh' }}>
          <VideoPlayer />
          <Dashboard />
        </SimpleBar>
      </MainContent>
      {isChatOn && isMediumUp && <TwitchChat />}
    </MainLayout>
  );
};

export default App;
