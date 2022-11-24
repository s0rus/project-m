import { Routes } from '@/server/router/routes';
import { CustomToast } from '@/utils/CustomToast';
import { useCallback, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useAuthStore } from '../store/Auth.store';
import { useSocketStore } from '../store/Socket.store';
import { useAuthChange } from './useAuthChange';

export const useSocket = () => {
  const setSocket = useSocketStore((state) => state.setSocket);
  const socket = useSocketStore((state) => state.socket);
  const setLeader = useSocketStore((state) => state.setLeader);
  const currentUser = useAuthStore((state) => state.currentUser);
  const isAuthLoading = useAuthStore((state) => state.isAuthLoading());
  const { isAuthChanging } = useAuthChange();

  const socketInitializer = useCallback(async () => {
    if (!isAuthLoading) {
      await fetch(Routes.SOCKET).then(() => {
        setSocket(io());
      });
    }
  }, [setSocket, isAuthLoading]);

  useEffect(() => {
    if (socket) {
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
    }

    return () => {
      if (socket) {
        socket.off('RECEIVE_TOAST');
        socket.off('RECEIVE_NEW_LEADER');
      }
    };
  }, [socket, currentUser, setLeader]);

  useEffect(() => {
    if (!isAuthChanging && socket) {
      socket.emit('UPDATE_USER', {
        socketId: socket.id,
        isAdmin: currentUser.isAdmin,
        userId: currentUser.id,
        username: currentUser.name,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, isAuthChanging]);

  useEffect(() => {
    if (
      socket ||
      window.location.href.includes(Routes.TWITCH_LOGIN) ||
      window.location.href.includes(Routes.TWITCH_LOGOUT)
    ) {
      return;
    }
    socketInitializer();
  }, [socketInitializer, isAuthLoading, socket]);
};
