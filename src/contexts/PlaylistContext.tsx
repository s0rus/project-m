import { FC, PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { InitialContextProps, initialContextProps } from '@/components/Dashboard/Playlist/Playlist.model';

import { Playlist } from '@prisma/client';
import { trpc } from '@/utils/trpc';

const PlaylistContext = createContext<InitialContextProps>(initialContextProps);

export const usePlaylistContext = () => useContext<InitialContextProps>(PlaylistContext);

export const PlaylistContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentVideo, setCurrentVideo] = useState<Playlist | undefined>(undefined);
  const [previousVideo, setPreviousVideo] = useState<Playlist | undefined>(undefined);
  const [playlist, setPlaylist] = useState<Playlist[] | []>([]);
  const {
    data: playlistData,
    isSuccess,
    refetch: updatePlaylist,
  } = trpc.useQuery(['playlist.get-all'], {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

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

  const requestNextVideo = useCallback(() => {
    //     if (currentVideo) {
    //   mutation.mutate({ videoId: currentVideo.videoId });
    // }
    const newPlaylist = [...playlist];
    const filteredArray = newPlaylist.filter((video) => video.videoId !== currentVideo?.videoId);

    setCurrentVideo((prevVideo) => {
      setPreviousVideo(prevVideo);
      return filteredArray[0];
    });
    setPlaylist(filteredArray);
  }, [currentVideo?.videoId, playlist]);

  const value = {
    currentVideo,
    previousVideo,
    playlist,
    requestNextVideo,
    updatePlaylist,
  };

  return <PlaylistContext.Provider value={value}>{children}</PlaylistContext.Provider>;
};
