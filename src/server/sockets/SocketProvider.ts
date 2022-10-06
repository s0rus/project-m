import { Server, ServerOptions, Socket as ServerSocket } from 'socket.io';

import { Socket as ClientSocket } from 'socket.io-client';
import { PlaylistWithUsers } from '@/domain/Playlist/model/Playlist.model';

export interface UserData {
  username?: string | null;
  socketId: string;
  userId?: string;
  isAdmin?: boolean;
}

export interface CertainUserData {
  username: string;
  socketId: string;
  userId: string;
  isAdmin: boolean;
}

export interface EssentialPlayerState {
  playedSeconds: number;
  isPlaying: boolean;
}

export interface ServerToClientEvents {
  RECEIVE_SEEK_TO: (newPlayedSeconds: number) => void;
  RECEIVE_TOGGLE_PLAYING: (newPlayingState: boolean) => void;
  RECEIVE_NEW_VIDEO: (data: PlaylistWithUsers) => void;
  RECEIVE_SKIP_VIDEO: () => void;
  RECEIVE_TOGGLE_PLAYLIST: () => void;
  RECEIVE_PLAYER_STATE: (playerState: EssentialPlayerState) => void;
  RECEIVE_REQUEST_PLAYER_STATE: (socketId: string) => void;
  RECEIVE_NEW_LEADER: (userData: UserData) => void;
}

export interface ClientToServerEvents {
  SEEK_TO: (newPlayedSeconds: number) => void;
  TOGGLE_PLAYING: (newPlayingState: boolean) => void;
  ADD_NEW_VIDEO: (data: PlaylistWithUsers) => void;
  SKIP_VIDEO: () => void;
  TOGGLE_PLAYLIST: () => void;
  REQUEST_PLAYER_STATE: () => void;
  SEND_PLAYER_STATE: (playerState: EssentialPlayerState, socketId: string) => void;
  JOIN_USER: (userData: UserData) => void;
}

export interface InterServerEvents {
  void: () => void;
}

export interface SocketData {
  playerState: {
    playedSeconds?: number;
  };
  leader: CertainUserData | null;
}

export const ServerIO = (server: Partial<ServerOptions>) => {
  return new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server);
};

export type ClientIO = ClientSocket<ServerToClientEvents, ClientToServerEvents>;
export type ServerIO = ServerSocket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
