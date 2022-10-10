import '../translations/i18n';

import AllProviders from '@/utils/AllProviders';
import type { AppRouter } from '../server/router';
import type { AppType } from 'next/dist/shared/lib/utils';
import superjson from 'superjson';
import { withTRPC } from '@trpc/next';

const MyApp: AppType = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <AllProviders session={session}>
      <Component {...pageProps} />
    </AllProviders>
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