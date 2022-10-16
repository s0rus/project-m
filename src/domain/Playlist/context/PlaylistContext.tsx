import { FC, PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { InitialContextProps, PlaylistWithUsers, initialContextProps } from '../model/Playlist.model';

import { CustomToast } from '@/utils/sendToast';
import { ToastTypes } from '@/utils/ToastTypes';
import { queryParams } from '../utils/queryParams';
import { trpc } from '@/utils/trpc';
import { useAuthContext } from '@/contexts/AuthContext';
import { useSocketContext } from '@/contexts/SocketContext';
import { useTranslation } from 'react-i18next';

const PlaylistContext = createContext<InitialContextProps>(initialContextProps);

export const usePlaylistContext = () => useContext<InitialContextProps>(PlaylistContext);

export const PlaylistContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();
  const { socket, leader } = useSocketContext();
  const { isAdmin, currentUser } = useAuthContext();
  const [currentVideo, setCurrentVideo] = useState<PlaylistWithUsers | undefined>(undefined);
  const [playlistLocked, setPlaylistLocked] = useState<boolean>(true);
  const [playlist, setPlaylist] = useState<PlaylistWithUsers[] | []>([]);
  const {
    data: playlistData,
    isSuccess,
    isLoading: isPlaylistLoading,
  } = trpc.useQuery(['playlist.get-all'], queryParams);
  const { data: playlistState, isSuccess: isPlaylistStateSuccess } = trpc.useQuery(
    ['playlist.get-playlist-state'],
    queryParams
  );
  const { mutateAsync } = trpc.useMutation('playlist.delete-one');
  const { mutateAsync: mutatePlaylistState } = trpc.useMutation('protected-playlist.set-playlist-state');

  const properPlaylist = useMemo(
    () => playlist.filter((video) => video.videoId !== currentVideo?.videoId),
    [currentVideo, playlist]
  );

  const timeSum = useMemo(
    () =>
      (playlist as PlaylistWithUsers[]).reduce<number>(
        (acc: number, curr: PlaylistWithUsers) => acc + curr.videoDuration,
        0
      ),
    [playlist]
  );

  const cachedPlaylistData = useMemo(() => {
    if (isSuccess) {
      return playlistData;
    }
    return undefined;
  }, [playlistData, isSuccess]);

  const cachedPlaylistState = useMemo(() => {
    if (isPlaylistStateSuccess) {
      return playlistState;
    }
    return null;
  }, [playlistState, isPlaylistStateSuccess]);

  const addVideo = useCallback(
    (newVideo: PlaylistWithUsers) => {
      if (!currentVideo) setCurrentVideo(newVideo);
      setPlaylist((prevPlaylist) => [...prevPlaylist, newVideo]);
    },
    [currentVideo]
  );

  const requestNextVideo = useCallback(async () => {
    try {
      if (currentVideo && leader?.userId === currentUser.id) {
        await mutateAsync({ videoId: currentVideo.videoId });
      }

      const newPlaylist = [...playlist];
      const filteredPlaylist = newPlaylist.filter((video) => video.videoId !== currentVideo?.videoId);

      setCurrentVideo(filteredPlaylist[0]);
      setPlaylist(filteredPlaylist);
    } catch {
      CustomToast.send(t('requestVideoError'), ToastTypes.Error);
    }
  }, [currentVideo, playlist, mutateAsync, leader, t, currentUser.id]);

  const handleSkipVideo = useCallback(
    async (targetVideoId?: string) => {
      try {
        if (currentVideo && isAdmin) {
          const newPlaylist = [...playlist];
          if (targetVideoId) {
            await mutateAsync({ videoId: targetVideoId });
            const filteredPlaylist = newPlaylist.filter((video) => video.videoId !== targetVideoId);
            setPlaylist(filteredPlaylist);
          } else {
            await mutateAsync({ videoId: currentVideo.videoId });

            const filteredPlaylist = newPlaylist.filter((video) => video.videoId !== currentVideo?.videoId);

            setCurrentVideo(filteredPlaylist[0]);
            setPlaylist(filteredPlaylist);

            socket.emit('SKIP_VIDEO');
            socket.emit('SEND_TOAST', t('toast.videoSkipped', { username: currentUser.name }), ToastTypes.VideoSkipped);
          }
        }
      } catch {
        CustomToast.send(t('requestVideoError'), ToastTypes.Error);
      }
    },
    [currentVideo, isAdmin, mutateAsync, t, socket, currentUser.name, playlist]
  );

  const handleDeleteVideo = useCallback(
    (targetVideoId: string) => {
      const newPlaylist = [...playlist];
      const filteredPlaylist = newPlaylist.filter((video) => video.videoId !== targetVideoId);
      setPlaylist(filteredPlaylist);
    },
    [playlist]
  );

  const togglePlaylistLocked = useCallback(async () => {
    try {
      if (isAdmin && socket) {
        await mutatePlaylistState({ newPlaylistState: !playlistLocked });
        socket.emit('TOGGLE_PLAYLIST');
        socket.emit(
          'SEND_TOAST',
          t(playlistLocked ? 'toast.playlistUnlocked' : 'toast.playlistLocked', { username: currentUser.name }),
          playlistLocked ? ToastTypes.PlaylistUnlocked : ToastTypes.PlaylistLocked
        );
        setPlaylistLocked((prevLocked) => !prevLocked);
      }
    } catch {
      CustomToast.send(t('togglePlaylistError'), ToastTypes.Error);
    }
  }, [currentUser.name, isAdmin, mutatePlaylistState, t, playlistLocked, socket]);

  useEffect(() => {
    if (currentVideo) return;
    setCurrentVideo(playlist[0]);
  }, [playlist, currentVideo]);

  useEffect(() => {
    setPlaylist(cachedPlaylistData || []);
    setCurrentVideo(cachedPlaylistData?.[0]);
    cachedPlaylistState && setPlaylistLocked(cachedPlaylistState.playlistLocked);
  }, [cachedPlaylistData, cachedPlaylistState]);

  useEffect(() => {
    if (!socket) return;

    socket.on('RECEIVE_TOGGLE_PLAYLIST', () => setPlaylistLocked((prevLocked) => !prevLocked));
    socket.on('RECEIVE_NEW_VIDEO', (newVideo) => setPlaylist((prevPlaylist) => [...prevPlaylist, newVideo]));
    socket.on('RECEIVE_DELETE_VIDEO', (videoId) => handleDeleteVideo(videoId));

    return () => {
      socket.off('RECEIVE_TOGGLE_PLAYING');
      socket.off('RECEIVE_NEW_VIDEO');
      socket.off('RECEIVE_DELETE_VIDEO');
    };
  }, [socket, handleDeleteVideo]);

  const value = useMemo(
    () => ({
      currentVideo,
      playlist,
      requestNextVideo,
      handleSkipVideo,
      addVideo,
      playlistLocked,
      togglePlaylistLocked,
      isPlaylistLoading,
      properPlaylist,
      timeSum,
    }),
    [
      currentVideo,
      playlist,
      requestNextVideo,
      handleSkipVideo,
      addVideo,
      playlistLocked,
      togglePlaylistLocked,
      isPlaylistLoading,
      properPlaylist,
      timeSum,
    ]
  );

  return <PlaylistContext.Provider value={value}>{children}</PlaylistContext.Provider>;
};
