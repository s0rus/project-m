import { ControlsContainer, ControlsWrapper, SeekerPreview, VideoTitle } from './PlayerControls.styles';
import React, { useEffect, useRef, useState } from 'react';

import ControlsBar from '../ControlsBar';
import { HIDE_CONTROLS_TIMEOUT } from '../../model/VideoPlayer.model';
import Indicator from '../Indicator';
import { useVideoPlayerStore } from '../../store/VideoPlayer.store';
import { useSocketStore } from '@/domain/App/store/Socket.store';
import { useAuthStore } from '@/domain/App/store/Auth.store';

const PlayerControls = () => {
  const socket = useSocketStore((state) => state.socket);
  const isAdmin = useAuthStore((state) => state.isAdmin());

  const controlsTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [controlsHovered, setControlsHovered] = useState(false);

  const activeVideo = useVideoPlayerStore((state) => state.activeVideo);
  const isReady = useVideoPlayerStore((state) => state.isReady);
  const setControlsVisible = useVideoPlayerStore((state) => state.setControlsVisible);
  const setInitialMute = useVideoPlayerStore((state) => state.setInitialMute);
  const setIsMuted = useVideoPlayerStore((state) => state.setIsMuted);
  const isPlaying = useVideoPlayerStore((state) => state.isPlaying);
  const setIsPlaying = useVideoPlayerStore((state) => state.setIsPlaying);
  const playedSeconds = useVideoPlayerStore((state) => state.playedSeconds);
  const duration = useVideoPlayerStore((state) => state.duration);
  const controlsVisible = useVideoPlayerStore((state) => state.controlsVisible);
  const initialMute = useVideoPlayerStore((state) => state.initialMute);
  const loadedSeconds = useVideoPlayerStore((state) => state.loadedSeconds);

  const handlePlaying = () => {
    if (isReady) {
      if (initialMute) {
        setInitialMute(false);
        setIsMuted(false);
      } else if (isAdmin && socket) {
        setIsPlaying(!isPlaying);
        socket.emit('TOGGLE_PLAYING', !isPlaying);
      }
    }
  };

  useEffect(() => {
    controlsTimerRef.current =
      isPlaying && !initialMute && !controlsHovered
        ? setTimeout(() => setControlsVisible(false), HIDE_CONTROLS_TIMEOUT)
        : undefined;

    return () => clearTimeout(controlsTimerRef.current);
  }, [controlsVisible, setControlsVisible, isPlaying, initialMute, controlsHovered]);

  const handleControlsOnMouseMove = () => setControlsVisible(true);

  const handleControlsOnMouseLeave = () => {
    if (isPlaying && !initialMute) {
      setControlsVisible(false);
    }
    clearTimeout(controlsTimerRef.current);
  };

  const onMouseOver = () => setControlsHovered(true);
  const onMouseLeave = () => setControlsHovered(false);

  return (
    <ControlsWrapper
      playing={+isPlaying}
      initialmute={+initialMute}
      controls={+controlsVisible}
      onMouseMove={handleControlsOnMouseMove}
      onMouseLeave={handleControlsOnMouseLeave}
    >
      <SeekerPreview
        controls={+controlsVisible}
        playedPercentage={(playedSeconds / duration) * 100}
        loadedPercentage={(loadedSeconds || 0 / duration) * 100}
      />
      <ControlsContainer>
        <VideoTitle variant='h1' noWrap controls={+controlsVisible}>
          {activeVideo?.videoTitle || ''}
        </VideoTitle>
        <Indicator handlePlaying={handlePlaying} initialMute={initialMute} isPlaying={isPlaying} />
        <ControlsBar handlePlaying={handlePlaying} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      </ControlsContainer>
    </ControlsWrapper>
  );
};

export default PlayerControls;
