import { CustomToast, ToastTypes } from '@/utils/CustomToast';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useFullscreen = () => {
  const { t } = useTranslation();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.body.requestFullscreen();
        setIsFullscreen(true);
      } else if (document.exitFullscreen) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } else {
        throw new Error('Fullscreen request is invalid...');
      }
    } catch {
      CustomToast.send(t('toggleFullscreenError'), ToastTypes.Error);
    }
  }, [t]);

  return { toggleFullscreen, isFullscreen };
};

export default useFullscreen;
