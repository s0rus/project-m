import { EmojiEventsRounded } from '@mui/icons-material';
import SettingWithButton from '@/domain/App/components/SettingWithButton';
import { useAuthContext } from '@/domain/App/context/Auth.context';
import { useMemo } from 'react';
import { useSocketContext } from '@/domain/App/context/Socket.context';
import { useTranslation } from 'react-i18next';
import { Options, OptionsTitle } from '@/styles/style';
import SwipeDownIcon from '@mui/icons-material/SwipeDown';
import ListIcon from '@mui/icons-material/List';
import { usePlaylistContext } from '@/domain/Playlist/context/Playlist.context.tsx';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
const AdminPanel = () => {
  const { t } = useTranslation();
  const { leader, socket } = useSocketContext();
  const { currentUser } = useAuthContext();
  const { togglePlaylistLocked, playlistLocked } = usePlaylistContext();

  const leaderIdentifier = useMemo(() => {
    if (!leader) return t('adminPanel.leader.noLeader');
    return t('adminPanel.leader.header', { leaderIdentifier: leader.username || leader.socketId });
  }, [leader, t]);

  const isCurrentUserLeader = useMemo(() => {
    if (!leader || !currentUser) return false;
    return leader.userId === currentUser.id;
  }, [leader, currentUser]);

  const handleSetLeader = () => {
    if (!socket) return;
    socket.emit('SET_LEADER', {
      socketId: socket.id,
      isAdmin: currentUser.isAdmin,
      userId: currentUser.id,
      username: currentUser.name,
    });
  };

  return (
    <Options style={{ paddingBottom: '0.5rem' }}>
      <OptionsTitle>{t('adminPanel.header')}</OptionsTitle>
      <div style={{ padding: '0.01rem 1.5rem' }}>
        <SettingWithButton
          header={leaderIdentifier}
          subtitle={t('adminPanel.leader.subititle')}
          buttonLabel={!isCurrentUserLeader ? t('adminPanel.leader.becomeLeader') : t('adminPanel.leader.userIsLeader')}
          buttonAction={handleSetLeader}
          icon={<EmojiEventsRounded />}
          hiddenicon={<SwipeDownIcon />}
          variant='contained'
          disabled={isCurrentUserLeader}
        />
      </div>
      <div style={{ padding: '0.01rem 1.5rem' }}>
        <SettingWithButton
          header={t('adminPanel.playlist.header')}
          subtitle={t('adminPanel.playlist.subtitle')}
          buttonLabel={!playlistLocked ? t('adminPanel.playlist.lock') : t('adminPanel.playlist.unlock')}
          buttonAction={togglePlaylistLocked}
          icon={<ListIcon />}
          hiddenicon={!playlistLocked ? <LockIcon /> : <LockOpenIcon />}
          variant='contained'
        />
      </div>
    </Options>
  );
};

export default AdminPanel;
