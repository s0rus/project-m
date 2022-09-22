import React, { MutableRefObject, useEffect, useRef } from 'react';
import { StyledReactPlayer, VideoPlayerBox } from './VideoPlayer.styles';

import PlayerControls from './PlayerControls/';
import ReactPlayer from 'react-player';
import { useHasWindow } from '@/utils/index';
// import { useSocketContext } from '@/contexts/SocketContext';
import { usePlayerContext } from '@/contexts/PlayerContext';

const VideoPlayer = () => {
  const { setPlayerRef, handleProgress, handleOnEnd, playerState } = usePlayerContext();
  const { isPlaying, volume, isMuted, activeVideo } = playerState;
  const playerRef = useRef<ReactPlayer | null>(null);
  const hasWindow = useHasWindow();
  // const { socket } = useSocketContext();

  useEffect(() => {
    setPlayerRef(playerRef as MutableRefObject<ReactPlayer>);
  }, [setPlayerRef]);

  return (
    <VideoPlayerBox>
      {hasWindow && (
        <>
          <StyledReactPlayer
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
