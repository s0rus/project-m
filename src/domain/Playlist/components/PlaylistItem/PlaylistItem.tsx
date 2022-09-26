import { Link, Typography } from '@mui/material';
import { PlaylistItemBox, PlaylistItemContent, PlaylistItemWrapper } from './PlaylistItem.styles';
import React, { FC } from 'react';

import { ListItem } from '@mui/material';
import { PlaylistWithUsers } from '../../model/Playlist.model';
import VideoThumbnail from '@/components/shared/VideoThumbnail/';
import { useTranslation } from 'react-i18next';

interface PlaylistItemsProps {
  video: PlaylistWithUsers;
}

const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  const { t } = useTranslation();
  const { videoThumbnail, videoTitle, videoUrl, addedBy, videoDuration } = video;

  return (
    <ListItem dense>
      <PlaylistItemWrapper>
        <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
          <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
        </Link>
        <PlaylistItemBox>
          <PlaylistItemContent>
            <Link href={videoUrl} target='_blank' rel='noopener norefferer' sx={{ width: '98%' }}>
              <Typography noWrap variant='h4'>
                {videoTitle}
              </Typography>
            </Link>
            <Typography variant='body1'>
              {t('video.addedBy')}: {addedBy.name}
            </Typography>
          </PlaylistItemContent>
        </PlaylistItemBox>
      </PlaylistItemWrapper>
    </ListItem>
  );
};

export default PlaylistItem;
