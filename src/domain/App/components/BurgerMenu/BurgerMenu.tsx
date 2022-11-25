import React from 'react';
import { FC } from 'react';
import { BurgerPopout, StyledButton, ImageBox, Title } from './BurgerMenu.style';
import { Modal, Typography, Box } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Twitch from '@/domain/Icons/Twitch.svg';
import Discord from '@/domain/Icons/Discord.svg';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useTranslation } from 'react-i18next';
import { useSocketStore } from '@/domain/App/store/Socket.store';
import { useAuthStore } from '@/domain/App/store/Auth.store';
import ListIcon from '@mui/icons-material/List';
import SettingWithSelect from '@/domain/App/components/SettingWithSelect';
import SettingsOnClick from '@/domain/App/components/SettingsOnClick';
import { usePlaylistStore } from '@/domain/Playlist/store/Playlist.store';
import { usePlaylistChange } from '@/domain/Playlist/hooks/usePlaylistChange';
import { EmojiEventsRounded } from '@mui/icons-material';
import SettingWithButton from '@/domain/App/components/SettingWithButton';
import { useAddonsContext } from '@/domain/App/context/Addons.context';
import { useMemo } from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChatIcon from '@mui/icons-material/Chat';

interface BurgerMenuProps {
  open: boolean;
  handleClose: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const socket = useSocketStore((state) => state.socket);
  const leader = useSocketStore((state) => state.leader);
  const currentUser = useAuthStore((state) => state.currentUser);
  const isCurrentUserLeader = useSocketStore((state) => state.isCurrentUserLeader());
  const isPlaylistLocked = usePlaylistStore((state) => state.isPlaylistLocked);
  const { handlePlaylistLockedChange } = usePlaylistChange();
  const isAdmin = useAuthStore((state) => state.isAdmin());
  const { setIsChatOn, language, setLanguage, isPlaylistOn, setIsPlaylistOn } = useAddonsContext();

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

  return (
    <Modal open={open} onClose={handleClose}>
      <BurgerPopout>
        {isAdmin && (
          <Title>
            <Typography variant='h3'>{t('adminPanel.header')}</Typography>
            <Box sx={{ mt: '0.5rem' }}>
              <SettingWithButton
                header={leaderIdentifier}
                buttonLabel={
                  !isCurrentUserLeader ? t('adminPanel.leader.becomeLeader') : t('adminPanel.leader.userIsLeader')
                }
                buttonAction={handleSetLeader}
                icon={<EmojiEventsRounded />}
                variant='contained'
                disabled={isCurrentUserLeader}
              />
              <SettingWithButton
                header={t('adminPanel.playlist.header')}
                buttonLabel={!isPlaylistLocked ? t('adminPanel.playlist.lock') : t('adminPanel.playlist.unlock')}
                buttonAction={handlePlaylistLockedChange}
                icon={<ListIcon />}
                variant='contained'
              />
            </Box>
          </Title>
        )}
        <Title>
          <Typography variant='h3'>{t('options.optionsTitle')}</Typography>
          <div style={{ marginTop: '0.25rem' }}>
            <SettingsOnClick
              header={isPlaylistOn ? t('adminPanel.playlist.header') : t('settings.chat.header')}
              setter={Switcher}
              checked={isPlaylistOn}
              icon={isPlaylistOn ? <FormatListBulletedIcon /> : <ChatIcon />}
            />
          </div>
          <Box sx={{ mt: '0.5rem' }}>
            <SettingWithSelect
              value={language}
              setter={setLanguage as Dispatch<SetStateAction<string>>}
              header={t('options.languageTitle')}
            />
          </Box>
        </Title>

        <Title>
          <Typography variant='h3'>{t('options.informations')}</Typography>
          <Box sx={{ mt: '0.5rem' }}>
            <a href='https://www.twitch.tv/piotrlibera' rel='noreferrer' target='_blank'>
              <StyledButton>
                <ImageBox>
                  <Image src={Twitch} alt='Twitch' />
                </ImageBox>
                <Typography variant='h5'>Twitch</Typography>
              </StyledButton>
            </a>

            <a href='https://discord.gg/Vu8VFS4wZ9' rel='noreferrer' target='_blank'>
              <StyledButton>
                <ImageBox>
                  <Image src={Discord} alt='Discord' />
                </ImageBox>
                <Typography variant='h5'>Discord</Typography>
              </StyledButton>
            </a>
            <a href='/Regulamin.pdf' rel='noreferrer' target='_blank'>
              <StyledButton>
                <ImageBox>
                  <ReceiptIcon />
                </ImageBox>
                <Typography variant='h5'>{t('regulations')}</Typography>
              </StyledButton>
            </a>
          </Box>
        </Title>
      </BurgerPopout>
    </Modal>
  );
};

export default BurgerMenu;
