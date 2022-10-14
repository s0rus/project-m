import React, { FC, PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { InitialContextProps, PlaylistWithUsers, initialContextProps } from '../model/Playlist.model';

import { queryParams } from '../utils/queryParams';
import { toast } from 'react-toastify';
import { trpc } from '@/utils/trpc';
import { useAuthContext } from '@/contexts/AuthContext';
import { useSocketContext } from '@/contexts/SocketContext';
import { useTranslation } from 'react-i18next';
import { ToastTypes } from '@/utils/ToastTypes';
import { CustomToast } from '@/utils/sendToast';
const PlaylistContext = createContext<InitialContextProps>(initialContextProps);

export const usePlaylistContext = () => useContext<InitialContextProps>(PlaylistContext);

export const PlaylistContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();
  const { socket } = useSocketContext();
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
      if (currentVideo && isAdmin) {
        await mutateAsync({ videoId: currentVideo.videoId });
      }

      const newPlaylist = [...playlist];
      const filteredPlaylist = newPlaylist.filter((video) => video.videoId !== currentVideo?.videoId);

      setCurrentVideo(filteredPlaylist[0]);
      setPlaylist(filteredPlaylist);
    } catch {
      toast.error(t('requestVideoError'));
    }
  }, [currentVideo, playlist, mutateAsync, isAdmin, t]);

  const togglePlaylistLocked = useCallback(async () => {
    try {
      if (isAdmin && socket) {
        await mutatePlaylistState({ newPlaylistState: !playlistLocked });
        socket.emit('TOGGLE_PLAYLIST');
      CustomToast.send(
          t(playlistLocked ? 'toast.playlistUnlocked' : 'toast.playlistLocked', { username: currentUser.name }),
          playlistLocked ? ToastTypes.PlaylistUnlocked : ToastTypes.PlaylistLocked
        );
        setPlaylistLocked((prevLocked) => !prevLocked);
      }
    } catch {
      toast.error(t('togglePlaylistError'));
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

    return () => {
      socket.off('RECEIVE_TOGGLE_PLAYING');
      socket.off('RECEIVE_NEW_VIDEO');
    };
  }, [socket]);

  const value = useMemo(
    () => ({
      currentVideo,
      playlist,
      requestNextVideo,
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
