import { EmptyVideoCard, VideoBox, VideoCardWrapper, VideoContent, } from './VideoCard.styles';
import { Link, Typography, Hidden } from '@mui/material';
import React, { FC } from 'react';

import { PlaylistWithUsers } from '@/domain/Playlist/model/Playlist.model';
import VideoThumbnail from '@/components/VideoThumbnail';
import { useTranslation } from 'react-i18next';
import { AddedByAvatar, AddedByWrapper } from '@/styles/style'
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import Image from 'next/image';
import Ok from '@/domain/Icons/Ok.svg'
import { Seeker }  from '@/styles/style'
interface VideoCardProps {
  video: PlaylistWithUsers | undefined;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  const { t } = useTranslation();
  const {playerState } = usePlayerContext();
  const { playedSeconds, duration, activeVideo } = playerState;


  if (!video)
    return (
      <VideoCardWrapper elevation={0}>
        <EmptyVideoCard>
          <div style={{display: 'flex' ,position: 'relative', height: '60px', width: '60px', left: '-20px', marginTop: '10px',}}>
          <Image src={Ok} alt='' style={{ borderRadius: '30%'}} />
          </div>
          <Typography variant='h3' style={{textShadow: '0px 0px 10px white', position: 'absolute', marginLeft: '50px'}} >{t('playlist.noCurrentVideo.title')}</Typography>
          <Typography variant='body2' style={{cursor: 'default', marginTop: '-20px',marginLeft: '50px'}} >{t('playlist.noCurrentVideo.subtitle')}</Typography>
        </EmptyVideoCard>
      </VideoCardWrapper>
    );
  const { videoTitle, videoThumbnail, videoDuration, addedBy, videoUrl } = video;

  return (
    <Hidden lgDown >
    <VideoCardWrapper elevation={0}>
      <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
        <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
      </Link>
      <VideoBox>
        <VideoContent>
          <Link href={videoUrl} target='_blank' rel='noopener norefferer' sx={{ width: '98%' }}>
            <Typography variant='h2' style={{textShadow: '0px 0px 4px white', color: 'white'}} >
              {videoTitle}
            </Typography>
          </Link>
          <Seeker
        aria-label='time-indicator'
        size='small'
        value={activeVideo ? playedSeconds : 0}
        min={0}
        step={1}
        max={activeVideo ? duration : 1}
      />
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