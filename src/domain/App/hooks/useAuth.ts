import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useAuthStore } from '../store/Auth.store';

export const useAuth = () => {
  const { data: session, status } = useSession();

  const setSession = useAuthStore((state) => state.setSession);
  const setSessionStatus = useAuthStore((state) => state.setSessionStatus);
  const setCurrentUser = useAuthStore((state) => state.setCurrentUser);

  useEffect(() => {
    setSession(session);
    setCurrentUser(
      session?.user || {
        id: undefined,
        isAdmin: undefined,
        name: undefined,
        email: undefined,
        image: undefined,
      }
    );
  }, [session, setSession, setCurrentUser]);

  useEffect(() => {
    setSessionStatus(status);
  }, [status, setSessionStatus]);
};
