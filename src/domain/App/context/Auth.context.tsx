import type { FC, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { type Session } from 'next-auth';
import { useNewWindow } from '@/domain/App/hooks/useNewWindow';
import { Routes } from '@/server/router/routes';

interface InitialContextProps {
  session: Session | null;
  isLoggedIn: boolean;
  isAuthLoading: boolean;
  isAdmin: boolean;
  loginWithTwitch: () => Promise<void>;
  logoutOfTwitch: () => Promise<void>;
  currentUser: {
    id?: string | undefined;
    isAdmin?: boolean | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
  authChange: boolean;
  setAuthChange: Dispatch<SetStateAction<boolean>>;
}

const initialContextProps: InitialContextProps = {
  session: null,
  isLoggedIn: false,
  isAuthLoading: false,
  isAdmin: false,
  loginWithTwitch: () => Promise.resolve(),
  logoutOfTwitch: () => Promise.resolve(),
  currentUser: {
    email: undefined,
    id: undefined,
    image: undefined,
    isAdmin: undefined,
    name: undefined,
  },
  authChange: false,
  setAuthChange: () => false,
};

const AuthContext = createContext<InitialContextProps>(initialContextProps);

export const useAuthContext = () => useContext<InitialContextProps>(AuthContext);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data: session, status } = useSession();
  const [authChange, setAuthChange] = useState(false);
  const currentUser = useMemo(() => {
    return { ...session?.user };
  }, [session?.user]);
  const { newWindow } = useNewWindow();

  const isLoggedIn = useMemo(() => (session?.user && status === 'authenticated' ? true : false), [session, status]);
  const isAuthLoading = useMemo(() => status === 'loading', [status]);
  const isAdmin = useMemo(() => (isLoggedIn && session?.user.isAdmin ? true : false), [session, isLoggedIn]);

  const loginWithTwitch = useCallback(async () => {
    setAuthChange(true);
    await newWindow(Routes.TWITCH_LOGIN, 'Login with Twitch');
    setAuthChange(false);
  }, [newWindow]);

  const logoutOfTwitch = useCallback(async () => {
    setAuthChange(true);
    await newWindow(Routes.TWITCH_LOGOUT, 'Logging out...');
    setAuthChange(false);
  }, [newWindow]);

  const value = {
    session,
    isLoggedIn,
    isAuthLoading,
    isAdmin,
    loginWithTwitch,
    logoutOfTwitch,
    authChange,
    setAuthChange,
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
