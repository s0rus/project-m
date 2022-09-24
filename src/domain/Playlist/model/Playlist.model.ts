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
  previousVideo: PlaylistWithUsers | undefined;
  playlist: PlaylistWithUsers[] | [];
  requestNextVideo: () => void;
  addVideo: (newVideo: PlaylistWithUsers) => void;
  playlistLocked: boolean;
  togglePlaylistLocked: () => void;
  isPlaylistLoading: boolean;
}

export const initialContextProps: InitialContextProps = {
  currentVideo: undefined,
  previousVideo: undefined,
  playlist: [],
  requestNextVideo: () => null,
  addVideo: () => null,
  playlistLocked: true,
  togglePlaylistLocked: () => null,
  isPlaylistLoading: true,
};