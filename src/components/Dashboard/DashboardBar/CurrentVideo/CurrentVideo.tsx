import { AddedByAvatar, AddedByWrapper, CurrentVideoDetails, CurrentVideoWrapper } from './CurrentVideo.styles';
import { Link, Typography } from '@mui/material';
import React, { FC } from 'react';

import { PlaylistWithUsers } from '../../Playlist/Playlist.model';
import VideoThumbnail from '@/components/shared/VideoThumbnail';

interface CurrentVideoProps {
  video: PlaylistWithUsers | undefined;
}

const CurrentVideo: FC<CurrentVideoProps> = ({ video }) => {
  if (!video) return null;
  const { videoTitle, videoThumbnail, videoDuration, addedBy } = video;

  return (
    <CurrentVideoWrapper>
      <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
      <CurrentVideoDetails>
        <Link href={video.videoUrl} target='_blank' rel='noopener norefferer'>
          <Typography variant='h2'>{videoTitle}</Typography>
        </Link>
        <AddedByWrapper>
          {addedBy.image ? <AddedByAvatar variant='square' src={addedBy.image} /> : null}
          <Typography component='span'>{addedBy.name}</Typography>
        </AddedByWrapper>
      </CurrentVideoDetails>
    </CurrentVideoWrapper>
  );
};

export default CurrentVideo;
