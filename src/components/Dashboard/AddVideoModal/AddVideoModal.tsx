import { AddVideoWrapper, ModalContent, SamplePlayer } from './AddVideoModal.styles';
import { Controller, useForm } from 'react-hook-form';
import { Modal, TextField, Typography } from '@mui/material';
import React, { FC, useEffect, useRef, useState } from 'react';

import ButtonWithLoader from '@/components/shared/ButtonWithLoader';
import type ReactPlayer from 'react-player';
import { getYoutubeThumbnail } from '@/utils/youtubeUtils';
import { toast } from 'react-toastify';
import { trpc } from '@/utils/trpc';
import { usePlaylistContext } from '@/contexts/PlaylistContext';
import { useTranslation } from 'react-i18next';

interface AddVideoModalProps {
  open: boolean;
  handleClose: () => void;
}

const AddVideoModal: FC<AddVideoModalProps> = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const { addVideo } = usePlaylistContext();
  const { mutateAsync, isLoading } = trpc.useMutation(['protected-playlist.add-video']);
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
    watch,
  } = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      videoTitle: '',
      videoUrl: '',
    },
  });
  const [currentUrl, setCurrentUrl] = useState<string | undefined>(undefined);
  const sampleVideoRef = useRef<ReactPlayer | null>(null);

  const onSubmit = async ({ videoTitle, videoUrl }: { videoTitle: string; videoUrl: string }) => {
    try {
      const possibleThumbnail = getYoutubeThumbnail(videoUrl);
      let possibleDuration = 0;

      if (sampleVideoRef.current) {
        sampleVideoRef.current;
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

  useEffect(() => {
    const subscription = watch((value) => setCurrentUrl(value.videoUrl));

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContent>
        <Typography variant='h3'>{t('addVideoModal.header')}:</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AddVideoWrapper>
            <Controller
              name='videoTitle'
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label={t('addVideoModal.title')} autoComplete='off' />
              )}
            />
            <Controller
              name='videoUrl'
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label={t('addVideoModal.url')} autoComplete='off' />
              )}
            />
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
          <SamplePlayer ref={sampleVideoRef} url={currentUrl} muted autoPlay playing={true} width={0} height={0} />
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AddVideoModal;
