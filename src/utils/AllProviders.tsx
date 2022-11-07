import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import { AuthContextProvider } from '@/domain/App/context/Auth.context';
import { PlayerContextProvider } from '@/domain/VideoPlayer/context/VideoPlayer.context';
import { PlaylistContextProvider } from '@/domain/Playlist/context/PlaylistContext';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { SocketContextProvider } from '@/domain/App/context/Socket.context';
import { ToastContainer, Zoom } from 'react-toastify';
import { theme } from '@/styles/theme';
import { AddonsContextProvider } from '@/domain/App/context/Addons.context';

const AllProviders: FC<PropsWithChildren & { session: Session | null }> = ({ children, session }) => {
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
                    transition={Zoom}
                    position='bottom-center'
                    autoClose={2500}
                    closeButton={false}
                    hideProgressBar={true}
                    draggable={false}
                    limit={2}
                    style={{ width: 'auto', textShadow: '0px 0px 10px white',}}
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

export default AllProviders;