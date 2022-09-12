import { ControlsContainer, ControlsWrapper, SeekerPreview, VideoTitle } from './PlayerControls.styles';
import React, { useEffect, useRef } from 'react';

import ControlsBar from './ControlsBar';
import Indicator from './Indicator';
import { usePlayerContext } from '@/contexts/PlayerContext';

const PlayerControls = () => {
  const { playerState, togglePlaying, toggleControls, disableInitialMute } = usePlayerContext();
  const { isPlaying, playedSeconds, duration, controlsVisible, initialMute } = playerState;
  const controlsTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handlePlaying = () => (initialMute ? disableInitialMute() : togglePlaying());

  useEffect(() => {
    controlsTimerRef.current = isPlaying && !initialMute ? setTimeout(() => toggleControls(false), 4000) : undefined;

    return () => clearTimeout(controlsTimerRef.current);
  }, [controlsVisible, toggleControls, isPlaying, initialMute]);

  const handleControlsOnMouseMove = () => toggleControls(true);

  const handleControlsOnMouseLeave = () => {
    if (isPlaying && !initialMute) {
      toggleControls(false);
    }
    clearTimeout(controlsTimerRef.current);
  };

  return (
    <ControlsWrapper
      playing={+isPlaying}
      initialmute={+initialMute}
      controls={+controlsVisible}
      onMouseMove={handleControlsOnMouseMove}
      onMouseLeave={handleControlsOnMouseLeave}
    >
      <SeekerPreview controls={+controlsVisible} playedPercentage={(playedSeconds / duration) * 100} />
      <ControlsContainer>
        <VideoTitle variant='h1' controls={+controlsVisible}>
          {playerState.activeVideo?.videoTitle || ''}
        </VideoTitle>
        <Indicator handlePlaying={handlePlaying} />
        <ControlsBar handlePlaying={handlePlaying} />
      </ControlsContainer>
    </ControlsWrapper>
  );
};

export default PlayerControls;
