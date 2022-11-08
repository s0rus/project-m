import { signIn } from 'next-auth/react';
import { useAuthContext } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useSocketContext } from '@/contexts/SocketContext';

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
        background: '#18181b',
      }}
    ></div>
  );
};

export default SignInPage;
