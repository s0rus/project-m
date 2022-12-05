import useHasWindow from '@/domain/VideoPlayer/utils/hasWindow';

export const useNewWindow = () => {
  const hasWindow = useHasWindow();

  const newWindow = (url: string, title: string) =>
    new Promise<void>((resolve) => {
      if (hasWindow) {
        const dualScreenLeft = window.screenLeft ?? window.screenX;
        const dualScreenTop = window.screenTop ?? window.screenY;

        const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

        const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;

        const systemZoom = width / window.screen.availWidth;

        const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
        const top = (height - 550) / 2 / systemZoom + dualScreenTop;

        const openedWindow = window.open(
          url,
          title,
          `width=${500 / systemZoom},height=${550 / systemZoom},top=${top},left=${left}`
        );
        openedWindow?.focus();
        const timer = setInterval(() => {
          if (openedWindow?.closed) {
            clearInterval(timer);
            resolve();
          }
        }, 1000);
      }
    });

  return {
    newWindow,
  };
};
