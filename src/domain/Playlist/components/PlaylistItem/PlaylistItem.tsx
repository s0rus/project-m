import { Box, CardContent, Link, Typography } from '@mui/material';
import React, { FC } from 'react';

import { PlaylistItemCard } from './PlaylistItem.styles';
import { PlaylistWithUsers } from '../../model/Playlist.model';
import VideoThumbnail from '@/components/shared/VideoThumbnail/';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useTranslation } from 'react-i18next';

interface PlaylistItemsProps {
  video: PlaylistWithUsers;
}

const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  const { t } = useTranslation();
  const { currentVideo } = usePlaylistContext();
  const { videoThumbnail, videoTitle, videoUrl, addedBy, videoId, videoDuration } = video;

  if (currentVideo?.videoId === videoId) return null;

  return (
    <PlaylistItemCard>
      <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
            <Typography component='div' variant='h4'>
              {videoTitle}
            </Typography>
          </Link>
          <Typography component='div' variant='body1'>
            {t('video.addedBy')}: {addedBy.name}
          </Typography>
        </CardContent>
      </Box>
    </PlaylistItemCard>
  );
};

export default PlaylistItem;
