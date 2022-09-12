import { createRouter } from './context';
import { z } from 'zod';

export const playlistRouter = createRouter()
  .query('get-all', {
    resolve: async ({ ctx }) => {
      return ctx.prisma.playlist.findMany({
        orderBy: {
          addedAt: 'asc',
        },
      });
    },
  })
  .mutation('delete-one', {
    input: z.object({
      videoId: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      return ctx.prisma.playlist.delete({
        where: {
          videoId: input.videoId,
        },
      });
    },
  });
