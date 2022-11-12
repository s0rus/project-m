import { AccessTimeFilledRounded, AutoAwesomeMotionRounded } from '@mui/icons-material';
import { List, Tooltip, Typography } from '@mui/material';
import {
  EmptyPlaylistBox,
  PlaylistContainer,
  PlaylistDetail,
  PlaylistHeader,
  PlaylistWrapper,
} from './Playlist.styles';
import React, { useMemo } from 'react';
import PlaylistItem from '../../components/PlaylistItem';
import { PlaylistWithUsers } from '../../model/Playlist.model';
import timeFormatter from '@/utils/timeFormatter';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useTranslation } from 'react-i18next';
import MadgeIcon from '@/domain/Icons/MadgeIcon.svg';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/styles/theme';

const Playlist = () => {
  const { t } = useTranslation();
  const { playlist, properPlaylist, playlistLocked } = usePlaylistContext();
  const [animatedList] = useAutoAnimate();
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  const timeSum = useMemo(
    () =>
      (playlist as PlaylistWithUsers[]).reduce<number>(
        (acc: number, curr: PlaylistWithUsers) => acc + curr.videoDuration,
        0
      ),
    [playlist]
  );

  return (
    <>
      <PlaylistWrapper
        locked={playlistLocked ? 1 : 0}
        style={{ minWidth: isMediumDown ? '30%' : '100%', width: isMediumDown ? '100%' : '100%' }}
      >
        <PlaylistHeader>
          <Typography variant='h2'>{t('playlist.header')}</Typography>
          <Tooltip title={t('playlist.tooltip.videoCount')}>
            <PlaylistDetail>
              <AutoAwesomeMotionRounded />
              <Typography variant='h5'>{properPlaylist.length || 0}</Typography>
            </PlaylistDetail>
          </Tooltip>
          <Tooltip title={t('playlist.tooltip.timeSum')}>
            <PlaylistDetail>
              <AccessTimeFilledRounded />
              <Typography variant='h5'>{timeFormatter(timeSum)}</Typography>
            </PlaylistDetail>
          </Tooltip>
        </PlaylistHeader>
        <PlaylistContainer component={List} ref={animatedList}>
          {properPlaylist.length ? (
            properPlaylist.map((video) => (
              <React.Fragment key={video.videoId}>
                <PlaylistItem video={video} />
              </React.Fragment>
            ))
          ) : (
            <EmptyPlaylistBox>
              <Typography variant='h4'>{t('playlist.empty')}</Typography>
              <Image src={MadgeIcon} alt='Madge' height={48} width={48} />
            </EmptyPlaylistBox>
          )}
        </PlaylistContainer>
      </PlaylistWrapper>
    </>
  );
};

export default Playlist;
