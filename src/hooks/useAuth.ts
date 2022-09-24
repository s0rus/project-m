import { signIn, signOut, useSession } from 'next-auth/react';
import { useCallback, useMemo, useState } from 'react';

const useAuth = () => {
  const { data, status } = useSession();
  const [authChange, setAuthChange] = useState(false);

  const isLoggedIn = useMemo(() => (data?.user && status === 'authenticated' ? true : false), [data, status]);
  const isAuthLoading = useMemo(() => status === 'loading', [status]);
  const isAdmin = useMemo(() => (isLoggedIn && data?.user.isAdmin ? true : false), [data, isLoggedIn]);

  const loginWithTwitch = useCallback(async () => {
    setAuthChange(true);
    await signIn('twitch');
  }, []);

  const logoutOfTwitch = useCallback(async () => {
    setAuthChange(true);
    await signOut();
  }, []);

  return {
    isLoggedIn,
    isAuthLoading,
    isAdmin,
    authChange,
    loginWithTwitch,
    logoutOfTwitch,
  };
};

export default useAuth;
