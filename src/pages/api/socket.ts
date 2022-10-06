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

      if (socketId && userId && username) {
        if (isAdmin) {
          // ADMIN USER
          ADMINS.push(userData);

          if (!LEADER || !LEADER.isAdmin) {
            LEADER = userData;
            socket.broadcast.emit('RECEIVE_NEW_LEADER', LEADER as UserData);
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
      }

      console.log('-----------ON_JOIN----------');
      console.log('USER JOINED: ', userData);
      console.log('LEADER: ', LEADER);
      console.log('USERS ARRAY:', USERS);
      console.log('ADMINS ARRAY:', ADMINS);
      console.log('--------------------------');
    });

    socket.on('disconnect', () => {
      const PRESENT_USER = [...USERS, ...ADMINS].find((user) => user.socketId == socket.id);
      const IS_PRESENT_USER_LEADER = PRESENT_USER?.socketId === LEADER?.socketId;

      if (PRESENT_USER && PRESENT_USER.isAdmin) {
        ADMINS = ADMINS.filter((admin) => admin.socketId != PRESENT_USER.socketId);
      } else {
        USERS = USERS.filter((user) => user.socketId != PRESENT_USER?.socketId);
      }

      if (IS_PRESENT_USER_LEADER) {
        if (ADMINS.length) {
          LEADER = ADMINS[Math.floor(Math.random() * ADMINS.length)];
        } else if (USERS.length) {
          LEADER = USERS[Math.floor(Math.random() * USERS.length)];
        } else {
          LEADER = null;
        }
        socket.broadcast.emit('RECEIVE_NEW_LEADER', LEADER as UserData);
      }

      console.log('--------ON_DISCONNECT-----');
      console.log('USER THAT DISSCONNECTED: ', PRESENT_USER);
      console.log('WAS THIS USER LEADER?', IS_PRESENT_USER_LEADER);
      console.log('USERS ARRAY:', USERS);
      console.log('ADMINS ARRAY:', ADMINS);
      console.log('CURRENT LEADER', LEADER);
      console.log('--------------------------');
    });
  };

  io.on('connection', onConnection);

  console.log('Setting up socket');
  res.end();
}
