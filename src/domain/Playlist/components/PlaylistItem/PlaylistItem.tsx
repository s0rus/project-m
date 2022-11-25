import { CircularProgress, Link, Tooltip, Typography } from '@mui/material';
import type { FC } from 'react';
import { AddedByAvatar } from '@/styles/style';
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ClearIcon from '@mui/icons-material/Clear';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { CustomToast, ToastTypes } from '@/utils/CustomToast';
import type { VideoProps } from '../../model/Playlist.model';
import VideoThumbnail from '@/domain/App/components/VideoThumbnail';
import { useTranslation } from 'react-i18next';
import { usePlaylistChange } from '../../hooks/usePlaylistChange';
import { useSocketStore } from '@/domain/App/store/Socket.store';
import { useAuthStore } from '@/domain/App/store/Auth.store';
import {
  PlaylistItemBox,
  PlaylistItemContent,
  PlaylistItemWrapper,
  Delete,
  Current,
  Copied,
  Copy,
  ItemOptions,
  PlaylistTextHolder,
} from './PlaylistItem.styles';
interface PlaylistItemsProps {
  video: VideoProps;
}

const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  const { t } = useTranslation();

  const socket = useSocketStore((state) => state.socket);
  const isAdmin = useAuthStore((state) => state.isAdmin());
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);
  const { handleSkipVideo, handlePlayVideoNow } = usePlaylistChange();
  const { videoId, videoThumbnail, videoTitle, videoUrl, addedBy, videoDuration } = video;
  const [copied, setCopied] = useState(false);

  const CopyThis = () => {
    navigator.clipboard.writeText(videoUrl);
    setCopied(true);
    CustomToast.send(t('playlist.copy'), ToastTypes.Copy);
  };
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
    <PlaylistItemContent>
      <PlaylistItemWrapper>
        <Link href={videoUrl} target='_blank' rel='noopener norefferer'>
          <VideoThumbnail thumbnailUrl={videoThumbnail} videoTitle={videoTitle} videoDuration={videoDuration} />
        </Link>
      </PlaylistItemWrapper>
      <PlaylistItemContent>
        <ItemOptions>
          {isAdmin && (
            <>
              <Tooltip title={t('playlist.tooltip.delete')} placement='top'>
                <Delete onClick={handleRemoveVideo} disabled={isDeleting}>
                  {isDeleting ? <CircularProgress size={32} /> : <ClearIcon />}
                </Delete>
              </Tooltip>
              <Tooltip title={t('playlist.tooltip.requestcurrent')} placement='top'>
                <Current onClick={handleSkipToVideo} disabled={isSkipping}>
                  {isSkipping ? <CircularProgress size={32} /> : <PlayArrowIcon />}
                </Current>
              </Tooltip>
            </>
          )}
          {copied ? (
            <Tooltip title={t('playlist.tooltip.copied')} placement='top'>
              <Copied>
                <CheckIcon />
              </Copied>
            </Tooltip>
          ) : (
            <Tooltip title={t('playlist.tooltip.copy')} placement='top'>
              <Copy onClick={CopyThis}>
                <ContentCopyIcon />
              </Copy>
            </Tooltip>
          )}
        </ItemOptions>

        <PlaylistItemBox>
          {addedBy.image ? <AddedByAvatar variant='square' src={addedBy.image} /> : null}

          <PlaylistTextHolder>
            <Link href={videoUrl} style={{ width: '100%' }} target='_blank' rel='noopener norefferer'>
              {videoTitle}
            </Link>
            <Typography style={{ fontSize: '12px' }}>{addedBy.name}</Typography>
          </PlaylistTextHolder>
        </PlaylistItemBox>
      </PlaylistItemContent>
    </PlaylistItemContent>
  );
};

export default PlaylistItem;
