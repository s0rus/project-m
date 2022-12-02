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
const App = () => {
  useSocket();
  useAuth();
  usePlaylist();
  const socket = useSocketStore((state) => state.socket);
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
        </SimpleBar>
      </MainContent>
    </MainLayout>
  );
};

export default App;
