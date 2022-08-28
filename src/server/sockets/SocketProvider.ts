import { Server, ServerOptions, Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';

export interface PlayerState {
  playing: boolean;
  playedSeconds: number;
  loadedSeconds: number;
  duration: number;
}
export interface ServerToClientEvents {
  RECEIVE_PLAY_VIDEO: (data: PlayerState | undefined) => void;
  RECEIVE_PAUSE_VIDEO: (data: PlayerState | undefined) => void;
  RECEIVE_PLAYER_STATE: (data: PlayerState | undefined) => void;
  RECEIVE_PLAYER_STATE_REQUEST: () => void;
}

export interface ClientToServerEvents {
  PLAY_VIDEO: (data: PlayerState) => void;
  PAUSE_VIDEO: (data: PlayerState) => void;
  REQUEST_PLAYER_STATE: () => void;
  SEND_PLAYER_STATE: (data: PlayerState) => void;
}

export interface InterServerEvents {
  void: () => void;
}

export interface SocketData {
  playerState: PlayerState | undefined;
}

export const ServerIO = (server: Partial<ServerOptions>) => {
  return new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server);
};

export type ClientIO = ClientSocket<ServerToClientEvents, ClientToServerEvents>;
export type ServerIO = ServerSocket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
