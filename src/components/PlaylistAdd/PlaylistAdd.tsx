import { getTwitchChatParent } from '@/pages/_app';
import React from 'react';
import { IconStyleBox ,PlaylistAddHolder , PlaylistBackground } from './PlaylistAdd.styles';
import { LinearProgress } from '@mui/material';
import { H1,H2,H3 } from '@/styles/style';
import PlaylistIcon from 'components/Icons/PlaylistIcon.svg';
import Image from 'next/image';
import { Box } from '@mui/material';


const PlaylistAdd = () => {
    return (
        <PlaylistBackground>
          <PlaylistAddHolder>
          <IconStyleBox>
            <Image style={ {
              borderRadius: '20px',
              } } src={PlaylistIcon}/>
            </IconStyleBox>
        <H1>Tytuł </H1>
        <H2>przez: </H2>
        <H3>Nick</H3>
          </PlaylistAddHolder>
          </PlaylistBackground>
    );
  };

export default PlaylistAdd;