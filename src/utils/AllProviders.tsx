import 'react-toastify/dist/ReactToastify.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

import { AuthContextProvider } from '@/contexts/AuthContext';
import { PlayerContextProvider } from '@/domain/VideoPlayer/context/PlayerContext';
import { PlaylistContextProvider } from '@/domain/Playlist/context/PlaylistContext';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { SocketContextProvider } from '@/contexts/SocketContext';
import { ToastContainer } from 'react-toastify';
import { theme } from '@/styles/theme';

const AllProviders: FC<PropsWithChildren & { session: Session | null }> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <SocketContextProvider>
        <AuthContextProvider>
          <PlaylistContextProvider>
            <PlayerContextProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
                <ToastContainer
                  position='bottom-left'
                  autoClose={5000}
                  closeButton={false}
                  hideProgressBar={true}
                  draggable={false}
                />
              </ThemeProvider>
            </PlayerContextProvider>
          </PlaylistContextProvider>
        </AuthContextProvider>
      </SocketContextProvider>
    </SessionProvider>
  );
};

export default AllProviders;
