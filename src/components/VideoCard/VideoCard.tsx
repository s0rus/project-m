import { EmptyVideoCard, VideoBox, VideoCardWrapper, VideoContent } from './VideoCard.styles';
import { Link, Typography } from '@mui/material';
import React, { FC } from 'react';
import { ItemTitle } from '@/domain/Playlist/components/PlaylistItem/PlaylistItem.styles';
import { PlaylistWithUsers } from '@/domain/Playlist/model/Playlist.model';
import VideoThumbnail from '@/components/VideoThumbnail';
import { useTranslation } from 'react-i18next';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { AddedByAvatar, AddedByWrapper } from '@/styles/style';
import Image from 'next/image';
import Ok from '@/domain/Icons/Ok.svg';
interface VideoCardProps {
  video: PlaylistWithUsers | undefined;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  const { t } = useTranslation();
  const { playlistLocked } = usePlaylistContext();

  if (!video)
    return (
      <VideoCardWrapper elevation={0}>
        <div style={{ height: '80px', width: '80px', display: 'flex', margin: 'auto', marginLeft: '1rem' }}>
          <Image src={Ok} alt='' style={{ borderRadius: '8px' }} />
        </div>
        <EmptyVideoCard>
          <Typography variant='h3'>{t('playlist.noCurrentVideo.title')}</Typography>
          <Typography variant='body2' style={{ color: '#c7c7c7' }}>
            {!playlistLocked ? t('playlist.noCurrentVideo.subtitle') : t('playlist.noCurrentVideo.subtitlelock')}
          </Typography>
        </EmptyVideoCard>
      </VideoCardWrapper>
    );
  const { videoTitle, videoThumbnail, videoDuration, addedBy, videoUrl } = video;

  return (
    <VideoCardWrapper elevation={0}>
      <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
      <VideoBox>
        <VideoContent>
          <ItemTitle>
            <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
              {videoTitle}
            </Link>
          </ItemTitle>
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
