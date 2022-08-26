import { Server, ServerOptions, Socket as ServerSocket } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';

export interface ServerToClientEvents {
  RECEIVE_PLAY_VIDEO: () => void;
  RECEIVE_PAUSE_VIDEO: () => void;
}

export interface ClientToServerEvents {
  PLAY_VIDEO: () => void;
  PAUSE_VIDEO: () => void;
}

export interface InterServerEvents {
  void: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}

export const ServerIO = (server: Partial<ServerOptions>) => {
  return new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server);
};

export type ClientIO = ClientSocket<ServerToClientEvents, ClientToServerEvents>;
export type ServerIO = ServerSocket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
