import { signIn } from 'next-auth/react';
import { useAuthContext } from '@/domain/App/context/Auth.context';
import { useEffect } from 'react';
import BlankLayout from '@/layouts/BlankLayout';

const SignInPage = () => {
  const { isAuthLoading, session } = useAuthContext();

  useEffect(() => {
    if (!isAuthLoading && !session) void signIn('twitch');
    if (session) window.close();
  }, [session, isAuthLoading]);

  return <BlankLayout />;
};

export default SignInPage;
