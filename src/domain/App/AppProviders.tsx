import 'react-toastify/dist/ReactToastify.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';

import { AuthContextProvider } from './context/Auth.context';
import { PlayerContextProvider } from '@/domain/VideoPlayer/context/PlayerContext';
import { PlaylistContextProvider } from '@/domain/Playlist/context/Playlist.context';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { SocketContextProvider } from '@/domain/App/context/Socket.context';
import { ToastContainer, Slide } from 'react-toastify';
import { theme } from '@/styles/theme';
import { AddonsContextProvider } from '@/domain/App/context/Addons.context';

const AppProviders: FC<PropsWithChildren & { session: Session | null }> = ({ children, session }) => {
  return (
    <SessionProvider session={session} refetchOnWindowFocus={false}>
      <AuthContextProvider>
        <SocketContextProvider>
          <PlaylistContextProvider>
            <PlayerContextProvider>
              <AddonsContextProvider>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  {children}
                  <ToastContainer
                    transition={Slide}
                    position='bottom-left'
                    autoClose={5000}
                    closeButton={false}
                    hideProgressBar={true}
                    draggable={false}
                    limit={1}
                    style={{ width: 'auto' }}
                  />
                </ThemeProvider>
              </AddonsContextProvider>
            </PlayerContextProvider>
          </PlaylistContextProvider>
        </SocketContextProvider>
      </AuthContextProvider>
    </SessionProvider>
  );
};

export default AppProviders;
