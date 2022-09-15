import { AddVideoWrapper, ModalContent } from './AddVideoModal.styles';
import { Button, Modal, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import React, { FC } from 'react';

import { Routes } from '@/server/router/routes';
import { toast } from 'react-toastify';
import { trpc } from '@/utils/trpc';
import { usePlaylistContext } from '@/contexts/PlaylistContext';

interface AddVideoModalProps {
  open: boolean;
  handleClose: () => void;
}

const AddVideoModal: FC<AddVideoModalProps> = ({ open, handleClose }) => {
  const { addVideo } = usePlaylistContext();
  const { mutateAsync } = trpc.useMutation(['protected-playlist.add-video']);
  const { handleSubmit, control, reset } = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      videoTitle: '',
      videoUrl: '',
    },
  });

  const onSubmit = async ({ videoTitle, videoUrl }: { videoTitle: string; videoUrl: string }) => {
    try {
      const newVideo = await mutateAsync({
        videoTitle,
        videoUrl,
        videoDuration: 0,
      });
      addVideo(newVideo);
      reset();
      handleClose();
    } catch (error) {
      console.log(error);
      toast.error('Coś poszło nie tak...');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContent>
        <Typography variant='h2'>Dodaj film do kolejki</Typography>
        <AddVideoWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name='videoTitle'
              control={control}
              render={({ field }) => <TextField {...field} fullWidth />}
            />
            <Controller name='videoUrl' control={control} render={({ field }) => <TextField {...field} fullWidth />} />
            <Button fullWidth variant='contained' size='large' type='submit'>
              DODAJ
            </Button>
          </form>
        </AddVideoWrapper>
      </ModalContent>
    </Modal>
  );
};

export default AddVideoModal;
