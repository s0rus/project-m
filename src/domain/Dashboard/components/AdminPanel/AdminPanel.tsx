import { EmojiEventsRounded } from '@mui/icons-material';
import SettingWithButton from '@/domain/App/components/SettingWithButton';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSocketStore } from '@/domain/App/store/Socket.store';
import { useAuthStore } from '@/domain/App/store/Auth.store';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SwipeDownIcon from '@mui/icons-material/SwipeDown';
import ListIcon from '@mui/icons-material/List';
import { Options, OptionsTitle } from '@/styles/style';
import { usePlaylistStore } from '@/domain/Playlist/store/Playlist.store';
import { usePlaylistChange } from '@/domain/Playlist/hooks/usePlaylistChange';

const AdminPanel = () => {
  const { t } = useTranslation();

  const socket = useSocketStore((state) => state.socket);
  const leader = useSocketStore((state) => state.leader);
  const currentUser = useAuthStore((state) => state.currentUser);
  const isCurrentUserLeader = useSocketStore((state) => state.isCurrentUserLeader());
  const isPlaylistLocked = usePlaylistStore((state) => state.isPlaylistLocked);
  const { handlePlaylistLockedChange } = usePlaylistChange();

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
          buttonLabel={!isPlaylistLocked ? t('adminPanel.playlist.lock') : t('adminPanel.playlist.unlock')}
          buttonAction={handlePlaylistLockedChange}
          icon={<ListIcon />}
          hiddenicon={!isPlaylistLocked ? <LockIcon /> : <LockOpenIcon />}
          variant='contained'
        />
      </div>
    </Options>
  );
};

export default AdminPanel;
