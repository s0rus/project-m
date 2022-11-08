import { EmptyVideoCard, VideoBox, VideoCardWrapper, VideoContent, } from './VideoCard.styles';
import { Link, Typography, Hidden } from '@mui/material';
import React, { FC } from 'react';
import { PlaylistWithUsers } from '@/domain/Playlist/model/Playlist.model';
import VideoThumbnail from '@/domain/App/components/VideoThumbnail';
import { useTranslation } from 'react-i18next';
import { AddedByAvatar, AddedByWrapper } from '@/styles/style'
import Image from 'next/image';
import Ok from '@/domain/Icons/Ok.svg'
interface VideoCardProps {
  video: PlaylistWithUsers | undefined;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  const { t } = useTranslation();



  if (!video)
    return (
      <VideoCardWrapper elevation={0}>
        <EmptyVideoCard>
        <div style={{position: 'absolute', height: '60px', width: '60px'}}>
          <Image src={Ok} alt='' style={{ borderRadius: '30%'}} />
          </div>
          <Typography variant='h3' style={{marginLeft: '80px', marginTop: '10px'}} >{t('playlist.noCurrentVideo.title')}</Typography>
          <Typography variant='body2' style={{marginLeft: '80px'}} >{t('playlist.noCurrentVideo.subtitle')}</Typography>
        </EmptyVideoCard>
      </VideoCardWrapper>
    );
  const { videoTitle, videoThumbnail, videoDuration, addedBy, videoUrl } = video;

  return (
    <Hidden lgDown >
    <VideoCardWrapper elevation={0}>
        <Link href={videoUrl} target='_blank' rel='noopener norefferer' >
        <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
        </Link>
      <VideoBox>
        <VideoContent>
          <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
          <Typography variant='h3'>
          {videoTitle}
          </Typography>
          </Link>
          <AddedByWrapper>
          {addedBy.image ? <AddedByAvatar variant='square' src={addedBy.image} /> : null}
          <Typography component='span' style={{cursor: 'default'}} >{addedBy.name}</Typography>
        </AddedByWrapper>
        </VideoContent>
      </VideoBox>
    </VideoCardWrapper>
    <Hidden lgUp >
       <VideoCardWrapper elevation={0}>
         <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
           <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
         </Link>
       </VideoCardWrapper>
       </Hidden>
    </Hidden>

  );
};

export default VideoCard;