import React, { MutableRefObject, useEffect, useRef } from 'react';
import { StyledReactPlayer, VideoPlayerBox, VideoPlayerContainer } from './VideoPlayer.styles';

import PlayerControls from '../../components/PlayerControls';
import ReactPlayer from 'react-player';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
import { theme } from '@/styles/theme';
import { useAddonsContext } from '@/contexts/AddonsContext';
import useHasWindow from '../../utils/hasWindow';
import useMediaQuery from '@mui/material/useMediaQuery';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';

const VideoPlayer = () => {
  const isLargeDown = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const { isChatOn } = useAddonsContext();
  const { setPlayerRef, handleProgress, handleOnEnd, playerState, handleOnError, handleOnReady } = usePlayerContext();
  const { isPlaying, volume, isMuted, activeVideo } = playerState;
  const playerRef = useRef<ReactPlayer | null>(null);
  const hasWindow = useHasWindow();

  useEffect(() => {
    setPlayerRef(playerRef as MutableRefObject<ReactPlayer>);
  }, [setPlayerRef]);

  return (
    <VideoPlayerContainer>
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
      {isChatOn && isLargeDown && <TwitchChat />}
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;