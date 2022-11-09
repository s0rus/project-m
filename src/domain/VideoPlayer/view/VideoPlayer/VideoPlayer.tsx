import React, { MutableRefObject, useEffect, useRef } from 'react';
import { StyledReactPlayer, VideoPlayerBox, VideoPlayerContainer } from './VideoPlayer.styles';

import PlayerControls from '../../components/PlayerControls';
import ReactPlayer from 'react-player';
import useHasWindow from '../../utils/hasWindow';
import { usePlayerContext } from '@/domain/VideoPlayer/context/PlayerContext';
import { useMediaQuery  } from '@mui/material';
import { theme } from '@/styles/theme';
import { useAddonsContext } from '@/contexts/AddonsContext';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
const VideoPlayer = () => {
  const { setPlayerRef, handleProgress, handleOnEnd, playerState, handleOnError, handleOnReady } = usePlayerContext();
  const { isPlaying, volume, isMuted, activeVideo } = playerState;
  const playerRef = useRef<ReactPlayer | null>(null);
  const hasWindow = useHasWindow();
  const { isChatOn } = useAddonsContext();
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeDown = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  useEffect(() => {
    setPlayerRef(playerRef as MutableRefObject<ReactPlayer>);
  }, [setPlayerRef]);

  return (
    <VideoPlayerContainer>
    <VideoPlayerBox
    style={{ height: isMediumDown ? '65vh' : '100vh'}}>
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
