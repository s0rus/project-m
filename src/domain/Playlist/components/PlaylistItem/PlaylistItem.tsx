import { Link, Typography, CircularProgress } from '@mui/material';
import {
  PlaylistItemBox,
  PlaylistItemContent,
  PlaylistItemWrapper,
  ItemTitle,
  ItemOptions,
  Delete,
  Current,
  Copy,
  Copied,
} from './PlaylistItem.styles';
import React, { FC, useState } from 'react';
import { ListItem, Tooltip } from '@mui/material';
import { PlaylistWithUsers } from '../../model/Playlist.model';
import VideoThumbnail from '@/components/VideoThumbnail/';
import { AddedByAvatar, AddedByWrapper } from '@/styles/style';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTranslation } from 'react-i18next';
import CheckIcon from '@mui/icons-material/Check';
import { ToastTypes } from '@/utils/ToastTypes';
import { CustomToast } from '@/utils/sendToast';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePlaylistContext } from '../../context/PlaylistContext';
import { useSocketContext } from '@/contexts/SocketContext';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
interface PlaylistItemsProps {
  video: PlaylistWithUsers;
}

const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  const { socket } = useSocketContext();
  const { t } = useTranslation();
  const { isAdmin } = useAuthContext();
  const { handleSkipVideo, handlePlayVideoNow } = usePlaylistContext();
  const { handleOnPlayVideoNow } = usePlayerContext();
  const [copied, setCopied] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);
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
