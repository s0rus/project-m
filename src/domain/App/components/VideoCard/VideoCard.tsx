import { EmptyVideoCard, VideoBox, VideoCardWrapper, VideoContent } from './VideoCard.styles';
import { Link, Typography } from '@mui/material';
import React, { FC } from 'react';

import { PlaylistWithUsers } from '@/domain/Playlist/model/Playlist.model';
import VideoThumbnail from '../VideoThumbnail';
import { useTranslation } from 'react-i18next';

interface VideoCardProps {
  video: PlaylistWithUsers | undefined;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  const { t } = useTranslation();

  if (!video)
    return (
      <VideoCardWrapper elevation={0}>
        <EmptyVideoCard>
          <Typography variant='h3'>{t('playlist.noCurrentVideo.title')}</Typography>
          <Typography variant='body2'>{t('playlist.noCurrentVideo.subtitle')}</Typography>
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
          <Typography noWrap variant='h2' sx={{ width: '98%' }}>
            <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
              {videoTitle}
            </Link>
          </Typography>
          <Typography variant='body1'>
            {t('video.addedBy')}: {addedBy.name}
          </Typography>
        </VideoContent>
      </VideoBox>
    </VideoCardWrapper>
  );
};

export default VideoCard;
