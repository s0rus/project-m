import 'simplebar/dist/simplebar.min.css';

import MainLayout, { MainContent } from '@/layouts/MainLayout';

import Dashboard from '@/domain/Dashboard/view/Dashboard';
import SimpleBar from 'simplebar-react';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
import VideoPlayer from '@/domain/VideoPlayer/view/VideoPlayer';
import { theme } from '@/styles/theme';
import { useAddonsContext } from '@/domain/App/context/Addons.context';
import useMediaQuery from '@mui/material/useMediaQuery';

const App = () => {
  const isMediumUp = useMediaQuery(theme.breakpoints.up('lg'));
  const { isChatOn } = useAddonsContext();

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
