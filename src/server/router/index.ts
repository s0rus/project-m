import { createRouter } from './context';
import { playlistRouter } from './playlist';
import { protectedPlaylistRouter } from './protectedPlaylist';
import superjson from 'superjson';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('protected-playlist.', protectedPlaylistRouter)
  .merge('playlist.', playlistRouter);

export type AppRouter = typeof appRouter;
