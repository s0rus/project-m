import { EmojiEventsRounded } from '@mui/icons-material';
import SettingWithButton from '@/components/SettingWithButton';
import { useAuthContext } from '@/contexts/AuthContext';
import { useMemo } from 'react';
import { useSocketContext } from '@/contexts/SocketContext';
import { useTranslation } from 'react-i18next';
import {  Options, OptionsTitle} from '@/styles/style';
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
        <Options style={{paddingBottom: '0.5rem', marginBottom: '1rem'}} >
        <OptionsTitle style={{marginLeft: '30px'}} >{t('adminPanel.header')}</OptionsTitle>
        <div style={{padding: '0rem 1.6rem'}}>
        <SettingWithButton
          header={leaderIdentifier}
          subtitle={t('adminPanel.leader.subititle')}
          buttonLabel={!isCurrentUserLeader ? t('adminPanel.leader.becomeLeader') : t('adminPanel.leader.userIsLeader')}
          buttonAction={handleSetLeader}
          icon={<EmojiEventsRounded />}
          hiddenicon={<EmojiEventsRounded />}
          variant='contained'
          disabled={isCurrentUserLeader}
        />
        </div>
        </Options>
  );
};

export default AdminPanel;
