import 'simplebar/dist/simplebar.min.css';
import MainLayout, { MainContent } from '@/layouts/MainLayout';
import VideoPlayer from '@/domain/VideoPlayer/view/VideoPlayer';
import SimpleBar from 'simplebar-react';
import { useSocketStore } from './store/Socket.store';
import { useSocket } from './hooks/useSocket';
import { useAuth } from './hooks/useAuth';
import { usePlaylist } from '../Playlist/hooks/usePlaylist';
import LoadingPage from './components/LoadingPage';
import Header from '../Header';
import TwitchChat from '../TwitchChat/view/TwitchChat';
import { theme } from '@/styles/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAddonsContext } from './context/Addons.context';
import Playlist from '../Playlist/view/Playlist';
import Box from '@mui/material/Box';
const App = () => {
  useSocket();
  useAuth();
  usePlaylist();
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  const socket = useSocketStore((state) => state.socket);
  const { isChatOn, isPlaylistOn } = useAddonsContext();
  const leader = useSocketStore((state) => state.leader);

  if (!leader || !socket || !socket.connected) {
    return <LoadingPage />;
  }

  return (
    <MainLayout>
      <MainContent>
        <SimpleBar style={{ height: '100vh' }}>
          <Header />
          <VideoPlayer />
          {isPlaylistOn && isMediumDown && (
            <Box style={{ marginTop: '6rem' }}>
              <Playlist />
            </Box>
          )}
          {isChatOn && isMediumDown && (
            <Box style={{ marginTop: '6rem' }}>
              <TwitchChat />
            </Box>
          )}
        </SimpleBar>
      </MainContent>
    </MainLayout>
  );
};

export default App;
