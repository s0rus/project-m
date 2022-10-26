import React, { MutableRefObject, useEffect, useRef } from 'react';
import { StyledReactPlayer, VideoPlayerBox } from './VideoPlayer.styles';

import PlayerControls from '../../components/PlayerControls';
import ReactPlayer from 'react-player';
import useHasWindow from '../../utils/hasWindow';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';

const VideoPlayer = () => {
  const { setPlayerRef, handleProgress, handleOnEnd, playerState, handleOnError, handleOnReady } = usePlayerContext();
  const { isPlaying, volume, isMuted, activeVideo } = playerState;
  const playerRef = useRef<ReactPlayer | null>(null);
  const hasWindow = useHasWindow();

  useEffect(() => {
    setPlayerRef(playerRef as MutableRefObject<ReactPlayer>);
  }, [setPlayerRef]);

  return (
    <VideoPlayerBox>
      {hasWindow && (
        <>
          <StyledReactPlayer
            onReady={handleOnReady}
            onError={handleOnError}
            onProgress={handleProgress}
            onEnded={handleOnEnd}
            playing={isPlaying}
            muted={isMuted}
            volume={volume}
            ref={playerRef}
            url={activeVideo?.videoUrl}
            width='100%'
            height='100%'
            config={{
              file: {
                forceHLS: true,
                hlsOptions: {
                  xhrSetup: function(xhr:any, url:any) {
                    xhr.withCredentials = true
                    xhr.setRequestHeader('auth', 'value');
                  },
                }},
              youtube: {
                playerVars: {
                  modestbranding: 1,
                },
              },
            }}
          />
          <PlayerControls />
        </>
      )}
    </VideoPlayerBox>
  );
};

export default VideoPlayer;
