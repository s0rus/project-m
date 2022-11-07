import { AccessTimeFilledRounded, AutoAwesomeMotionRounded } from '@mui/icons-material';
import {
  EmptyPlaylistBox,
  PlaylistContainer,
  PlaylistDetail,
  PlaylistHeader,
  PlaylistWrapper,
} from './Playlist.styles';
import { List, Tooltip, Typography } from '@mui/material';

import PlaylistItem from '../../components/PlaylistItem';
import React from 'react';
import timeFormatter from '@/utils/timeFormatter';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { usePlaylistContext } from '@/domain/Playlist/context/Playlist.context';
import { useTranslation } from 'react-i18next';

const Playlist = () => {
  const { t } = useTranslation();
  const { timeSum, properPlaylist, playlistLocked } = usePlaylistContext();
  const [animatedList] = useAutoAnimate();

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
            </EmptyPlaylistBox>
          )}
        </PlaylistContainer>
      </PlaylistWrapper>
    </>
  );
};

export default Playlist;
