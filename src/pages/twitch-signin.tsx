import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import BlankLayout from '@/layouts/BlankLayout';
import { useAuthStore } from '@/domain/App/store/Auth.store';
import { useAuth } from '@/domain/App/hooks/useAuth';

const SignInPage = () => {
  useAuth();
  const session = useAuthStore((state) => state.session);
  const sessionStatus = useAuthStore((state) => state.sessionStatus);
  const isUserUnauthenticated = useAuthStore((state) => state.isUserUnauthenticated());
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn());

  useEffect(() => {
    if (!session && isUserUnauthenticated) {
      void signIn('twitch');
    }
    if (isLoggedIn) {
      window.close();
    }
  }, [session, sessionStatus, isUserUnauthenticated, isLoggedIn]);

  return <BlankLayout />;
};

export default SignInPage;
