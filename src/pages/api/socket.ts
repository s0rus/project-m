import { NextApiRequest } from 'next';
import { ServerOptions } from 'socket.io';
import { NextApiResponseServerIO } from '../../types';
import videoHandler from '@/server/sockets/videoHandler';
import { SocketProvider } from '@/server/sockets';
import messageHandler from '@/server/sockets/messageHandler';

export default function SocketHandler(req: NextApiRequest, res: NextApiResponseServerIO) {
  if (res.socket.server.io) {
    console.log('Already set up');
    res.end();
    return;
  }

  const io = SocketProvider.ServerIO(res.socket.server as Partial<ServerOptions>);
  res.socket.server.io = io;

  const onConnection = (socket: SocketProvider.ServerIO) => {
    messageHandler(socket);
    videoHandler(socket);
  };

  io.on('connection', onConnection);

  console.log('Setting up socket');
  res.end();
}
