import { CircularProgress, Link, Tooltip, Typography } from '@mui/material';
import { PlaylistItemBox, PlaylistItemContent, PlaylistItemWrapper } from './PlaylistItem.styles';
import React, { FC, useState } from 'react';

import { CustomToast } from '@/utils/sendToast';
import { IconButton } from '@mui/material';
import { ListItem } from '@mui/material';
import { PlaylistRemove } from '@mui/icons-material';
import { PlaylistWithUsers } from '../../model/Playlist.model';
import { ToastTypes } from '@/utils/ToastTypes';
import VideoThumbnail from '@/components/VideoThumbnail';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePlaylistContext } from '../../context/PlaylistContext';
import { useSocketContext } from '@/contexts/SocketContext';
import { useTranslation } from 'react-i18next';

interface PlaylistItemsProps {
  video: PlaylistWithUsers;
}

const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  const { t } = useTranslation();
  const { socket } = useSocketContext();
  const { isAdmin } = useAuthContext();
  const { handleSkipVideo } = usePlaylistContext();
  const [isDeleting, setIsDeleting] = useState(false);
  const { videoId, videoThumbnail, videoTitle, videoUrl, addedBy, videoDuration } = video;

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

  return (
    <ListItem dense>
      <PlaylistItemWrapper>
        <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
          <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
        </Link>
        <PlaylistItemBox>
          <PlaylistItemContent>
            <Typography noWrap variant='h4' sx={{ width: '98%' }}>
              <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
                {videoTitle}
              </Link>
            </Typography>
            <Typography variant='body1'>
              {t('video.addedBy')}: {addedBy.name}
            </Typography>
          </PlaylistItemContent>
          {isAdmin && (
            <Tooltip title={t('playlist.tooltip.deleteVideo')}>
              <IconButton sx={{ alignSelf: 'center' }} onClick={handleRemoveVideo} disabled={isDeleting}>
                {isDeleting ? <CircularProgress size={32} /> : <PlaylistRemove />}
              </IconButton>
            </Tooltip>
          )}
        </PlaylistItemBox>
      </PlaylistItemWrapper>
    </ListItem>
  );
};

export default PlaylistItem;
