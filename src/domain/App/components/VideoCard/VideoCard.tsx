import { EmptyVideoCard, VideoBox, VideoCardWrapper, VideoContent } from './VideoCard.styles';
import { Link, Typography } from '@mui/material';
import type { FC } from 'react';
import React from 'react';
import type { VideoProps } from '@/domain/Playlist/model/Playlist.model';
import VideoThumbnail from '../VideoThumbnail';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Ok from '@/domain/Icons/Ok.svg';
import { AddedByWrapper, AddedByAvatar } from '@/styles/style';

interface VideoCardProps {
  video: VideoProps | undefined;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  const { t } = useTranslation();

  if (!video)
    return (
      <VideoCardWrapper elevation={0}>
        <div style={{ height: '80px', width: '80px', display: 'flex', margin: 'auto', marginLeft: '1rem' }}>
          <Image src={Ok} alt='' style={{ borderRadius: '8px' }} />
        </div>
        <EmptyVideoCard>
          <Typography variant='h3'>{t('playlist.noCurrentVideo.title')}</Typography>
          <Typography variant='body2' style={{ color: '#c7c7c7' }}>
            {t('playlist.noCurrentVideo.subtitle')}
          </Typography>
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
          <AddedByWrapper>
            {addedBy.image ? <AddedByAvatar variant='square' src={addedBy.image} /> : null}
            <Typography component='span' style={{ cursor: 'default' }}>
              {addedBy.name}
            </Typography>
          </AddedByWrapper>
        </VideoContent>
      </VideoBox>
    </VideoCardWrapper>
  );
};

export default VideoCard;
