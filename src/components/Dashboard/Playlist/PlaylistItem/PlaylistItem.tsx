import { Box, CardContent, CardMedia, Link, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';

import { Playlist } from '@prisma/client';
import { PlaylistItemCard } from './PlaylistItem.styles';

interface PlaylistItemsProps {
  video: Playlist;
}

const PlaylistItem: FC<PlaylistItemsProps> = ({ video }) => {
  return (
    <PlaylistItemCard>
      <CardMedia>
        <Paper sx={{ height: '100px', width: '151px', backgroundColor: 'red' }}></Paper>
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
          <Link href={video.videoUrl} target='_blank' rel='noopener norefferer'>
            <Typography component='div' variant='h4'>
              {video.videoTitle}
            </Typography>
          </Link>
          <Typography component='div' variant='body1'>
            Dodane przez: totalnykoks123
          </Typography>
        </CardContent>
      </Box>
    </PlaylistItemCard>
  );
};

export default PlaylistItem;
