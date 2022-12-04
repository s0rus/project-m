/* eslint no-console: "off" */
import type { ServerOptions } from 'socket.io';
import type { Server } from 'socket.io';
import { SocketProvider } from '../sockets';
import type { UserData } from '../sockets/SocketProvider';

const initialUserData = {
  isAdmin: undefined,
  userId: undefined,
  username: undefined,
};

export class VideoService {
  readonly server: Server<
    SocketProvider.ClientToServerEvents,
    SocketProvider.ServerToClientEvents,
    SocketProvider.InterServerEvents,
    SocketProvider.SocketData
  >;

  private USERS: UserData[] = [];
  private ADMINS: UserData[] = [];
  private LEADER: UserData | null | undefined = null;

  constructor(http: Partial<ServerOptions>) {
    this.server = SocketProvider.ServerIO(http);

    this.server.on('connect', (socket) => {
      socket.on('JOIN_USER', this.joinUser.bind(this, socket));
      socket.on('UPDATE_USER', this.updateUser.bind(this, socket));

      socket.on('disconnect', this.disconnectUser.bind(this, socket));
    });
  }

  emitNewLeader = (socket: SocketProvider.ServerIO) => {
    socket.emit('RECEIVE_NEW_LEADER', this.LEADER as UserData);
  };

  broadcastNewLeader = (socket: SocketProvider.ServerIO) => {
    socket.broadcast.emit('RECEIVE_NEW_LEADER', this.LEADER as UserData);
  };

  joinUser = (socket: SocketProvider.ServerIO, userData: UserData) => {
    const { socketId, isAdmin, userId, username } = userData;

    if (socketId && userId && username) {
      // ADMIN USER OR REGULAR USER WITH AUTH
      isAdmin ? this.ADMINS.push(userData) : this.USERS.push(userData);
    } else {
      // REGULAR USER WITHOUT AUTH
      this.USERS.push({
        socketId: socket.id,
        ...initialUserData,
      });
    }

    if (!this.LEADER) {
      this.LEADER = userData;
      this.broadcastNewLeader(socket);
    }

    console.log('-----------ON_JOIN--------');
    console.log('USER JOINED: ', userData);
    console.log('LEADER: ', this.LEADER);
    console.log('USERS ARRAY:', this.USERS);
    console.log('ADMINS ARRAY:', this.ADMINS);
    console.log('--------------------------');
    this.emitNewLeader(socket);
  };

  updateUser = (socket: SocketProvider.ServerIO, userData: UserData) => {
    const { socketId, isAdmin, userId, username } = userData;

    if (socketId && userId && username) {
      //USER LOGS IN
      const UNDEFINED_USER_INDEX = this.USERS.findIndex((user) => user.socketId === socket.id);

      if (isAdmin) {
        //LOGGED IN USER IS ADMIN
        this.USERS.splice(UNDEFINED_USER_INDEX, 1);
        this.ADMINS.push(userData);
        if (!this.LEADER || !this.LEADER.isAdmin) {
          this.LEADER = userData;
          this.broadcastNewLeader(socket);
        }
      } else {
        //LOGGED IN USER IS REGULAR USER
        this.USERS[UNDEFINED_USER_INDEX] = userData;
      }
    } else {
      //USER LOGS OUT
      const WAS_USER_ADMIN = this.ADMINS.find((admin) => admin.socketId === socket.id);

      if (WAS_USER_ADMIN && WAS_USER_ADMIN.isAdmin) {
        //LOGGED OUT USER WAS ADMIN
        const ADMIN_USER_INDEX = this.ADMINS.findIndex((admin) => admin.socketId === socket.id);
        const WAS_USER_LEADER = WAS_USER_ADMIN?.socketId === this.LEADER?.socketId;

        this.ADMINS.splice(ADMIN_USER_INDEX, 1);
        this.USERS.push({
          socketId: socket.id,
          ...initialUserData,
        });

        if (WAS_USER_LEADER) {
          if (this.ADMINS.length) {
            this.LEADER = this.ADMINS[Math.floor(Math.random() * this.ADMINS.length)];
          } else if (this.USERS.length) {
            this.LEADER = this.USERS[Math.floor(Math.random() * this.USERS.length)];
          } else {
            this.LEADER = null;
          }
          this.broadcastNewLeader(socket);
        }
      } else {
        //LOGGED OUT USER WAS REGULAR USER
        const REGULAR_USER_INDEX = this.USERS.findIndex((user) => user.socketId === socket.id);
        this.USERS[REGULAR_USER_INDEX] = {
          socketId: socket.id,
          ...initialUserData,
        };
      }
    }

    console.log('------ON_UPDATE-------');
    console.log('USERS ARRAY:', this.USERS);
    console.log('ADMINS ARRAY:', this.ADMINS);
    console.log('CURRENT LEADER', this.LEADER);
    console.log('--------------------------');
    this.emitNewLeader(socket);
  };

  disconnectUser = (socket: SocketProvider.ServerIO) => {
    const PRESENT_USER = [...this.USERS, ...this.ADMINS].find((user) => user.socketId === socket.id);
    const IS_PRESENT_USER_LEADER = PRESENT_USER?.socketId === this.LEADER?.socketId;

    if (PRESENT_USER) {
      if (PRESENT_USER.isAdmin) {
        this.ADMINS = this.ADMINS.filter(
          (admin) => admin.socketId != PRESENT_USER.socketId || admin.username !== PRESENT_USER.username
        );
      } else {
        this.USERS = this.USERS.filter(
          (user) => user.socketId !== PRESENT_USER?.socketId || user.username !== PRESENT_USER.username
        );
      }

      if (IS_PRESENT_USER_LEADER) {
        if (this.ADMINS.length) {
          this.LEADER = this.ADMINS[Math.floor(Math.random() * this.ADMINS.length)];
        } else if (this.USERS.length) {
          this.LEADER = this.USERS[Math.floor(Math.random() * this.USERS.length)];
        } else {
          this.LEADER = null;
        }
        this.broadcastNewLeader(socket);
      }

      console.log('------ON_DISCONNECT-------');
      console.log('USER THAT DISCONNECTED: ', PRESENT_USER);
      console.log('WAS THIS USER LEADER?', IS_PRESENT_USER_LEADER);
      console.log('USERS ARRAY:', this.USERS);
      console.log('ADMINS ARRAY:', this.ADMINS);
      console.log('CURRENT LEADER', this.LEADER);
      console.log('--------------------------');
    }
  };
}

export default VideoService;
