import { useAuthStore } from '@/domain/App/store/Auth.store';
import { useSocketStore } from '@/domain/App/store/Socket.store';
import { useVideoPlayerStore } from '@/domain/VideoPlayer/store/VideoPlayer.store';
import { CustomToast, ToastTypes } from '@/utils/CustomToast';
import { trpc } from '@/utils/trpc';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { usePlaylistStore } from '../store/Playlist.store';

export const usePlaylistChange = () => {
  const { t } = useTranslation();

  const { socket } = useSocketStore();
  const isAdmin = useAuthStore((state) => state.isAdmin());
  const currentUser = useAuthStore((state) => state.currentUser);

  const { mutateAsync: deleteVideo } = trpc.useMutation('playlist.delete-one');
  const { mutateAsync: changePlaylistState, isLoading: isPlaylistStateChanging } = trpc.useMutation(
    'protected-playlist.set-playlist-state'
  );
  const { mutateAsync: skipToVideo } = trpc.useMutation('protected-playlist.skip-to-video');

  const resetPlayerState = useVideoPlayerStore((state) => state.resetPlayerState);
  const playlist = usePlaylistStore((state) => state.playlist);
  const setPlaylist = usePlaylistStore((state) => state.setPlaylist);
  const isCurrentUserLeader = useSocketStore((state) => state.isCurrentUserLeader());
  const currentVideo = usePlaylistStore((state) => state.currentVideo);
  const setCurrentVideo = usePlaylistStore((state) => state.setCurrentVideo);
  const requestNextVideo = usePlaylistStore((state) => state.requestNextVideo);
  const deleteVideoFromPlaylist = usePlaylistStore((state) => state.deleteVideoFromPlaylist);
  const isPlaylistLocked = usePlaylistStore((state) => state.isPlaylistLocked);
  const setIsPlaylistLocked = usePlaylistStore((state) => state.setIsPlaylistLocked);

  const handleRequestNextVideo = useCallback(
    async (targetVideoId?: string) => {
      try {
        if (currentVideo && isCurrentUserLeader && !targetVideoId) {
          await deleteVideo({ videoId: currentVideo.videoId });
        }
        await requestNextVideo(targetVideoId);
      } catch (error) {
        CustomToast.send(t('requestVideoError'), ToastTypes.Error);
      }
    },
    [currentVideo, deleteVideo, isCurrentUserLeader, requestNextVideo, t]
  );

  const handleSkipVideo = useCallback(
    async (targetVideoId?: string) => {
      try {
        if (currentVideo && isAdmin && socket) {
          if (targetVideoId) {
            await deleteVideo({ videoId: targetVideoId });
            await deleteVideoFromPlaylist(targetVideoId);
            socket.emit('DELETE_VIDEO', targetVideoId);
          } else {
            await deleteVideo({ videoId: currentVideo.videoId });
            const newPlaylist = await deleteVideoFromPlaylist(currentVideo.videoId);
            setCurrentVideo(newPlaylist[0]);
            socket.emit('SKIP_VIDEO');
            socket.emit('SEND_TOAST', t('toast.videoSkipped', { username: currentUser.name }), ToastTypes.VideoSkipped);
          }
        } else {
          throw new Error();
        }
      } catch {
        CustomToast.send(t('requestVideoError'), ToastTypes.Error);
      }
    },
    [currentVideo, deleteVideo, deleteVideoFromPlaylist, isAdmin, setCurrentVideo, socket, t, currentUser.name]
  );

  const handlePlayVideoNow = useCallback(
    async (targetVideoId: string) => {
      try {
        const newPlaylist = [...playlist];
        const filteredPlaylist = newPlaylist.filter(
          (video) => video.videoId !== currentVideo?.videoId && video.videoId !== targetVideoId
        );
        const targetVideo = newPlaylist.find((video) => video.videoId === targetVideoId);
        if (targetVideo && currentVideo && isAdmin && socket) {
          const targetPlaylist = [targetVideo, ...filteredPlaylist];
          await deleteVideo({ videoId: currentVideo.videoId });
          await skipToVideo({ videoId: targetVideoId });

          resetPlayerState();
          setCurrentVideo(targetPlaylist[0]);
          setPlaylist(targetPlaylist);
          socket.emit('SKIP_VIDEO', targetVideoId);
        } else {
          throw new Error();
        }
      } catch (error) {
        CustomToast.send(t('requestVideoError'), ToastTypes.Error);
      }
    },
    [
      currentVideo,
      deleteVideo,
      isAdmin,
      playlist,
      resetPlayerState,
      setCurrentVideo,
      setPlaylist,
      skipToVideo,
      socket,
      t,
    ]
  );

  const handlePlaylistLockedChange = useCallback(async () => {
    try {
      if (isAdmin && socket) {
        await changePlaylistState({ newPlaylistState: !isPlaylistLocked });
        socket.emit('TOGGLE_PLAYLIST');
        socket.emit(
          'SEND_TOAST',
          t(isPlaylistLocked ? 'toast.playlistUnlocked' : 'toast.playlistLocked', { username: currentUser.name }),
          isPlaylistLocked ? ToastTypes.PlaylistUnlocked : ToastTypes.PlaylistLocked
        );
        setIsPlaylistLocked(!isPlaylistLocked);
      } else {
        throw new Error();
      }
    } catch {
      CustomToast.send(t('togglePlaylistError'), ToastTypes.Error);
    }
  }, [changePlaylistState, isAdmin, isPlaylistLocked, setIsPlaylistLocked, socket, t, currentUser.name]);

  return {
    handleRequestNextVideo,
    handleSkipVideo,
    handlePlaylistLockedChange,
    isPlaylistStateChanging,
    handlePlayVideoNow,
  };
};
