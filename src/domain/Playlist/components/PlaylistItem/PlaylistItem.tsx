import { CircularProgress, Link, ListItem, Tooltip, Typography } from '@mui/material';
import {} from '@mui/icons-material';
import {
  PlaylistItemBox,
  PlaylistItemContent,
  PlaylistItemWrapper,
  Delete,
  Current,
  Copied,
  Copy,
  ItemOptions,
  ItemTitle,
} from './PlaylistItem.styles';
import type { FC } from 'react';
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ClearIcon from '@mui/icons-material/Clear';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { CustomToast, ToastTypes } from '@/utils/CustomToast';
import type { PlaylistWithUsers } from '../../model/Playlist.model';
import VideoThumbnail from '@/domain/App/components/VideoThumbnail';
import { useAuthContext } from '@/domain/App/context/Auth.context';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import { usePlaylistContext } from '../../context/Playlist.context';
import { useSocketContext } from '@/domain/App/context/Socket.context';
import { AddedByAvatar, AddedByWrapper } from '@/styles/style';
import { useTranslation } from 'react-i18next';
interface PlaylistItemsProps {
  video: PlaylistWithUsers;
}

const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  const { t } = useTranslation();
  const { socket } = useSocketContext();
  const { isAdmin } = useAuthContext();
  const { handleSkipVideo, handlePlayVideoNow } = usePlaylistContext();
  const { handleOnPlayVideoNow } = usePlayerContext();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);
  const [copied, setCopied] = useState(false);
  const { videoId, videoThumbnail, videoTitle, videoUrl, addedBy, videoDuration } = video;

  const CopyThis = () => {
    navigator.clipboard.writeText(videoUrl);
    setCopied(true);
    CustomToast.send(t('playlist.copy'), ToastTypes.Copy);
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
        <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
        <ItemOptions>
          {copied ? (
            <Tooltip title={t('playlist.tooltip.copied')} placement='left'>
              <Copied>
                <CheckIcon />
              </Copied>
            </Tooltip>
          ) : (
            <Tooltip title={t('playlist.tooltip.copy')} placement='left'>
              <Copy onClick={CopyThis}>
                <ContentCopyIcon />
              </Copy>
            </Tooltip>
          )}
          {isAdmin && (
            <>
              <Tooltip title={t('playlist.tooltip.delete')} placement='left'>
                <Delete onClick={handleRemoveVideo} disabled={isDeleting}>
                  {isDeleting ? <CircularProgress size={32} /> : <ClearIcon />}
                </Delete>
              </Tooltip>
              <Tooltip title={t('playlist.tooltip.requestcurrent')} placement='left'>
                <Current onClick={handleSkipToVideo} disabled={isSkipping}>
                  {isSkipping ? <CircularProgress size={32} /> : <PlayArrowIcon />}
                </Current>
              </Tooltip>
            </>
          )}
        </ItemOptions>
        <PlaylistItemBox>
          <PlaylistItemContent>
            <ItemTitle>
              <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
                {videoTitle}
              </Link>
            </ItemTitle>
            <AddedByWrapper>
              {addedBy.image ? <AddedByAvatar variant='square' src={addedBy.image} /> : null}
              <Typography component='span'>{addedBy.name}</Typography>
            </AddedByWrapper>
          </PlaylistItemContent>
        </PlaylistItemBox>
      </PlaylistItemWrapper>
    </ListItem>
  );
};

export default PlaylistItem;
