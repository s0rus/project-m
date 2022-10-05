import { signIn } from 'next-auth/react';
import { useAuthContext } from '@/contexts/AuthContext';
import { useEffect } from 'react';

const SignInPage = () => {
  const { isAuthLoading, session } = useAuthContext();

  useEffect(() => {
    if (!isAuthLoading && !session) void signIn('twitch');
    if (session) window.close();
  }, [session, isAuthLoading]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        left: 0,
        top: 0,
        background: 'white',
      }}
    ></div>
  );
};

export default SignInPage;
