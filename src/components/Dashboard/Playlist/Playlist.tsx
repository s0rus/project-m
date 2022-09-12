import { PlaylistContainer, PlaylistWrapper } from './Playlist.styles';

import PlaylistItem from './PlaylistItem/PlaylistItem';
import React from 'react';
import { Typography } from '@mui/material';
import { usePlaylistContext } from '@/contexts/PlaylistContext';

const Playlist = () => {
  const { playlist, previousVideo } = usePlaylistContext();

  return (
    <>
      {previousVideo && <PlaylistItem video={previousVideo} />}
      <PlaylistWrapper>
        <PlaylistContainer>
          {playlist?.length ? (
            playlist.map((video) => (
              <React.Fragment key={video.videoId}>
                <PlaylistItem video={video} />
              </React.Fragment>
            ))
          ) : (
            <Typography variant='h4'>Playlista jest pusta.</Typography>
          )}
        </PlaylistContainer>
      </PlaylistWrapper>
    </>
  );
};

export default Playlist;
