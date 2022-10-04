import ReactPlayer from 'react-player';
import i18n from '@/pages/_i18n';
import { z } from 'zod';

export const titleBounds = {
  MIN: 1,
  MAX: 30,
};

export const newVideoSchema = z.object({
  videoTitle: z
    .string()
    .min(titleBounds.MIN, { message: i18n.t('addVideoModal.titleRequired') })
    .max(titleBounds.MAX, { message: i18n.t('addVideoModal.titleTooLong') }),
  videoUrl: z
    .string()
    .url({ message: 'URL jest nieprawidłowy.' })
    .refine((v) => ReactPlayer.canPlay(v), { message: i18n.t('addVideoModal.wrongUrl') }),
});

export type NewVideoForm = z.infer<typeof newVideoSchema>;