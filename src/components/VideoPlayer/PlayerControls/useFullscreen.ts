import { useState, useCallback } from 'react';

const useFullscreen = () => {
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
    } catch (error) {
      const err = error as Error;
      console.error(err.message);
    }
  }, []);

  return { toggleFullscreen, isFullscreen };
};

export default useFullscreen;