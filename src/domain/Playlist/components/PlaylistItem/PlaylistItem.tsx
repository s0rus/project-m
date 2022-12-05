import { CircularProgress, IconButton, Link, ListItem, Stack, Tooltip, Typography } from '@mui/material';
import { PlayArrowRounded, PlaylistRemove } from '@mui/icons-material';
import { PlaylistItemBox, PlaylistItemContent, PlaylistItemWrapper } from './PlaylistItem.styles';
import type { FC } from 'react';
import React, { useState } from 'react';

import { CustomToast, ToastTypes } from '@/utils/CustomToast';
import type { VideoProps } from '../../model/Playlist.model';
import VideoThumbnail from '@/domain/App/components/VideoThumbnail';
import { useTranslation } from 'react-i18next';
import { usePlaylistChange } from '../../hooks/usePlaylistChange';
import { useSocketStore } from '@/domain/App/store/Socket.store';
import { useAuthStore } from '@/domain/App/store/Auth.store';

interface PlaylistItemsProps {
  video: VideoProps;
}

const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  const { t } = useTranslation();

  const socket = useSocketStore((state) => state.socket);
  const isAdmin = useAuthStore((state) => state.isAdmin());

  const { handleSkipVideo, handlePlayVideoNow } = usePlaylistChange();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);
  const { videoId, videoThumbnail, videoTitle, videoUrl, addedBy, videoDuration } = video;

  const handleRemoveVideo = async () => {
    try {
      if (isAdmin && socket) {
        setIsDeleting(true);
        await handleSkipVideo(videoId);
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
        setIsSkipping(false);
        CustomToast.send(t('playlist.videoPlayedNow'), ToastTypes.Sucess);
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
            <Stack flexDirection={'row'} alignItems='center'>
              <Tooltip title={t('playlist.tooltip.deleteVideo')}>
                <IconButton sx={{ alignSelf: 'center' }} onClick={handleRemoveVideo} disabled={isDeleting}>
                  {isDeleting ? <CircularProgress size={32} /> : <PlaylistRemove />}
                </IconButton>
              </Tooltip>
              <Tooltip title={t('playlist.tooltip.playNow')}>
                <IconButton sx={{ alignSelf: 'center' }} onClick={handleSkipToVideo} disabled={isSkipping}>
                  {isSkipping ? <CircularProgress size={32} /> : <PlayArrowRounded />}
                </IconButton>
              </Tooltip>
            </Stack>
          )}
        </PlaylistItemBox>
      </PlaylistItemWrapper>
    </ListItem>
  );
};

export default PlaylistItem;
