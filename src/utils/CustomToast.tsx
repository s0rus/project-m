import {
  DoneRounded,
  FastForwardRounded,
  LockOpenRounded,
  LockRounded,
  PriorityHighRounded,
  SkipNextRounded,
} from '@mui/icons-material';

import { theme } from '@/styles/theme';
import { toast } from 'react-toastify';

export enum ToastTypes {
  PlaylistLocked = 'PLAYLIST_LOCKED',
  PlaylistUnlocked = 'PLAYLIST_UNLOCKED',
  VideoSkipped = 'VIDEO_SKIPPED',
  VideoSeeked = 'VIDEO_SEEKED',
  Sucess = 'SUCCESS',
  Error = 'ERROR',
}
export class CustomToast {
  private static determineIcon = (type: ToastTypes) => {
    switch (type) {
      case ToastTypes.PlaylistLocked:
        return <LockRounded sx={{ color: theme.palette.primary.main }} />;
      case ToastTypes.PlaylistUnlocked:
        return <LockOpenRounded sx={{ color: theme.palette.primary.main }} />;
      case ToastTypes.VideoSeeked:
        return <FastForwardRounded sx={{ color: theme.palette.primary.main }} />;
      case ToastTypes.VideoSkipped:
        return <SkipNextRounded sx={{ color: theme.palette.primary.main }} />;
      case ToastTypes.Sucess:
        return <DoneRounded sx={{ color: theme.palette.primary.main }} />;
      case ToastTypes.Error:
        return <PriorityHighRounded sx={{ color: theme.palette.primary.main }} />;
      default:
        return undefined;
    }
  };

  static send = (message: string, type: ToastTypes) => {
    toast.clearWaitingQueue();
    toast(message, {
      icon: CustomToast.determineIcon(type),
      toastId: message,
    });
  };
}
