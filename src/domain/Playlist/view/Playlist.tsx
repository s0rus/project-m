import { AccessTimeFilledRounded, AutoAwesomeMotionRounded } from '@mui/icons-material';
import {
  EmptyPlaylistBox,
  PlaylistContainer,
  PlaylistDetail,
  PlaylistHeader,
  PlaylistWrapper,
} from './Playlist.styles';
import { List, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import PlaylistItem from '../components/PlaylistItem';
import React from 'react';
import timeFormatter from '@/utils/timeFormatter';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useTranslation } from 'react-i18next';
import { usePlaylistStore } from '../store/Playlist.store';
import MadgeIcon from '@/domain/Icons/MadgeIcon.svg';
import { useMediaQuery } from '@mui/material';
import { theme } from '@/styles/theme';
const Playlist = () => {
  const { t } = useTranslation();
  const queue = usePlaylistStore((state) => state.queue());
  const playlistTimeSum = usePlaylistStore((state) => state.playlistTimeSum());
  const isPlaylistLocked = usePlaylistStore((state) => state.isPlaylistLocked);
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));

  const [animatedList] = useAutoAnimate();

  return (
    <>
      <PlaylistWrapper locked={isPlaylistLocked ? 1 : 0}>
        <PlaylistHeader>
          <Typography style={{ fontSize: isMediumDown ? '18px' : '26px' }}>{t('playlist.header')}</Typography>
          <Tooltip title={t('playlist.tooltip.videoCount')}>
            <PlaylistDetail>
              <AutoAwesomeMotionRounded />
              <Typography>{queue.length || 0}</Typography>
            </PlaylistDetail>
          </Tooltip>
          <Tooltip title={t('playlist.tooltip.timeSum')}>
            <PlaylistDetail>
              <AccessTimeFilledRounded />
              <Typography>{timeFormatter(playlistTimeSum)}</Typography>
            </PlaylistDetail>
          </Tooltip>
        </PlaylistHeader>
        <PlaylistContainer component={List} ref={animatedList}>
          {queue.length ? (
            queue.map((video) => (
              <React.Fragment key={video.videoId}>
                <PlaylistItem video={video} />
              </React.Fragment>
            ))
          ) : (
            <EmptyPlaylistBox>
              <Image src={MadgeIcon} alt='Madge' height={48} width={48} />
            </EmptyPlaylistBox>
          )}
        </PlaylistContainer>
      </PlaylistWrapper>
    </>
  );
};

export default Playlist;
