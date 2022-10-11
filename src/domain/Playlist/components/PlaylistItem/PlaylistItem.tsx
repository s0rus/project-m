import { Link, Typography, styled, Slider, Hidden } from '@mui/material';
import { PlaylistItemBox, PlaylistItemContent, PlaylistItemWrapper } from './PlaylistItem.styles';
import React, { FC, useState } from 'react';
import { theme } from '@/styles/theme';
import { ListItem} from '@mui/material';
import { PlaylistWithUsers } from '../../model/Playlist.model';
import VideoThumbnail from '@/components/VideoThumbnail/';
import { AddedByAvatar, AddedByWrapper } from '@/styles/style'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { toast } from 'react-toastify';

interface PlaylistItemsProps {
  video: PlaylistWithUsers;
}

const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  const { videoThumbnail, videoTitle, videoUrl, addedBy, videoDuration } = video;

  const CopyThis = () => {
    navigator.clipboard.writeText(videoUrl);
    toast('📋 Skopiowano do schowka.', {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      theme: "dark",
      });
  }

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  
  const Seeker = styled(Slider)`
  color: ${theme.palette.primary.main};
  height: 4px;
  pointer-events: none;
  padding: 0;
  margin: 0;
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
    color: gray;
    opacity: 0.50;
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

  <ContentCopyIcon style={{color: isHovering ? 'white' : 'hsla(298, 100%, 100%, 0.25)',  position: 'absolute', right: '10px', top: '10px', cursor: 'pointer',
  }}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  onClick={CopyThis}/>

        <PlaylistItemBox>
          <PlaylistItemContent>
            <Link href={videoUrl} target='_blank' rel='noopener norefferer' sx={{ width: '100%' }}>
              <Typography noWrap variant='h4'>
                {videoTitle}
              </Typography>
            </Link>
            <Seeker aria-label='time-indicator'size='small'/>
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