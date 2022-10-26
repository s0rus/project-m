import { FC, PropsWithChildren, createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

import { CustomToast } from '@/utils/sendToast';
import { Routes } from '@/server/router/routes';
import { SocketProvider } from '@/server/sockets';
import { UserData } from '@/server/sockets/SocketProvider';
import { io } from 'socket.io-client';
import { useAuthContext } from './AuthContext';

interface InitialContextProps {
  socket: SocketProvider.ClientIO | Record<string, never>;
  leader: UserData | null;
}

let socket: SocketProvider.ClientIO;
const SocketContext = createContext<InitialContextProps>({
  socket: {},
  leader: null,
});

export const useSocketContext = () => useContext<InitialContextProps>(SocketContext);

export const SocketContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { currentUser, isAuthLoading, authChange } = useAuthContext();
  const socketRef = useRef(socket);
  const [leader, setLeader] = useState<UserData | null>(null);

  const socketInitializer = useCallback(async () => {
    if (currentUser && !isAuthLoading) {
      await fetch(Routes.SOCKET).then(() => {
        socket = io();
        socketRef.current = socket;
      });

      socket.on('connect', () => {
        console.log('CONNECTED', socket.id);
        socket.emit('JOIN_USER', {
          socketId: socket.id,
          isAdmin: currentUser.isAdmin,
          userId: currentUser.id,
          username: currentUser.name,
        });
      });

      socket.on('RECEIVE_TOAST', (message, type) => CustomToast.send(message, type));
      socket.on('RECEIVE_NEW_LEADER', (userData) => {
        console.log('RECEIVE_NEW_LEADER', userData);
        setLeader(userData);
      });

      socket.on('connect_error', (err: Error) => {
        console.error(`CONNECT_ERROR: ${err}`);
      });
    }
  }, [currentUser, isAuthLoading]);

  useEffect(() => {
    if (!socket) return;

    if (currentUser && !authChange) {
      socket.emit('UPDATE_USER', {
        socketId: socket.id,
        isAdmin: currentUser.isAdmin,
        userId: currentUser.id,
        username: currentUser.name,
      });
    }
  }, [authChange, currentUser]);

  useEffect(() => {
    if (socket) return;

    socketInitializer();
  }, [socketInitializer]);

  return (
    <SocketContext.Provider
      value={{
        socket: socketRef.current,
        leader,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
