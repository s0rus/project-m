import { ToastTypes } from '@/utils/ToastTypes';
import { toast } from 'react-toastify';
import { LockRounded, LockOpenRounded, FastForwardRounded, SkipNextRounded, ContentCopyRounded } from '@mui/icons-material';
import { theme } from '@/styles/theme';

export class CustomToast {
  private static determineIcon = (type: ToastTypes) => {
    switch (type) {
      case ToastTypes.PlaylistLocked:
        return <LockRounded sx={{ color: theme.palette.primary.main }} />
      case ToastTypes.PlaylistUnlocked:
        return <LockOpenRounded sx={{ color: theme.palette.primary.main }} />
      case ToastTypes.VideoSeeked:
        return <FastForwardRounded sx={{ color: theme.palette.primary.main }} />
      case ToastTypes.VideoSkipped:
        return <SkipNextRounded sx={{ color: theme.palette.primary.main }} />
        case ToastTypes.Copy:
          return <ContentCopyRounded sx={{ color: theme.palette.primary.main }} />
    }


  };

  static send = (message: string, type: ToastTypes) => {
    toast(message, {
      icon: CustomToast.determineIcon(type),
    });
  };
}
