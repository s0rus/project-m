import 'react-toastify/dist/ReactToastify.css';
import './_i18n';

import { CssBaseline, ThemeProvider } from '@mui/material';

import type { AppRouter } from '../server/router';
import type { AppType } from 'next/dist/shared/lib/utils';
import { PlayerContextProvider } from '@/contexts/PlayerContext';
import { PlaylistContextProvider } from '@/contexts/PlaylistContext';
import { SessionProvider } from 'next-auth/react';
import { SocketContextProvider } from '@/contexts/SocketContext';
import { ToastContainer } from 'react-toastify';
import superjson from 'superjson';
import { theme } from '@/styles/theme';
import { withTRPC } from '@trpc/next';

const MyApp: AppType = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <SocketContextProvider>
        <PlaylistContextProvider>
          <PlayerContextProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
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
      </SocketContextProvider>
    </SessionProvider>
  );
};

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '';
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const getTwitchChatParent = () => {
  if (process.env.VERCEL_URL) return `${process.env.VERCEL_URL}`;
  return `localhost`;
};

export default withTRPC<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp);
