import { createProtectedRouter } from '../protected-router';
import dayjs from 'dayjs';
import { titleBounds } from '@/domain/Dashboard/model/NewVideo.model';
import { z } from 'zod';

export const protectedPlaylistRouter = createProtectedRouter()
  .mutation('add-video', {
    input: z
      .object({
        videoTitle: z.string().min(titleBounds.MIN).max(titleBounds.MAX),
        videoUrl: z.string().url(),
        videoDuration: z.number(),
        videoThumbnail: z.string().url().nullable(),
      })
      .required(),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.playlist.create({
        data: {
          videoTitle: input.videoTitle,
          videoUrl: input.videoUrl,
          addedAt: dayjs().toDate(),
          videoDuration: input.videoDuration,
          videoThumbnail: input.videoThumbnail,
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
  })
  .mutation('set-playlist-state', {
    input: z
      .object({
        newPlaylistState: z.boolean(),
      })
      .required(),
    resolve: async ({ ctx, input }) => {
      return ctx.prisma.overseer.update({
        where: {
          overseerId: 'OVERSEER',
        },
        data: {
          playlistLocked: input.newPlaylistState,
        },
      });
    },
  })
  .mutation('skip-to-video', {
    input: z.object({ videoId: z.string() }).required(),
    resolve: async ({ ctx, input }) => {
      return ctx.prisma.playlist.update({
        where: {
          videoId: input.videoId,
        },
        data: {
          addedAt: dayjs().add(-1, 'day').toDate(),
        },
      });
    },
  });
