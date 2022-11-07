import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react';

import { CustomToast } from '@/utils/sendToast';
import { Routes } from '@/server/router/routes';
import { SocketProvider } from '@/server/sockets';
import { UserData } from '@/server/sockets/SocketProvider';
import { io } from 'socket.io-client';
import { useAuthContext } from './Auth.context';

interface InitialContextProps {
  socket: SocketProvider.ClientIO | Record<string, never>;
  leader: UserData | null;
  isCurrentUserLeader: boolean;
}

let socket: SocketProvider.ClientIO;
const SocketContext = createContext<InitialContextProps>({
  socket: {},
  leader: null,
  isCurrentUserLeader: false,
});

export const useSocketContext = () => useContext<InitialContextProps>(SocketContext);

export const SocketContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { currentUser, isAuthLoading, authChange } = useAuthContext();
  const socketRef = useRef(socket);
  const [leader, setLeader] = useState<UserData | null>(null);

  const isCurrentUserLeader = useMemo(() => currentUser.id === leader?.userId, [currentUser, leader]);

  const socketInitializer = useCallback(async () => {
    if (currentUser && !isAuthLoading) {
      await fetch(Routes.SOCKET).then(() => {
        socket = io();
        socketRef.current = socket;
      });

      socket.on('connect', () => {
        socket.emit('JOIN_USER', {
          socketId: socket.id,
          isAdmin: currentUser.isAdmin,
          userId: currentUser.id,
          username: currentUser.name,
        });
      });

      socket.on('RECEIVE_TOAST', (message, type) => CustomToast.send(message, type));
      socket.on('RECEIVE_NEW_LEADER', (userData) => setLeader(userData));

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
        isCurrentUserLeader,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
