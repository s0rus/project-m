import { Link, Typography, CircularProgress  } from '@mui/material';
import { PlaylistItemBox, PlaylistItemContent, PlaylistItemWrapper, Delete, Current, ItemTitle } from './PlaylistItem.styles';
import React, { FC, useState } from 'react';
import { ListItem, Tooltip} from '@mui/material';
import { PlaylistWithUsers } from '../../model/Playlist.model';
import VideoThumbnail from '@/components/VideoThumbnail/';
import { AddedByAvatar, AddedByWrapper } from '@/styles/style'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTranslation } from 'react-i18next';
import CheckIcon from '@mui/icons-material/Check';
import { ToastTypes } from '@/utils/ToastTypes';
import { CustomToast } from '@/utils/sendToast';
import { Seeker }  from '@/styles/style'
import { useAuthContext } from '@/contexts/AuthContext';
import { usePlaylistContext } from '../../context/PlaylistContext';
import { useSocketContext } from '@/contexts/SocketContext';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/styles/theme';
interface PlaylistItemsProps {
  video: PlaylistWithUsers;
}

const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  const { socket } = useSocketContext();
  const { t } = useTranslation();
  const { isAdmin } = useAuthContext();
  const { handleSkipVideo, handlePlayVideoNow } = usePlaylistContext();
  const { handleOnPlayVideoNow } = usePlayerContext();
  const [beforecopy, setCopiedBefore] = useState(true)
  const [copied, setCopied] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);
  const { videoId, videoThumbnail, videoTitle, videoUrl, addedBy, videoDuration } = video;
  const isMediumUp = useMediaQuery(theme.breakpoints.up('lg'));
  const CopyThis = () => {
    navigator.clipboard.writeText(videoUrl);
    setCopied(true);
    setCopiedBefore(false);
    CustomToast.send(t('playlist.copy'), ToastTypes.Copy );
  }

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleRemoveVideo = async () => {
    try {
      if (isAdmin) {
        setIsDeleting(true);
        await handleSkipVideo(videoId);
        socket.emit('DELETE_VIDEO', videoId);
        setIsDeleting(false);
        CustomToast.send(t('playlist.videoRemoved'), ToastTypes.Sucess);
      } else {
        throw new Error();
      }
    } catch {
      CustomToast.send(t('playlist.removeVideoError'), ToastTypes.Error);
    }
  };

  const handleSkipToVideo = async () => {
    try {
      if (isAdmin) {
        setIsSkipping(true);
        await handlePlayVideoNow(videoId);
        socket.emit('SKIP_VIDEO', videoId);
        handleOnPlayVideoNow();
        setIsSkipping(false);
        CustomToast.send(t('playlist.setVideo'), ToastTypes.Sucess);
      } else {
        throw new Error();
      }
    } catch {
      CustomToast.send(t('playlist.setVideoError'), ToastTypes.Error);
    }
  };

  return (
    <ListItem dense>
      <>
      {isMediumUp ? (
      <PlaylistItemWrapper>
          <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
        {isAdmin &&
        <div>
              <Tooltip title={t('playlist.tooltip.delete')} >
              <IconButton onClick={handleRemoveVideo} disabled={isDeleting} style={{ position: 'absolute', right: '10px', top: '40px',}} >
              <Delete>
                {isDeleting ? <CircularProgress style={{marginTop: '5px'}} size={32} /> : <ClearIcon  style={{width: '40px', height: '40px'}}  />}
              </Delete>
              </IconButton>
              </Tooltip>
              <Tooltip title={t('playlist.tooltip.requestcurrent')} >
              <IconButton onClick={handleSkipToVideo} disabled={isSkipping} style={{ position: 'absolute', right: '60px', top: '40px',}} >
              <Current>
                {isSkipping ? <CircularProgress style={{marginTop: '5px'}} size={32} /> : <ArrowUpwardIcon  style={{width: '40px', height: '40px'}}  />}
              </Current>
              </IconButton>
              </Tooltip>
        </div>
            }
{beforecopy &&
<Tooltip title={t('playlist.tooltip.copy')} >
  <ContentCopyIcon style={{color: isHovering ? 'white' : 'hsla(298, 100%, 100%, 0.25)',  position: 'absolute', right: '10px', top: '10px', cursor: 'pointer',}}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  onClick={CopyThis}/>
</Tooltip>
}
{copied &&
  <Tooltip title={t('playlist.tooltip.copied')} >
  <CheckIcon style={{color: 'rgba(38, 255, 0, 0.49)',  position: 'absolute', right: '10px', top: '10px', cursor: 'pointer',
  }}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}/>
</Tooltip>
}
        <PlaylistItemBox>
          <PlaylistItemContent>
          <ItemTitle>
          <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
                {videoTitle}
          </Link>
          </ItemTitle>
            <Seeker aria-label='time-indicator'size='small'/>
            <AddedByWrapper>
          {addedBy.image ? <AddedByAvatar variant='square' src={addedBy.image} /> : null}
          <Typography component='span' style={{textShadow: '0px 0px 2px white'}} >{addedBy.name}</Typography>
        </AddedByWrapper>
          </PlaylistItemContent>
        </PlaylistItemBox>
      </PlaylistItemWrapper>
      ) : (


        <PlaylistItemWrapper>
        <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
      <PlaylistItemBox>
        <PlaylistItemContent>
        <ItemTitle>
        <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
              {videoTitle}
        </Link>
        </ItemTitle>
          <AddedByWrapper>
        {addedBy.image ? <AddedByAvatar variant='square' src={addedBy.image} /> : null}
        <Typography component='span' style={{textShadow: '0px 0px 2px white'}} >{addedBy.name}</Typography>
      </AddedByWrapper>
        </PlaylistItemContent>
      </PlaylistItemBox>
    </PlaylistItemWrapper>
      ) }
      </>
    </ListItem>
  );
};

export default PlaylistItem;