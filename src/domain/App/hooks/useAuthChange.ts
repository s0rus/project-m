import { useCallback } from 'react';
import { useAuthStore } from '../store/Auth.store';
import { Routes } from '@/server/router/routes';
import { useNewWindow } from './useNewWindow';

export const useAuthChange = () => {
  const { newWindow } = useNewWindow();
  const setIsAuthChanging = useAuthStore((state) => state.setIsAuthChanging);
  const isAuthChanging = useAuthStore((state) => state.isAuthChanging);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn());
  const isAdmin = useAuthStore((state) => state.isAdmin());

  const loginWithTwitch = useCallback(async () => {
    try {
      setIsAuthChanging(true);
      await newWindow(Routes.TWITCH_LOGIN, 'Login with Twitch');
      setIsAuthChanging(false);
    } catch {
      setIsAuthChanging(false);
    }
  }, [newWindow, setIsAuthChanging]);

  const logoutOfTwitch = useCallback(async () => {
    try {
      setIsAuthChanging(true);
      await newWindow(Routes.TWITCH_LOGOUT, 'Logging out...');
      setIsAuthChanging(false);
    } catch (error) {
      setIsAuthChanging(false);
    }
  }, [newWindow, setIsAuthChanging]);

  return {
    loginWithTwitch,
    logoutOfTwitch,
    isAuthChanging,
    isLoggedIn,
    isAdmin,
  };
};
