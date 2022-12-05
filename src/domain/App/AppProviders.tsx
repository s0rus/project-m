import 'react-toastify/dist/ReactToastify.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import type { FC, PropsWithChildren } from 'react';

import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer, Slide } from 'react-toastify';
import { theme } from '@/styles/theme';
import { AddonsContextProvider } from '@/domain/App/context/Addons.context';

const AppProviders: FC<PropsWithChildren & { session: Session | null }> = ({ children, session }) => {
  return (
    <SessionProvider session={session} refetchOnWindowFocus={false}>
      <AddonsContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <ToastContainer
            transition={Slide}
            position='bottom-left'
            autoClose={3500}
            closeButton={false}
            hideProgressBar={true}
            draggable={false}
            limit={1}
            style={{ width: 'auto' }}
          />
        </ThemeProvider>
      </AddonsContextProvider>
    </SessionProvider>
  );
};

export default AppProviders;
