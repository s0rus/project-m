import { createRouter } from './context';
import { playlistRouter } from './routers/playlist';
import { protectedPlaylistRouter } from './routers/protected-playlist';
import superjson from 'superjson';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('protected-playlist.', protectedPlaylistRouter)
  .merge('playlist.', playlistRouter);

export type AppRouter = typeof appRouter;
