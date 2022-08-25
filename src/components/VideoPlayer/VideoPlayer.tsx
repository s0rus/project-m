import React, { useEffect, useRef, useState } from 'react';
import type ReactPlayer from 'react-player';
import { StyledReactPlayer, VideoPlayerBox } from './VideoPlayer.styles';

const TEST_URL_CDA =
  'https://vwaw718.cda.pl/OSGPs0mXIKq2ouzJjw4iUQ/1661487345/lq132cff55a9392feedb83575c42de27331b1640ad7bbf055567f6eeed478116b6.mp4';

const TEST_URL_YT = 'https://www.youtube.com/watch?v=GrNdIShMQw4';

const VideoPlayer = () => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <VideoPlayerBox>
      {hasWindow && <StyledReactPlayer controls ref={playerRef} url={TEST_URL_YT} width='100%' height='100%' />}
    </VideoPlayerBox>
  );
};

export default VideoPlayer;
