import { Link, Typography, styled, Slider, Hidden } from '@mui/material';
import { PlaylistItemBox, PlaylistItemContent, PlaylistItemWrapper } from './PlaylistItem.styles';
import React, { FC } from 'react';
import { theme } from '@/styles/theme';
import { ListItem } from '@mui/material';
import { PlaylistWithUsers } from '../../model/Playlist.model';
import VideoThumbnail from '@/components/VideoThumbnail/';
import { AddedByAvatar, AddedByWrapper } from '@/styles/style'


interface PlaylistItemsProps {
  video: PlaylistWithUsers;
}

const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  const { videoThumbnail, videoTitle, videoUrl, addedBy, videoDuration } = video;


  
  const Seeker = styled(Slider)`
  color: ${theme.palette.primary.main};
  height: 4px;
  pointer-events: none;
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
  border-radius: 8px;
  & .MuiSlider-thumb {
    width: 0px;
    height: 0px;
    color: white;
  }
  &::before {
    display: none;
    opacity: 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
  }
  &:hover,
  &.Mui-focusVisible {
    box-shadow: ${theme.palette.primary.main};
  }
  &.Mui-active {
    width: 0px;
    height: 0px;
  }
  & .MuiSlider-rail {
    opacity: 0.28;
  }
`;

  return (
    <div>
    <Hidden lgDown>
    <ListItem dense>
      <PlaylistItemWrapper>
        <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
          <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
        </Link>
        <PlaylistItemBox>
          <PlaylistItemContent>
            <Link href={videoUrl} target='_blank' rel='noopener norefferer' sx={{ width: '100%' }}>
              <Typography noWrap variant='h4'>
                {videoTitle}
              </Typography>
            </Link>
            <Seeker
        aria-label='time-indicator'
        size='small'
      />
            <AddedByWrapper>
          {addedBy.image ? <AddedByAvatar variant='square' src={addedBy.image} /> : null}
          <Typography component='span'>{addedBy.name}</Typography>
        </AddedByWrapper>
          </PlaylistItemContent>
        </PlaylistItemBox>
      </PlaylistItemWrapper>
    </ListItem>
    </Hidden>

    <Hidden lgUp>
          <ListItem dense>
      <PlaylistItemWrapper style={{width: '218px',}} >
        <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
          <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
        </Link>
      </PlaylistItemWrapper>
    </ListItem>
    </Hidden>
    </div>

  );
};

export default PlaylistItem;