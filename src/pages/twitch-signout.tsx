import { useCallback, useEffect } from 'react';

import { signOut } from 'next-auth/react';
import { useSocketContext } from '@/contexts/SocketContext';

const SignInPage = () => {
  const { socket } = useSocketContext();

  const handleLogout = useCallback(async () => {
    if (!socket) return;
    socket.off('connect');
    await signOut();
    window.close();
  }, [socket]);

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

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
