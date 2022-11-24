import { Stack, Typography } from '@mui/material';

import CardLayout from '@/layouts/CardLayout';
import { EmojiEventsRounded } from '@mui/icons-material';
import SettingWithButton from '@/domain/App/components/SettingWithButton';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSocketStore } from '@/domain/App/store/Socket.store';
import { useAuthStore } from '@/domain/App/store/Auth.store';

const AdminPanel = () => {
  const { t } = useTranslation();

  const socket = useSocketStore((state) => state.socket);
  const leader = useSocketStore((state) => state.leader);
  const currentUser = useAuthStore((state) => state.currentUser);
  const isCurrentUserLeader = useSocketStore((state) => state.isCurrentUserLeader());

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
    <CardLayout>
      <Stack>
        <Typography variant='h2'>{t('adminPanel.header')}</Typography>
        <SettingWithButton
          header={leaderIdentifier}
          subtitle={t('adminPanel.leader.subititle')}
          buttonLabel={!isCurrentUserLeader ? t('adminPanel.leader.becomeLeader') : t('adminPanel.leader.userIsLeader')}
          buttonAction={handleSetLeader}
          icon={<EmojiEventsRounded />}
          variant='contained'
          disabled={isCurrentUserLeader}
        />
      </Stack>
    </CardLayout>
  );
};

export default AdminPanel;
