import { Playlist } from '@prisma/client';

export type PlaylistWithUsers = Playlist & {
  addedBy: AddedBy;
};

export interface AddedBy {
  image: string | null;
  name: string | null;
}

export interface InitialContextProps {
  currentVideo: PlaylistWithUsers | undefined;
  playlist: PlaylistWithUsers[] | [];
  properPlaylist: PlaylistWithUsers[] | [];
  requestNextVideo: () => void;
  addVideo: (newVideo: PlaylistWithUsers) => void;
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
  addVideo: () => null,
  playlistLocked: true,
  togglePlaylistLocked: () => null,
  isPlaylistLoading: true,
  timeSum: 0,
};
