import { AddVideoWrapper, ModalContent } from './AddVideoModal.styles';
import { Button, Modal, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import React, { FC } from 'react';
import { Routes } from '@/server/router/routes';
import { toast } from 'react-toastify';
import { trpc } from '@/utils/trpc';
import { usePlaylistContext } from '@/contexts/PlaylistContext';
import styled from '@emotion/styled/types/base';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
// onClose={handleClose}


  return (
    <Modal open={open}>
      <ModalContent>
        <ExitToAppIcon style={{marginLeft: '100%', color: 'red', cursor: 'pointer'}} onClick={handleClose} />
        <Typography style={{marginTop: '-10px', marginBottom: '20px'}} variant='h2'>Dodaj film do kolejki</Typography>
        <AddVideoWrapper>
          <form style={{marginBottom: '10px'}} onSubmit={handleSubmit(onSubmit)}>
            <Controller name='videoTitle' control={control} render={({ field }) => <TextField style={{ backgroundColor: "#18181b", borderRadius: '8px', marginBottom: '20px' }} InputProps={{ style: { color: "#6430ff" } }} id="filled-basic" label="Tytuł " autoComplete='off' variant="filled" {...field} fullWidth />} />
            <Controller name='videoUrl' control={control} render={({ field }) => <TextField style={{ backgroundColor: "#18181b", borderRadius: '8px' }} InputProps={{ style: { color: "#6430ff" } }} id="filled-basic" label="Link" autoComplete='off' variant="filled" {...field} fullWidth />} />
            <Button style={{fontSize: '18px' ,marginLeft: '35%' ,marginTop: '20px', borderRadius: '20px',  }} variant='contained' size='large' type='submit'>DODAJ<AddCircleIcon style={{marginLeft: '10px', marginRight: '-10px'}} /></Button>
          </form>
        </AddVideoWrapper>
      </ModalContent>
    </Modal>
  );
};

export default AddVideoModal;
