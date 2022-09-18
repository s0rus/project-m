import React, { FC } from 'react';
import { VideoThumbnailContainer, VideoThumbnailImage, VideoThumbnailWrapper } from './VideoThumbnail.styles';

import { Routes } from '@/server/router/routes';
import { useTranslation } from 'react-i18next';

interface VideoThumbnailProps {
  thumbnailUrl: string | null;
  videoTitle: string;
}

const VideoThumbnail: FC<VideoThumbnailProps> = ({ thumbnailUrl, videoTitle }) => {
  const { t } = useTranslation();

  return (
    <VideoThumbnailWrapper
      title={t('video.thumbnailAlt', {
        videoTitle,
      })}
    >
      <VideoThumbnailContainer>
        <VideoThumbnailImage
          src={thumbnailUrl ?? Routes.DEFAULT_THUMBNAIL}
          layout='fill'
          objectFit='cover'
          alt={t('video.thumbnailAlt', {
            videoTitle,
          })}
        />
      </VideoThumbnailContainer>
    </VideoThumbnailWrapper>
  );
};

export default VideoThumbnail;
