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

  useEffect(() => {
    if (!socket) return;

    socket.on('RECEIVE_NEW_VIDEO', (newVideo) => {
      if (!currentVideo) setCurrentVideo(newVideo);
      setPlaylist((prevPlaylist) => [...prevPlaylist, newVideo]);
    });
  }, [socket, currentVideo]);

  const cachedPlaylistData = useMemo(() => {
    if (isSuccess) {
      return playlistData;
    }
    return undefined;
  }, [playlistData, isSuccess]);

  const properPlaylist = useMemo(
    () => playlist.filter((video) => video.videoId !== currentVideo?.videoId),
    [currentVideo, playlist]
  );

  const cachedPlaylistState = useMemo(() => {
    if (isPlaylistStateSuccess) {
      return playlistState;
    }
    return null;
  }, [playlistState, isPlaylistStateSuccess]);

  useEffect(() => {
    setPlaylist(cachedPlaylistData || []);
    setCurrentVideo(cachedPlaylistData?.[0]);
    cachedPlaylistState && setPlaylistLocked(cachedPlaylistState.playlistLocked);
  }, [cachedPlaylistData, cachedPlaylistState]);

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
      await mutatePlaylistState({ newPlaylistState: !playlistLocked });
      setPlaylistLocked((prevLocked) => !prevLocked);
    } catch {
      toast.error('EHEHE');
    }
  };

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
