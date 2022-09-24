import { AccessTimeFilledRounded, AutoAwesomeMotionRounded } from '@mui/icons-material';
import {
  EmptyPlaylistBox,
  PlaylistContainer,
  PlaylistDetail,
  PlaylistHeader,
  PlaylistWrapper,
} from './Playlist.styles';
import React, { useMemo } from 'react';
import { Tooltip, Typography } from '@mui/material';

import PlaylistItem from '../../components/PlaylistItem';
import { PlaylistWithUsers } from '../../model/Playlist.model';
import timeFormatter from '@/utils/timeFormatter';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useTranslation } from 'react-i18next';

const Playlist = () => {
  const { t } = useTranslation();
  const { playlist, currentVideo, playlistLocked } = usePlaylistContext();

  const properPlaylist = useMemo(
    () => playlist.filter((video) => video.videoId !== currentVideo?.videoId),
    [currentVideo, playlist]
  );

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
      <PlaylistWrapper locked={playlistLocked ? 1 : 0}>
        <PlaylistHeader>
          <Typography variant='h2'>{t('playlist.header')}</Typography>
          <Tooltip title={t('playlist.tooltip.videoCount')}>
            <PlaylistDetail>
              <AutoAwesomeMotionRounded />
              <Typography variant='h4'>{properPlaylist.length || 0}</Typography>
            </PlaylistDetail>
          </Tooltip>
          <Tooltip title={t('playlist.tooltip.timeSum')}>
            <PlaylistDetail>
              <AccessTimeFilledRounded />
              <Typography variant='h4'>{timeFormatter(timeSum)}</Typography>
            </PlaylistDetail>
          </Tooltip>
        </PlaylistHeader>
        <PlaylistContainer>
          {!playlist?.length || (currentVideo?.videoId === playlist[0]?.videoId && !playlist[1]) ? (
            <EmptyPlaylistBox>
              <Typography variant='h4'>{t('playlist.empty')}</Typography>
            </EmptyPlaylistBox>
          ) : (
            playlist.map((video) => (
              <React.Fragment key={video.videoId}>
                <PlaylistItem video={video} />
              </React.Fragment>
            ))
          )}
        </PlaylistContainer>
      </PlaylistWrapper>
    </>
  );
};

export default Playlist;
