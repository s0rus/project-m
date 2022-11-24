import { AddVideoWrapper, ModalContent, SamplePlayer } from './AddVideoModal.styles';
import { FormProvider, useForm } from 'react-hook-form';
import { Modal, Typography } from '@mui/material';
import type { NewVideoForm } from '../../model/NewVideo.model';
import { newVideoSchema } from '../../model/NewVideo.model';
import type { FC } from 'react';
import React, { useRef, useState } from 'react';

import ButtonWithLoader from '@/domain/App/components/ButtonWithLoader';
import { CustomToast, ToastTypes } from '@/utils/CustomToast';
import FormInput from '@/domain/App/components/FormInput';
import { PlaylistAddCheck } from '@mui/icons-material';
import type ReactPlayer from 'react-player';
import { getYoutubeThumbnail } from '@/domain/Dashboard/utils/youtubeUtils';
import { trpc } from '@/utils/trpc';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthChange } from '@/domain/App/hooks/useAuthChange';
import { useSocketStore } from '@/domain/App/store/Socket.store';
import { usePlaylistStore } from '@/domain/Playlist/store/Playlist.store';

interface AddVideoModalProps {
  open: boolean;
  handleClose: () => void;
}

const AddVideoModal: FC<AddVideoModalProps> = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const { mutateAsync: addVideo, isLoading } = trpc.useMutation(['protected-playlist.add-video']);
  const { isAdmin } = useAuthChange();
  const socket = useSocketStore((state) => state.socket);

  const addVideoToPlaylist = usePlaylistStore((state) => state.addVideoToPlaylist);
  const isPlaylistLocked = usePlaylistStore((state) => state.isPlaylistLocked);
  const sampleVideoRef = useRef<ReactPlayer | null>(null);
  const [playerReady, setPlayerReady] = useState(false);

  const methods = useForm<NewVideoForm>({
    defaultValues: {
      videoTitle: '',
      videoUrl: '',
    },
    resolver: zodResolver(newVideoSchema),
    shouldUnregister: true,
    mode: 'onChange',
  });

  const {
    handleSubmit,
    reset,
    getValues,
    formState: { isValid },
    setError,
  } = methods;

  const handleReset = () => {
    reset();
    setPlayerReady(false);
    handleClose();
  };

  const onSubmit = async ({ videoTitle, videoUrl }: NewVideoForm) => {
    try {
      const possibleThumbnail = getYoutubeThumbnail(videoUrl);
      let possibleDuration = 0;

      if (sampleVideoRef.current) {
        possibleDuration = Math.floor(sampleVideoRef.current.getDuration());
      } else {
        throw new Error();
      }

      const newVideo = await addVideo({
        videoTitle,
        videoUrl,
        videoDuration: possibleDuration,
        videoThumbnail: possibleThumbnail,
      });

      await addVideoToPlaylist(newVideo);
      if (socket) {
        socket.emit('ADD_NEW_VIDEO', newVideo);
      }
      CustomToast.send(t('addVideoModal.videoAdded'), ToastTypes.Sucess);
      handleReset();
    } catch {
      CustomToast.send(t('addVideoError'), ToastTypes.Error);
      handleReset();
    }
  };

  const handleOnError = () => setError('videoUrl', { message: t('addVideoModal.couldNotProcessUrl') });

  if (isPlaylistLocked && !isAdmin) handleClose();

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
                loading={isLoading || (isValid && !playerReady)}
                disabled={isLoading || !isValid || !playerReady}
                startIcon={<PlaylistAddCheck />}
                sx={{ mt: '1rem' }}
              >
                {t('addVideoModal.buttonTxt')}
              </ButtonWithLoader>
            </AddVideoWrapper>
            {isValid ? (
              <SamplePlayer
                ref={sampleVideoRef}
                onReady={() => setPlayerReady(true)}
                onError={handleOnError}
                url={getValues('videoUrl')}
                muted
                autoPlay
                playing={true}
                width={0}
                height={0}
                volume={0}
              />
            ) : null}
          </form>
        </FormProvider>
      </ModalContent>
    </Modal>
  );
};

export default AddVideoModal;
