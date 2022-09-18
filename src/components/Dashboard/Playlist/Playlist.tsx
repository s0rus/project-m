import { EmptyPlaylistBox, PlaylistContainer, PlaylistWrapper } from './Playlist.styles';

import PlaylistItem from './PlaylistItem/PlaylistItem';
import React from 'react';
import { Typography } from '@mui/material';
import { usePlaylistContext } from '@/contexts/PlaylistContext';
import { useTranslation } from 'react-i18next';

const Playlist = () => {
  const { t } = useTranslation();
  const { playlist, previousVideo, currentVideo } = usePlaylistContext();

  return (
    <>
      {/* {previousVideo && <PlaylistItem video={previousVideo} />} */}
      <PlaylistWrapper>
        <PlaylistContainer>
          {!playlist?.length || (currentVideo?.videoId === playlist[0]?.videoId && !playlist[1]) ? (
            <EmptyPlaylistBox>
              <Typography variant='h4'>{t('emptyPlaylist')}</Typography>
            </EmptyPlaylistBox>
          ) : (
            playlist.map((video) => (
              <React.Fragment key={video.videoId}>
                <PlaylistItem video={video} />
              </React.Fragment>
            ))
          )}
        </PlaylistContainer>
      </PlaylistWrapper>
    </>
  );
};

export default Playlist;
