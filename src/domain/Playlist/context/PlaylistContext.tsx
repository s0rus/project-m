import { FC, PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { InitialContextProps, PlaylistWithUsers, initialContextProps } from '../model/Playlist.model';

import { toast } from 'react-toastify';
import { trpc } from '@/utils/trpc';
import useAuth from '@/hooks/useAuth';
import { useSocketContext } from '@/contexts/SocketContext';

const PlaylistContext = createContext<InitialContextProps>(initialContextProps);

export const usePlaylistContext = () => useContext<InitialContextProps>(PlaylistContext);

export const PlaylistContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { socket } = useSocketContext();
  const { isAdmin } = useAuth();
  const [currentVideo, setCurrentVideo] = useState<PlaylistWithUsers | undefined>(undefined);
  const [playlistLocked, setPlaylistLocked] = useState<boolean>(true);
  const [playlist, setPlaylist] = useState<PlaylistWithUsers[] | []>([]);
  const {
    data: playlistData,
    isSuccess,
    isLoading: isPlaylistLoading,
  } = trpc.useQuery(['playlist.get-all'], {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  const { data: playlistState, isSuccess: isPlaylistStateSuccess } = trpc.useQuery(['playlist.get-playlist-state'], {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  const { mutateAsync } = trpc.useMutation('playlist.delete-one');
  const { mutateAsync: mutatePlaylistState } = trpc.useMutation('protected-playlist.set-playlist-state');

  const properPlaylist = useMemo(
    () => playlist.filter((video) => video.videoId !== currentVideo?.videoId),
    [currentVideo, playlist]
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
    } catch {}
  }, [currentVideo, playlist, mutateAsync, isAdmin]);

  const togglePlaylistLocked = async () => {
    try {
      if (isAdmin && socket) {
        await mutatePlaylistState({ newPlaylistState: !playlistLocked });
        socket.emit('TOGGLE_PLAYLIST');
        setPlaylistLocked((prevLocked) => !prevLocked);
      }
    } catch {
      toast.error('EHEHE');
    }
  };

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
  }, [socket]);

  const value = {
    currentVideo,
    playlist,
    requestNextVideo,
    addVideo,
    playlistLocked,
    togglePlaylistLocked,
    isPlaylistLoading,
    properPlaylist,
  };

  return <PlaylistContext.Provider value={value}>{children}</PlaylistContext.Provider>;
};
