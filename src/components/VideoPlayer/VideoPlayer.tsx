import { useSocketContext } from '@/contexts/SocketContext';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { StyledReactPlayer, VideoPlayerBox } from './VideoPlayer.styles';

const TEST_URL_CDA = 'https://vwaw318.cda.pl/MJQ8KDvTLhCZRuyfWujvrg/1661553860/lqf3da2d2445568551f2948a2dd43d8f70.mp4';

const TEST_URL_YT = 'https://www.youtube.com/watch?v=GrNdIShMQw4';

const VideoPlayer = () => {
  const { socket } = useSocketContext();
  const playerRef = useRef<ReactPlayer | null>(null);
  const [hasWindow, setHasWindow] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('RECEIVE_PLAY_VIDEO', () => setPlaying(true));

      socket.on('RECEIVE_PAUSE_VIDEO', () => setPlaying(false));
    }
  }, [socket]);

  const handlePlay = () => {
    if (!playing && socket) socket.emit('PLAY_VIDEO');
    return;
  };

  const handlePause = () => {
    if (playing && socket) socket.emit('PAUSE_VIDEO');
    return;
  };

  return (
    <VideoPlayerBox>
      {hasWindow && (
        <StyledReactPlayer
          onPlay={handlePlay}
          onPause={handlePause}
          playing={playing}
          muted
          controls
          ref={playerRef}
          url={TEST_URL_YT}
          width='100%'
          height='100%'
        />
      )}
    </VideoPlayerBox>
  );
};

export default VideoPlayer;
