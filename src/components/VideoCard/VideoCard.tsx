import { EmptyVideoCard, VideoBox, VideoCardWrapper, VideoContent, } from './VideoCard.styles';
import { Link, Typography } from '@mui/material';
import React, { FC } from 'react';

import { PlaylistWithUsers } from '@/domain/Playlist/model/Playlist.model';
import VideoThumbnail from '@/components/VideoThumbnail';
import { useTranslation } from 'react-i18next';
import { AddedByAvatar, AddedByWrapper } from '@/styles/style'
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';

import { Seeker }  from '@/styles/style'
interface VideoCardProps {
  video: PlaylistWithUsers | undefined;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  const { t } = useTranslation();
  const {playerState } = usePlayerContext();
  const { playedSeconds, duration, activeVideo } = playerState;


  if (!video)
    return (
      <VideoCardWrapper elevation={0}>
        <EmptyVideoCard>
          <Typography variant='h3'>{t('playlist.noCurrentVideo.title')}</Typography>
          <Typography variant='body2' style={{cursor: 'default'}} >{t('playlist.noCurrentVideo.subtitle')}</Typography>
        </EmptyVideoCard>
      </VideoCardWrapper>
    );
  const { videoTitle, videoThumbnail, videoDuration, addedBy, videoUrl } = video;

  return (
    <VideoCardWrapper elevation={0}>
      <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
        <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
      </Link>
      <VideoBox>
        <VideoContent>
          <Link href={videoUrl} target='_blank' rel='noopener norefferer' sx={{ width: '98%' }}>
            <Typography noWrap variant='h2'>
              {videoTitle}
            </Typography>
          </Link>
          <Seeker
        aria-label='time-indicator'
        size='small'
        value={activeVideo ? playedSeconds : 0}
        min={0}
        step={1}
        max={activeVideo ? duration : 1}
      />
          <AddedByWrapper>
          {addedBy.image ? <AddedByAvatar variant='square' src={addedBy.image} /> : null}
          <Typography component='span' style={{cursor: 'default'}} >{addedBy.name}</Typography>
        </AddedByWrapper>
        </VideoContent>
      </VideoBox>
    </VideoCardWrapper>
  );
};

export default VideoCard;