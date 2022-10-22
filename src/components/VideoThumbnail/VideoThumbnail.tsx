import React, { FC } from 'react';
import {
  VideoDurationSpan,
  VideoThumbnailContainer,
  VideoThumbnailImage,
  VideoThumbnailWrapper,
} from './VideoThumbnail.styles';

import { Routes } from '@/server/router/routes';
import timeFormatter from '@/utils/timeFormatter';
import { useTranslation } from 'react-i18next';

interface VideoThumbnailProps {
  thumbnailUrl: string | null;
  videoTitle: string;
  videoDuration: number;
}

const VideoThumbnail: FC<VideoThumbnailProps> = ({ thumbnailUrl, videoTitle, videoDuration }) => {
  const { t } = useTranslation();

  return (

    <VideoThumbnailWrapper
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
        <VideoDurationSpan variant='body1'>{timeFormatter(videoDuration)}</VideoDurationSpan>
      </VideoThumbnailContainer>
    </VideoThumbnailWrapper>

  );
};

export default VideoThumbnail;
