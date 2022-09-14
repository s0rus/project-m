import { Playlist } from '@prisma/client';

export interface InitialContextProps {
  currentVideo: Playlist | undefined;
  previousVideo: Playlist | undefined;
  playlist: Playlist[] | [];
  requestNextVideo: () => void;
  updatePlaylist: () => void;
}

export const initialContextProps: InitialContextProps = {
  currentVideo: undefined,
  previousVideo: undefined,
  playlist: [],
  requestNextVideo: () => null,
  updatePlaylist: () => null,
};
