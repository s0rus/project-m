import { AddVideoWrapper, ModalContent, SamplePlayer, ExitButton } from './AddVideoModal.styles';
import { FormProvider, useForm } from 'react-hook-form';
import { Modal, Typography } from '@mui/material';
import { NewVideoForm, newVideoSchema } from '../../model/NewVideo.model';
import React, { FC, useRef, useState } from 'react';

import ButtonWithLoader from '@/components/ButtonWithLoader';
import { CustomToast } from '@/utils/sendToast';
import FormInput from '@/components/FormInput';
import { PlaylistAddCheck } from '@mui/icons-material';
import ReactPlayer from 'react-player';
import { ToastTypes } from '@/utils/ToastTypes';
import { getYoutubeThumbnail } from '@/domain/Dashboard/utils/youtubeUtils';
import { trpc } from '@/utils/trpc';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useSocketContext } from '@/contexts/SocketContext';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import CloseIcon from '@mui/icons-material/Close';
interface AddVideoModalProps {
  open: boolean;
  handleClose: () => void;
}

const AddVideoModal: FC<AddVideoModalProps> = ({ open, handleClose }) => {
  const { isAdmin } = useAuthContext();
  const { socket } = useSocketContext();
  const { t } = useTranslation();
  const { addVideo, playlistLocked } = usePlaylistContext();
  const { mutateAsync, isLoading } = trpc.useMutation(['protected-playlist.add-video']);
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
  } = methods;

  const handleReset = () => {
    reset();
    handleClose();
    setPlayerReady(false);
  };

  const onSubmit = async ({ videoTitle, videoUrl }: NewVideoForm) => {
    try {
      const possibleThumbnail = getYoutubeThumbnail(videoUrl);
      let possibleDuration = 0;

      if (sampleVideoRef.current) {
        possibleDuration = Math.floor(sampleVideoRef.current.getDuration());
      }

      const newVideo = await mutateAsync({
        videoTitle,
        videoUrl,
        videoDuration: possibleDuration,
        videoThumbnail: possibleThumbnail,
      });

      addVideo(newVideo);
      socket.emit('ADD_NEW_VIDEO', newVideo);
      CustomToast.send(t('addVideoModal.videoAdded'), ToastTypes.Sucess);
      handleReset();
    } catch {
      CustomToast.send(t('addVideoError'), ToastTypes.Error);
      handleReset();
    }
  };

  if (playlistLocked && !isAdmin) handleClose();

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContent>
        <ExitButton>
        <CloseIcon style={{height: '40px', width: '40px'}} onClick={handleClose}/>
        </ExitButton>
        <Typography variant='h3'>{t('addVideoModal.header')}</Typography>
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
                url={getValues('videoUrl')}
                muted
                autoPlay
                playing={true}
                width={0}
                height={0}
              />
            ) : null}
          </form>
        </FormProvider>
      </ModalContent>

    </Modal>
  );
};

export default AddVideoModal;