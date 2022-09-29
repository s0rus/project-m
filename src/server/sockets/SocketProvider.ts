import { Server, ServerOptions, Socket as ServerSocket } from 'socket.io';

import { Socket as ClientSocket } from 'socket.io-client';
import { PlaylistWithUsers } from '@/domain/Playlist/model/Playlist.model';

export interface PlayerState {
  playing: boolean;
  playedSeconds: number;
  loadedSeconds: number;
  duration: number;
}

export interface ServerToClientEvents {
  // RECEIVE_PLAY_VIDEO: (data: PlayerState | undefined) => void;
  // RECEIVE_PAUSE_VIDEO: (data: PlayerState | undefined) => void;
  // RECEIVE_PLAYER_STATE: (data: PlayerState | undefined) => void;
  // RECEIVE_PLAYER_STATE_REQUEST: () => void;

  RECEIVE_SEEK_TO: (newPlayedSeconds: number) => void;
  RECEIVE_TOGGLE_PLAYING: () => void;
  RECEIVE_NEW_VIDEO: (data: PlaylistWithUsers) => void;
}

export interface ClientToServerEvents {
  // PLAY_VIDEO: (data: PlayerState) => void;
  // PAUSE_VIDEO: (data: PlayerState) => void;

  SEEK_TO: (newPlayedSeconds: number) => void;
  TOGGLE_PLAYING: () => void;
  ADD_NEW_VIDEO: (data: PlaylistWithUsers) => void;
  REQUEST_PLAYER_STATE: (callback: (playerState: { playedSeconds?: number } | undefined) => void) => void;
}

export interface InterServerEvents {
  void: () => void;
}

export interface SocketData {
  playerState: {
    playedSeconds?: number;
  };
}

export const ServerIO = (server: Partial<ServerOptions>) => {
  return new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server);
};

export type ClientIO = ClientSocket<ServerToClientEvents, ClientToServerEvents>;
export type ServerIO = ServerSocket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
