import { usePlayerContext } from '@/contexts/PlayerContext';
import useHasWindow from '@/utils/hasWindow';
import { TestUrl } from '@/utils/testUrls';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import PlayerControls from './PlayerControls/PlayerControls';
import { StyledReactPlayer, VideoPlayerBox } from './VideoPlayer.styles';

const VideoPlayer = () => {
  const { setPlayerRef, handleProgress, playerState, togglePlaying } = usePlayerContext();
  const { isPlaying, volume, isMuted } = playerState;
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
            onEnded={togglePlaying}
            playing={isPlaying}
            muted={isMuted}
            volume={volume}
            ref={playerRef}
            url={TestUrl.YT}
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