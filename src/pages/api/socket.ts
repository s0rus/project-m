import { NextApiRequest } from 'next';
import { NextApiResponseServerIO } from '../../types';
import { ServerOptions } from 'socket.io';
import { SocketProvider } from '@/server/sockets';
import { UserData } from '@/server/sockets/SocketProvider';
import videoHandler from '@/server/sockets/videoHandler';

export default function SocketHandler(req: NextApiRequest, res: NextApiResponseServerIO) {
  if (res.socket.server.io) {
    res.end();
    return;
  }

  const io = SocketProvider.ServerIO(res.socket.server as Partial<ServerOptions>);
  res.socket.server.io = io;

  let USERS: UserData[] = [];
  let ADMINS: UserData[] = [];
  let LEADER: UserData | null | undefined = null;

  const onConnection = (socket: SocketProvider.ServerIO) => {
    videoHandler(socket);

    socket.on('REQUEST_PLAYER_STATE', () => {
      if (LEADER && LEADER.socketId) {
        socket.to(LEADER.socketId).emit('RECEIVE_REQUEST_PLAYER_STATE', socket.id);
      }
    });

    socket.on('SEND_PLAYER_STATE', (playerState, socketId) => {
      socket.to(socketId).emit('RECEIVE_PLAYER_STATE', playerState);
    });

    socket.on('JOIN_USER', (userData) => {
      const { socketId, isAdmin, userId, username } = userData;

      console.log(userData);

      if (socketId && userId && username) {
        if (isAdmin) {
          // ADMIN USER
          ADMINS.push(userData);

          if (!LEADER || !LEADER.isAdmin) {
            LEADER = userData;
          }
        } else {
          // REGULAR USER WITH AUTH
          USERS.push(userData);
        }
      } else {
        // REGULAR USER WITHOUT AUTH
        USERS.push({
          socketId: socket.id,
          isAdmin: undefined,
          userId: undefined,
          username: undefined,
        });

        console.log('LEADER: ', LEADER);
      }
    });

    socket.on('disconnect', () => {
      const PRESENT_USER = USERS.find((user) => user.socketId == socket.id);
      const IS_PRESENT_USER_LEADER = PRESENT_USER?.socketId === LEADER?.socketId;

      if (PRESENT_USER && PRESENT_USER.isAdmin) {
        ADMINS = ADMINS.filter((admin) => admin != PRESENT_USER);
      } else {
        USERS = USERS.filter((user) => user != PRESENT_USER);
      }

      if (IS_PRESENT_USER_LEADER) {
        LEADER = null;
        if (ADMINS.length) {
          LEADER = ADMINS[Math.floor(Math.random() * ADMINS.length)];
        } else if (USERS.length) {
          LEADER = USERS[Math.floor(Math.random() * USERS.length)];
        } else {
          LEADER = null;
        }
      }

      console.log('LEADER: ', LEADER);
    });
  };

  io.on('connection', onConnection);

  console.log('Setting up socket');
  res.end();
}
