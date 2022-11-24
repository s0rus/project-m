import type { Playlist } from '@prisma/client';

export type VideoProps = Playlist & {
  addedBy: AddedBy;
};

export interface AddedBy {
  image: string | null;
  name: string | null;
}

export interface InitialContextProps {
  currentVideo: VideoProps | undefined;
  playlist: VideoProps[] | [];
  properPlaylist: VideoProps[] | [];
  requestNextVideo: (targetVideoId?: string) => void;
  handleSkipVideo: (targetVideoId?: string) => Promise<void>;
  handlePlayVideoNow: (targetVideoId: string) => Promise<void>;
  addVideo: (newVideo: VideoProps) => void;
  playlistLocked: boolean;
  togglePlaylistLocked: () => void;
  isPlaylistLoading: boolean;
  timeSum: number;
}

export const initialContextProps: InitialContextProps = {
  currentVideo: undefined,
  playlist: [],
  properPlaylist: [],
  requestNextVideo: () => null,
  handleSkipVideo: () => Promise.resolve(),
  handlePlayVideoNow: () => Promise.resolve(),
  addVideo: () => null,
  playlistLocked: true,
  togglePlaylistLocked: () => null,
  isPlaylistLoading: true,
  timeSum: 0,
};

export interface PlaylistStore {
  currentVideo: VideoProps | undefined;
  setCurrentVideo: (currentVideo: VideoProps | undefined) => void;
  playlist: VideoProps[] | [];
  setPlaylist: (playlist: VideoProps[] | []) => void;
  queue: () => VideoProps[] | [];
  deleteVideoFromPlaylist: (targetVideoId: string) => Promise<VideoProps[] | []>;
  requestNextVideo: (targetVideoId?: string) => Promise<void>;
  addVideoToPlaylist: (newVideo: VideoProps) => Promise<void>;
  isPlaylistLocked: boolean;
  setIsPlaylistLocked: (playlistLocked: boolean) => void;
  playlistTimeSum: () => number;
}
