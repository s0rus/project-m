import { Box, CardContent, CardMedia, Link, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import PlaylistIcon from 'components/Icons/PlaylistIcon.svg'
import { Playlist } from '@prisma/client';
import { PlaylistItemCard } from './PlaylistItem.styles';
interface PlaylistItemsProps {
  video: Playlist;
}

const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  return (
    <PlaylistItemCard>
      <CardMedia>
        <Image src={PlaylistIcon} style={{borderRadius: '10px'}} width={150} height={100} ></Image>
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
          <Typography component='div' variant='body1'>
            Dodane przez: aha
          </Typography>
        </CardContent>
      </Box>
    </PlaylistItemCard>
  );
};

export default PlaylistItem;
