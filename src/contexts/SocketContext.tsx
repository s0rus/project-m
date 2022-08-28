import { Routes } from '@/server/router/routes';
import { SocketProvider } from '@/server/sockets';
import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

interface SocketContextProps {
  socket: SocketProvider.ClientIO;
}

type InitialContextProps = SocketContextProps | Record<string, never>;

let socket: SocketProvider.ClientIO;
const SocketContext = createContext<InitialContextProps>({});

export const useSocketContext = () => useContext<InitialContextProps>(SocketContext);

export const SocketContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState<InitialContextProps>({});

  const socketInitializer = useCallback(async () => {
    await fetch(Routes.SOCKET).then(() => {
      socket = io();
      setValue({
        socket,
      });
    });

    socket.on('connect', () => {
      console.info('CONNECTED');
    });

    socket.on('connect_error', (err: Error) => {
      console.error(`CONNECT_ERROR: ${err}`);
    });
  }, []);

  useEffect(() => {
    socketInitializer();
  }, [socketInitializer]);

  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
};
