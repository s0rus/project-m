import { createProtectedRouter } from './protected-router';
import dayjs from 'dayjs';
import { z } from 'zod';

export const protectedPlaylistRouter = createProtectedRouter().mutation('add-video', {
  input: z
    .object({
      videoTitle: z.string().min(4).max(30),
      videoUrl: z.string().url(),
      videoDuration: z.number(),
    })
    .required(),
  resolve: async ({ input, ctx }) => {
    return await ctx.prisma.playlist.create({
      data: {
        videoTitle: input.videoTitle,
        videoUrl: input.videoUrl,
        addedAt: dayjs().toDate(),
        videoDuration: input.videoDuration,
        addedBy: {
          connect: {
            id: ctx.session.user.id,
          },
        },
      },
      include: {
        addedBy: true,
      },
    });
  },
});
