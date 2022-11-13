import { useCallback, useEffect } from 'react';

import { signOut } from 'next-auth/react';
import BlankLayout from '@/layouts/BlankLayout';

const SignInPage = () => {
  const handleLogout = useCallback(async () => {
    await signOut();
    window.close();
  }, []);

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return <BlankLayout />;
};

export default SignInPage;
