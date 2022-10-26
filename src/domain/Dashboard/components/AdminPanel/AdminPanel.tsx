import { Stack, Typography } from '@mui/material';

import CardLayout from '@/layouts/CardLayout';
import { EmojiEventsRounded } from '@mui/icons-material';
import SettingWithButton from '@/components/SettingWithButton';
import { useAuthContext } from '@/contexts/AuthContext';
import { useMemo } from 'react';
import { useSocketContext } from '@/contexts/SocketContext';
import { useTranslation } from 'react-i18next';

const AdminPanel = () => {
  const { t } = useTranslation();
  const { leader, socket } = useSocketContext();
  const { currentUser } = useAuthContext();

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
