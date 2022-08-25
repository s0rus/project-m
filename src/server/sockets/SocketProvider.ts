import { Server, ServerOptions } from 'socket.io';
import { Socket as ClientSocket } from 'socket.io-client';
import { Socket as ServerSocket } from 'socket.io';

export interface ServerToClientEvents {
  newChangedMessage: (msg: string) => void;
  receiveVideoStart: () => void;
}

export interface ClientToServerEvents {
  changedMessage: (msg: string) => void;
  videoStart: () => void;
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
