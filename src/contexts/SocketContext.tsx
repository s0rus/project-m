import { FC, PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { Routes } from '@/server/router/routes';
import { SocketProvider } from '@/server/sockets';
import { io } from 'socket.io-client';
import { useAuthContext } from './AuthContext';

interface SocketContextProps {
  socket: SocketProvider.ClientIO;
}

type InitialContextProps = SocketContextProps | Record<string, never>;

let socket: SocketProvider.ClientIO;
const SocketContext = createContext<InitialContextProps>({});

export const useSocketContext = () => useContext<InitialContextProps>(SocketContext);

export const SocketContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { currentUser, isAuthLoading } = useAuthContext();
  const [value, setValue] = useState<InitialContextProps>({});
  const socketValue = useMemo(() => value, [value]);

  const socketInitializer = useCallback(async () => {
    if (currentUser && !isAuthLoading) {
      await fetch(Routes.SOCKET).then(() => {
        socket = io();
        setValue({
          socket,
        });
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

      socket.on('connect_error', (err: Error) => {
        console.error(`CONNECT_ERROR: ${err}`);
      });
    }
  }, [currentUser, isAuthLoading]);

  useEffect(() => {
    socketInitializer();
  }, [socketInitializer]);

  return <SocketContext.Provider value={socketValue}>{children}</SocketContext.Provider>;
};
