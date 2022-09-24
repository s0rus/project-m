import { AddVideoWrapper, ModalContent, SamplePlayer } from './AddVideoModal.styles';
import { FormProvider, useForm } from 'react-hook-form';
import { Modal, Typography } from '@mui/material';
import React, { FC, useRef } from 'react';

import ButtonWithLoader from '@/components/shared/ButtonWithLoader';
import FormInput from '@/components/shared/FormInput';
import ReactPlayer from 'react-player';
import { getYoutubeThumbnail } from '@/domain/Dashboard/utils/youtubeUtils';
import { toast } from 'react-toastify';
import { trpc } from '@/utils/trpc';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface AddVideoModalProps {
  open: boolean;
  handleClose: () => void;
}

const schema = z.object({
  videoTitle: z.string().min(4, { message: 'Tytuł musi mieć minimum 4 znaki.' }).max(30),
  videoUrl: z
    .string()
    .url({ message: 'URL jest nieprawidłowy.' })
    .refine((v) => ReactPlayer.canPlay(v), { message: 'URL jest nieprawidłowy.' }),
});

type FormSchemaType = z.infer<typeof schema>;

const AddVideoModal: FC<AddVideoModalProps> = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const { addVideo, playlistLocked } = usePlaylistContext();
  const { mutateAsync, isLoading } = trpc.useMutation(['protected-playlist.add-video']);
  const methods = useForm<FormSchemaType>({
    defaultValues: {
      videoTitle: '',
      videoUrl: '',
    },
    resolver: zodResolver(schema),
    shouldUnregister: true,
    mode: 'onChange',
  });
  const {
    handleSubmit,
    reset,
    getValues,
    formState: { isValid },
  } = methods;
  const sampleVideoRef = useRef<ReactPlayer | null>(null);

  const onSubmit = async ({ videoTitle, videoUrl }: { videoTitle: string; videoUrl: string }) => {
    try {
      const possibleThumbnail = getYoutubeThumbnail(videoUrl);
      let possibleDuration = 0;

      if (sampleVideoRef.current) {
        possibleDuration = sampleVideoRef.current.getDuration();
      }

      const newVideo = await mutateAsync({
        videoTitle,
        videoUrl,
        videoDuration: Math.floor(possibleDuration) || 0,
        videoThumbnail: possibleThumbnail,
      });

      addVideo(newVideo);
      reset();
      handleClose();
    } catch (error) {
      console.log(error);
      toast.error('Coś poszło nie tak...');
    }
  };

  if (playlistLocked) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContent>
        <Typography variant='h3'>{t('addVideoModal.header')}:</Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <AddVideoWrapper>
              <FormInput name='videoTitle' label={t('addVideoModal.title')} />
              <FormInput name='videoUrl' label={t('addVideoModal.url')} />
              <ButtonWithLoader
                fullWidth
                variant='contained'
                size='large'
                type='submit'
                loading={isLoading}
                disabled={isLoading || !isValid}
              >
                {t('addVideoModal.buttonTxt')}
              </ButtonWithLoader>
            </AddVideoWrapper>
            {isValid && (
              <SamplePlayer
                ref={sampleVideoRef}
                url={getValues('videoUrl')}
                muted
                autoPlay
                playing={true}
                width={0}
                height={0}
              />
            )}
          </form>
        </FormProvider>
      </ModalContent>
    </Modal>
  );
};

export default AddVideoModal;
