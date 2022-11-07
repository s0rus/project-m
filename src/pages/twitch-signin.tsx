import { signIn } from 'next-auth/react';
import { useAuthContext } from '@/domain/App/context/Auth.context';
import { useEffect } from 'react';
import { useSocketContext } from '@/domain/App/context/Socket.context';

const SignInPage = () => {
  const { socket } = useSocketContext();
  const { isAuthLoading, session } = useAuthContext();

  useEffect(() => {
    if (!socket) return;
    socket.off('connect');
    if (!isAuthLoading && !session) void signIn('twitch');
    if (session) window.close();
  }, [session, isAuthLoading, socket]);

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
