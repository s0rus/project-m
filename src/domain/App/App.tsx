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
import { SideBar } from './App.style';
import Box from '@mui/material/Box';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '@/domain/App/store/Auth.store';
import ListIcon from '@mui/icons-material/List';
import { usePlaylistStore } from '@/domain/Playlist/store/Playlist.store';
import { usePlaylistChange } from '@/domain/Playlist/hooks/usePlaylistChange';
import QueueIcon from '@mui/icons-material/Queue';
import { EmojiEventsRounded } from '@mui/icons-material';
import { StyledIconButton } from './App.style';
import Hidden from '@mui/material/Hidden';
import Tooltip from '@mui/material/Tooltip';
import ChatIcon from '@mui/icons-material/Chat';
const App = () => {
  useSocket();
  useAuth();
  usePlaylist();
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  const socket = useSocketStore((state) => state.socket);
  const leader = useSocketStore((state) => state.leader);
  const { t } = useTranslation();
  const currentUser = useAuthStore((state) => state.currentUser);
  const isCurrentUserLeader = useSocketStore((state) => state.isCurrentUserLeader());
  const isPlaylistLocked = usePlaylistStore((state) => state.isPlaylistLocked);
  const { handlePlaylistLockedChange } = usePlaylistChange();
  const isAdmin = useAuthStore((state) => state.isAdmin());
  const { isChatOn, setIsChatOn, language, setLanguage, isPlaylistOn, setIsPlaylistOn } = useAddonsContext();
  const leaderIdentifier = useMemo(() => {
    if (!leader) {
      return t('adminPanel.leader.noLeader');
    }
    return t('adminPanel.leader.header', { leaderIdentifier: leader.username || leader.socketId });
  }, [leader, t]);

  const handleSetLeader = () => {
    if (socket) {
      socket.emit('SET_LEADER', {
        socketId: socket.id,
        isAdmin: currentUser.isAdmin,
        userId: currentUser.id,
        username: currentUser.name,
      });
    }
  };

  const Switcher = () => {
    const SwitchChat = () => {
      setIsChatOn((prev) => !prev);
    };
    const SwitchPlaylist = () => {
      setIsPlaylistOn((prev) => !prev);
    };
    SwitchChat();
    SwitchPlaylist();
  };

  if (!leader || !socket || !socket.connected) {
    return <LoadingPage />;
  }
  return (
    <MainLayout>
      <Hidden lgDown>
        <SideBar>
          {isAdmin && !isCurrentUserLeader ? (
            <StyledIconButton onClick={handleSetLeader}>
              <Tooltip title={t('adminPanel.leader.becomeLeader')} placement='right'>
                <EmojiEventsRounded />
              </Tooltip>
            </StyledIconButton>
          ) : (
            <></>
          )}
          <StyledIconButton onClick={Switcher}>
            {isChatOn ? (
              <Tooltip title={t('playlist.tooltip.toggleplaylist')} placement='right'>
                <ListIcon />
              </Tooltip>
            ) : (
              <Tooltip title={t('playlist.tooltip.togglechat')} placement='right'>
                <ChatIcon />
              </Tooltip>
            )}
          </StyledIconButton>
          {isAdmin && (
            <Tooltip
              title={isPlaylistLocked ? t('playlist.tooltip.unlock') : t('playlist.tooltip.lock')}
              placement='right'
            >
              <StyledIconButton onClick={handlePlaylistLockedChange}>
                <QueueIcon />
              </StyledIconButton>
            </Tooltip>
          )}
        </SideBar>
      </Hidden>
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
