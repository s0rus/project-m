import PlaylistIcon from 'components/Icons/PlaylistIcon.svg'
import TwitchIcon from 'components/Icons/Twitch.svg'
import Image from 'next/image';
import { Box, CardContent, CardMedia, Link, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';
import { PlaylistItemCard } from './PlaylistItem.styles';
import { PlaylistWithUsers } from '../Playlist.model';


interface PlaylistItemsProps {
  video: PlaylistWithUsers;
}
const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  return (
    <PlaylistItemCard style={{marginBottom: '20px'}} >
      <CardMedia style={{marginBottom: '-10px' ,minHeight: '100px', minWidth: '150px' }} >
        <Image src={PlaylistIcon} style={{borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}} width={150} height={100} ></Image>
      </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Link href={video.videoUrl} style={{ textDecoration: 'none' }}  target='_blank' rel='noopener norefferer'>
            <Typography component='div' variant='h4'>
              {video.videoTitle}
            </Typography>
          </Link>
          <Typography component='div' variant='body1' style={{cursor: 'context-menu'}} >
          Dodane przez: {video.addedBy.name}
          </Typography>
        </CardContent>
      </Box>
    </PlaylistItemCard>
  );
};

export default PlaylistItem;
