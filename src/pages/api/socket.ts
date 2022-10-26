import { NextApiRequest } from 'next';
import { NextApiResponseServerIO } from '../../types';
import { ServerOptions } from 'socket.io';
import { SocketProvider } from '@/server/sockets';
import { UserData } from '@/server/sockets/SocketProvider';
import toastHandler from '@/server/sockets/toastHandler';
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
  const initialUserData = {
    isAdmin: undefined,
    userId: undefined,
    username: undefined,
  };

  const onConnection = (socket: SocketProvider.ServerIO) => {
    videoHandler(socket);
    toastHandler(socket);

    socket.on('REQUEST_PLAYER_STATE', () => {
      if (LEADER && LEADER.socketId) {
        socket.to(LEADER.socketId).emit('RECEIVE_REQUEST_PLAYER_STATE', socket.id);
      }
    });

    socket.on('SEND_PLAYER_STATE', (playerState, socketId) => {
      socket.to(socketId).emit('RECEIVE_PLAYER_STATE', playerState);
    });

    socket.on('SET_LEADER', (userData: UserData) => {
      LEADER = userData;
      socket.emit('RECEIVE_NEW_LEADER', userData);
      socket.broadcast.emit('RECEIVE_NEW_LEADER', userData);

      console.log('------ON_NEW_LEADER-----');
      console.log('LEADER: ', LEADER);
      console.log('USERS ARRAY:', USERS);
      console.log('ADMINS ARRAY:', ADMINS);
      console.log('------------------------');
    });

    socket.on('JOIN_USER', (userData) => {
      const { socketId, isAdmin, userId, username } = userData;

      if (socketId && userId && username) {
        if (isAdmin) {
          // ADMIN USER
          ADMINS.push(userData);
        } else {
          // REGULAR USER WITH AUTH
          USERS.push(userData);
        }
      } else {
        // REGULAR USER WITHOUT AUTH
        USERS.push({
          socketId: socket.id,
          ...initialUserData,
        });
      }

      if (!LEADER) {
        LEADER = userData;
        socket.emit('RECEIVE_NEW_LEADER', LEADER as UserData);
        socket.broadcast.emit('RECEIVE_NEW_LEADER', LEADER as UserData);
      }

      console.log('-----------ON_JOIN--------');
      console.log('USER JOINED: ', userData);
      console.log('LEADER: ', LEADER);
      console.log('USERS ARRAY:', USERS);
      console.log('ADMINS ARRAY:', ADMINS);
      console.log('--------------------------');
      socket.emit('RECEIVE_NEW_LEADER', LEADER as UserData);
    });

    socket.on('UPDATE_USER', (userData) => {
      const { socketId, isAdmin, userId, username } = userData;

      if (socketId && userId && username) {
        //USER LOGS IN
        const UNDEFINED_USER_INDEX = USERS.findIndex((user) => user.socketId === socket.id);

        if (isAdmin) {
          //LOGGED IN USER IS ADMIN
          USERS.splice(UNDEFINED_USER_INDEX, 1);
          ADMINS.push(userData);
          if (!LEADER || !LEADER.isAdmin) {
            LEADER = userData;
            socket.broadcast.emit('RECEIVE_NEW_LEADER', LEADER as UserData);
          }
        } else {
          //LOGGED IN USER IS REGULAR USER
          USERS[UNDEFINED_USER_INDEX] = userData;
        }
      } else {
        //USER LOGS OUT
        const WAS_USER_ADMIN = ADMINS.find((admin) => admin.socketId === socket.id);

        if (WAS_USER_ADMIN && WAS_USER_ADMIN.isAdmin) {
          //LOGGED OUT USER WAS ADMIN
          const ADMIN_USER_INDEX = ADMINS.findIndex((admin) => admin.socketId === socket.id);
          const WAS_USER_LEADER = WAS_USER_ADMIN?.socketId === LEADER?.socketId;

          ADMINS.splice(ADMIN_USER_INDEX, 1);
          USERS.push({
            socketId: socket.id,
            ...initialUserData,
          });

          if (WAS_USER_LEADER) {
            if (ADMINS.length) {
              LEADER = ADMINS[Math.floor(Math.random() * ADMINS.length)];
            } else if (USERS.length) {
              LEADER = USERS[Math.floor(Math.random() * USERS.length)];
            } else {
              LEADER = null;
            }
            socket.broadcast.emit('RECEIVE_NEW_LEADER', LEADER as UserData);
          }
        } else {
          //LOGGED OUT USER WAS REGULAR USER
          const REGULAR_USER_INDEX = USERS.findIndex((user) => user.socketId === socket.id);
          USERS[REGULAR_USER_INDEX] = {
            socketId: socket.id,
            ...initialUserData,
          };
        }
      }

      console.log('------ON_UPDATE-------');
      console.log('USERS ARRAY:', USERS);
      console.log('ADMINS ARRAY:', ADMINS);
      console.log('CURRENT LEADER', LEADER);
      console.log('--------------------------');
      socket.emit('RECEIVE_NEW_LEADER', LEADER as UserData);
    });

    socket.on('disconnect', () => {
      const PRESENT_USER = [...USERS, ...ADMINS].find((user) => user.socketId === socket.id);
      const IS_PRESENT_USER_LEADER = PRESENT_USER?.socketId === LEADER?.socketId;

      if (PRESENT_USER) {
        if (PRESENT_USER.isAdmin) {
          ADMINS = ADMINS.filter(
            (admin) => admin.socketId != PRESENT_USER.socketId || admin.username !== PRESENT_USER.username
          );
        } else {
          USERS = USERS.filter(
            (user) => user.socketId !== PRESENT_USER?.socketId || user.username !== PRESENT_USER.username
          );
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

        console.log('------ON_DISCONNECT-------');
        console.log('USER THAT DISCONNECTED: ', PRESENT_USER);
        console.log('WAS THIS USER LEADER?', IS_PRESENT_USER_LEADER);
        console.log('USERS ARRAY:', USERS);
        console.log('ADMINS ARRAY:', ADMINS);
        console.log('CURRENT LEADER', LEADER);
        console.log('--------------------------');
      }
    });
  };

  io.on('connection', onConnection);

  console.log('Setting up socket');
  res.end();
}
