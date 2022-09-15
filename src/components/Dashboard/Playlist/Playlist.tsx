import { PlaylistContainer, PlaylistWrapper } from './Playlist.styles';
import PlaylistItem from './PlaylistItem/PlaylistItem';
import React from 'react';
import { Typography } from '@mui/material';
import { usePlaylistContext } from '@/contexts/PlaylistContext';
import MadgeIcon from 'components/Icons/MadgeIcon.svg'
import Image from 'next/image';

const Playlist = () => {
  const { playlist, previousVideo } = usePlaylistContext();

  return (
    <>
      {previousVideo && <PlaylistItem video={previousVideo} />}
      <PlaylistWrapper >
        <PlaylistContainer>
          {playlist?.length ? (
            playlist.map((video) => (
              <React.Fragment key={video.videoId}>
                <PlaylistItem video={video} />
              </React.Fragment>
            ))
          ) : (
            <Typography style={{paddingLeft: '36%', paddingTop: '4%'}} variant='h4'>Playlista jest pusta 
            <div style={{marginLeft: '60px'}} ><Image src={MadgeIcon} width={48} height={48} /></div>
            </Typography>
          )}
        </PlaylistContainer>
      </PlaylistWrapper>
    </>
  );
};

export default Playlist;
