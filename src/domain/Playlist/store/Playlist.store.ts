import type { NonEmptyArray } from '@/types/helpers';
import create from 'zustand';
import type { PlaylistStore, VideoProps } from '../model/Playlist.model';

export const usePlaylistStore = create<PlaylistStore>((set, get) => ({
  currentVideo: undefined,
  setCurrentVideo: (currentVideo) => set({ currentVideo }),
  playlist: [],
  setPlaylist: (playlist) => set({ playlist }),
  queue: () => {
    const { playlist, currentVideo } = get();
    return playlist.filter((video) => video.videoId !== currentVideo?.videoId);
  },
  deleteVideoFromPlaylist: async (targetVideoId) => {
    const { playlist } = get();
    const newPlaylist = playlist.filter((video) => video.videoId !== targetVideoId);
    set({ playlist: newPlaylist });
    return Promise.resolve(newPlaylist);
  },
  addVideoToPlaylist: async (newVideo) => {
    const { playlist, currentVideo } = get();
    if (!currentVideo) {
      set({ currentVideo: newVideo });
    }
    const newPlaylist = [...playlist, newVideo];
    await Promise.resolve(set({ playlist: newPlaylist }));
  },
  requestNextVideo: async (targetVideoId) => {
    const { playlist, currentVideo } = get();

    const newPlaylist = [...playlist].filter((video) => video.videoId !== currentVideo?.videoId);
    if (targetVideoId) {
      const targetVideo = newPlaylist.find((video) => video.videoId === targetVideoId);
      set({ currentVideo: targetVideo });
    } else {
      set({ currentVideo: newPlaylist[0] });
    }
    await Promise.resolve(set({ playlist: newPlaylist }));
  },
  handleSkipVideo: () => Promise.resolve(),
  handlePlayVideoNow: () => Promise.resolve(),
  isPlaylistLocked: true,
  setIsPlaylistLocked: (isPlaylistLocked) => set({ isPlaylistLocked }),
  playlistTimeSum: () => {
    const { playlist } = get();
    if (!playlist.length) {
      return 0;
    }
    return (playlist as NonEmptyArray<VideoProps>).reduce((acc, video) => acc + video.videoDuration, 0);
  },
}));
