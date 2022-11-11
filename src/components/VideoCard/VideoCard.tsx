import { EmptyVideoCard, VideoBox, VideoCardWrapper, VideoContent, } from './VideoCard.styles';
import { Link, Typography } from '@mui/material';
import React, { FC } from 'react';
import { ItemTitle } from '@/domain/Playlist/components/PlaylistItem/PlaylistItem.styles';
import { PlaylistWithUsers } from '@/domain/Playlist/model/Playlist.model';
import VideoThumbnail from '@/components/VideoThumbnail';
import { useTranslation } from 'react-i18next';
import { AddedByAvatar, AddedByWrapper } from '@/styles/style'
import Image from 'next/image';
import Ok from '@/domain/Icons/Ok.svg'
import { theme } from '@/styles/theme';
interface VideoCardProps {
  video: PlaylistWithUsers | undefined;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  const { t } = useTranslation();

  if (!video)
    return (
      <VideoCardWrapper elevation={0}>
        <EmptyVideoCard>
          <Typography variant='h3' style={{marginLeft: '60px'}} >{t('playlist.noCurrentVideo.title')}</Typography>
          <Typography variant='body2' style={{marginLeft: '60px', color: '#c7c7c7'}} >{t('playlist.noCurrentVideo.subtitle')}</Typography>
          <div style={{position: 'absolute', height: '50px', width: '50px', left: '60px', marginBottom: '5px'}} >
          <Image src={Ok} alt='' style={{ borderRadius: '10%'}} />
          </div>
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
          <Link href={videoUrl} target='_blank' rel='noopener norefferer' >
              {videoTitle}
          </Link>
          </ItemTitle>
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