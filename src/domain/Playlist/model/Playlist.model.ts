import type { Playlist } from '@prisma/client';

export type VideoProps = Playlist & {
  addedBy: AddedBy;
};

export interface AddedBy {
  image: string | null;
  name: string | null;
}

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
