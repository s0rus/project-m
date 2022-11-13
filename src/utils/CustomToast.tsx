import Ok from '@/domain/Icons/Ok.svg';
import Mad from '@/domain/Icons/Mad.svg';
import Ez from '@/domain/Icons/Ez.svg';
import Sad from '@/domain/Icons/Sad.svg';
import Happy from '@/domain/Icons/Happy.svg';
import Image from 'next/image';
import { toast } from 'react-toastify';

export enum ToastTypes {
  PlaylistLocked = 'PLAYLIST_LOCKED',
  PlaylistUnlocked = 'PLAYLIST_UNLOCKED',
  VideoSkipped = 'VIDEO_SKIPPED',
  VideoSeeked = 'VIDEO_SEEKED',
  Sucess = 'SUCCESS',
  Error = 'ERROR',
  Copy = 'COPY_THIS',
}
export class CustomToast {
  private static determineIcon = (type: ToastTypes) => {
    switch (type) {
      case ToastTypes.PlaylistLocked:
        return <Image alt='' src={Sad} />;
      case ToastTypes.PlaylistUnlocked:
        return <Image alt='' src={Happy} />;
      case ToastTypes.VideoSeeked:
        return <Image alt='' src={Ez} />;
      case ToastTypes.VideoSkipped:
        return <Image alt='' src={Ez} />;
      case ToastTypes.Copy:
        return <Image alt='' src={Ok} />;
      case ToastTypes.Sucess:
        return <Image alt='' src={Ok} />;
      case ToastTypes.Error:
        return <Image alt='' src={Mad} />;
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
