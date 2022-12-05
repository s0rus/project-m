import { useAuthChange } from '@/domain/App/hooks/useAuthChange';
import { LocalStorageKeys } from '@/domain/App/model/App.model';
import { useSocketStore } from '@/domain/App/store/Socket.store';
import { usePlaylistChange } from '@/domain/Playlist/hooks/usePlaylistChange';
import type { EssentialPlayerState } from '@/server/sockets/SocketProvider';
import { CustomToast, ToastTypes } from '@/utils/CustomToast';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useVideoPlayerStore } from '../store/VideoPlayer.store';

export const useVideoPlayer = () => {
  const { t } = useTranslation();
  const socket = useSocketStore((state) => state.socket);
  const isAdmin = useAuthChange();
  const { handleRequestNextVideo, handleSkipVideo } = usePlaylistChange();

  const playerRef = useVideoPlayerStore((state) => state.playerRef);
  const isReady = useVideoPlayerStore((state) => state.isReady);
  const resetPlayerState = useVideoPlayerStore((state) => state.resetPlayerState);
  const setIsReady = useVideoPlayerStore((state) => state.setIsReady);
  const setPlayedSeconds = useVideoPlayerStore((state) => state.setPlayedSeconds);
  const setIsPlaying = useVideoPlayerStore((state) => state.setIsPlaying);
  const setVolume = useVideoPlayerStore((state) => state.setVolume);

  const seekTo = useCallback((seconds: number) => playerRef?.current?.seekTo(seconds, 'seconds'), [playerRef]);
  const getDuration = useCallback(() => playerRef?.current?.getDuration() || 0, [playerRef]);
  const getPlayedSeconds = useCallback(() => playerRef?.current?.getCurrentTime() || 0, [playerRef]);

  const requestPlayerState = useCallback(() => {
    if (socket) {
      socket.emit('REQUEST_PLAYER_STATE');
    }
  }, [socket]);

  const handleOnReady = useCallback(() => {
    if (!isReady) {
      setIsReady(true);
      setIsPlaying(true);
      setVolume(Number(localStorage.getItem(LocalStorageKeys.PlayerVolume)) || 0.5);
      requestPlayerState();
    }
  }, [setIsReady, setIsPlaying, requestPlayerState, setVolume, isReady]);

  const handleOnEnd = useCallback(
    (targetVideoId?: string) => {
      resetPlayerState();
      handleRequestNextVideo(targetVideoId);
    },
    [handleRequestNextVideo, resetPlayerState]
  );

  const handleOnError = useCallback(() => {
    CustomToast.send(t('toast.videoError'), ToastTypes.VideoSkipped);
    resetPlayerState();
    handleRequestNextVideo();
  }, [t, handleRequestNextVideo, resetPlayerState]);

  const handleOnVideoSkip = useCallback(() => {
    resetPlayerState();
    handleSkipVideo();
  }, [handleSkipVideo, resetPlayerState]);

  const sendSeekTo = useCallback(
    (secondsPlayed: number) => {
      if (isAdmin && socket) {
        socket.emit('SEEK_TO', secondsPlayed);
      }
    },
    [isAdmin, socket]
  );

  const handleRecievedPlayerState = useCallback(
    (recievedPlayerState: EssentialPlayerState) => {
      const { isPlaying, playedSeconds } = recievedPlayerState;
      setIsPlaying(isPlaying);
      setPlayedSeconds(playedSeconds);
      seekTo(playedSeconds);
    },
    [setIsPlaying, setPlayedSeconds, seekTo]
  );

  return {
    seekTo,
    getDuration,
    getPlayedSeconds,
    handleOnReady,
    handleOnEnd,
    handleOnError,
    requestPlayerState,
    handleOnVideoSkip,
    sendSeekTo,
    handleRecievedPlayerState,
  };
};
