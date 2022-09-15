import { FC, PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  InitialContextProps,
  PlaylistWithUsers,
  initialContextProps,
} from '@/components/Dashboard/Playlist/Playlist.model';

import { flushSync } from 'react-dom';
import { trpc } from '@/utils/trpc';

const PlaylistContext = createContext<InitialContextProps>(initialContextProps);

export const usePlaylistContext = () => useContext<InitialContextProps>(PlaylistContext);

export const PlaylistContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentVideo, setCurrentVideo] = useState<PlaylistWithUsers | undefined>(undefined);
  const [previousVideo, setPreviousVideo] = useState<PlaylistWithUsers | undefined>(undefined);
  const [playlist, setPlaylist] = useState<PlaylistWithUsers[] | []>([]);
  const { data: playlistData, isSuccess } = trpc.useQuery(['playlist.get-all'], {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  const { mutateAsync } = trpc.useMutation('playlist.delete-one');

  const cachedPlaylistData = useMemo(() => {
    if (isSuccess) {
      return playlistData;
    }
    return undefined;
  }, [playlistData, isSuccess]);

  useEffect(() => {
    setPlaylist(cachedPlaylistData || []);
    setCurrentVideo(cachedPlaylistData?.[0]);
  }, [cachedPlaylistData]);

  const addVideo = useCallback(
    (newVideo: PlaylistWithUsers) => {
      if (!currentVideo) setCurrentVideo(newVideo);
      setPlaylist((prevPlaylist) => [...prevPlaylist, newVideo]);
    },
    [currentVideo]
  );

  const requestNextVideo = useCallback(async () => {
    if (currentVideo) {
      const prevVideo = await mutateAsync({ videoId: currentVideo.videoId });
    }

    const newPlaylist = [...playlist];
    const filteredPlaylist = newPlaylist.filter((video) => video.videoId !== currentVideo?.videoId);

    flushSync(() => {
      setCurrentVideo(undefined);
    });
    setCurrentVideo(filteredPlaylist[0]);
    setPlaylist(filteredPlaylist);
  }, [currentVideo, playlist, mutateAsync]);

  const value = {
    currentVideo,
    previousVideo,
    playlist,
    requestNextVideo,
    addVideo,
  };

  return <PlaylistContext.Provider value={value}>{children}</PlaylistContext.Provider>;
};
