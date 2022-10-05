import { useCallback, useEffect } from 'react';

import { signOut } from 'next-auth/react';

const SignInPage = () => {
  const handleLogout = useCallback(async () => {
    await signOut();
    window.close();
  }, []);

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
        background: 'white',
      }}
    ></div>
  );
};

export default SignInPage;
