import { useSocketContext } from '@/contexts/SocketContext';
import { PlayerState } from '@/server/sockets/SocketProvider';
import useHasWindow from '@/utils/hasWindow';
import { TestUrl } from '@/utils/testUrls';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { StyledReactPlayer, VideoPlayerBox } from './VideoPlayer.styles';

const initialPlayerState: PlayerState = {
  playedSeconds: 0,
  loadedSeconds: 0,
  duration: 0,
  playing: false,
};

const VideoPlayer = () => {
  const hasWindow = useHasWindow();
  const { socket } = useSocketContext();
  const playerRef = useRef<ReactPlayer | null>(null);
  const [playing, setPlaying] = useState(false);
  const [playerState, setPlayerState] = useState<PlayerState>(initialPlayerState);

  const getPlayerState = useCallback(
    (reversedPlaying?: boolean): PlayerState => {
      return {
        playedSeconds: playerRef.current?.getCurrentTime() || 0,
        loadedSeconds: playerRef.current?.getSecondsLoaded() || 0,
        duration: playerRef.current?.getDuration() || 0,
        playing: !reversedPlaying ? !playing : playing,
      };
    },
    [playing]
  );

  const seekTo = (seconds: number) => playerRef.current?.seekTo(seconds, 'seconds');

  useEffect(() => {
    if (socket) {
      socket.on('RECEIVE_PLAY_VIDEO', (data) => {
        // console.log('RECEIVE_PLAY_VIDEO', data);
        if (data) {
          setPlaying(data.playing);
        }
      });

      socket.on('RECEIVE_PAUSE_VIDEO', (data) => {
        // console.log('RECEIVE_PAUSE_VIDEO', data);
        if (data) {
          setPlaying(data.playing);
        }
      });

      socket.on('RECEIVE_PLAYER_STATE_REQUEST', () => {
        console.log('RECEIVE_PLAYER_STATE_REQUEST');
        socket.emit('SEND_PLAYER_STATE', getPlayerState(true));
      });

      socket.on('RECEIVE_PLAYER_STATE', (data) => {
        setPlayerState({
          duration: data?.duration || 0,
          loadedSeconds: data?.loadedSeconds || 0,
          playedSeconds: data?.loadedSeconds || 0,
          playing: data?.playing || false,
        });
        setPlaying(data?.playing || false);
        seekTo(data?.playedSeconds || 0);
        console.log('RECEIVE_PLAYER_STATE', data);
      });
    }
  }, [socket, getPlayerState]);

  const handlePlay = () => {
    if (!playing && socket) {
      socket.emit('PLAY_VIDEO', getPlayerState());
      setPlaying(true);
    }
    return;
  };

  const handlePause = () => {
    if (playing && socket) {
      socket.emit('PAUSE_VIDEO', getPlayerState());
      setPlaying(false);
    }
    return;
  };

  const handleReady = () => socket && socket.emit('REQUEST_PLAYER_STATE');

  const handleProgress = (e: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }) => {
    setPlayerState({
      duration: playerRef.current?.getDuration() || 0,
      loadedSeconds: e.loadedSeconds,
      playedSeconds: e.playedSeconds,
      playing,
    });
  };

  return (
    <VideoPlayerBox>
      {hasWindow && (
        <StyledReactPlayer
          onPlay={handlePlay}
          onPause={handlePause}
          onProgress={handleProgress}
          onReady={handleReady}
          playing={playing}
          muted
          controls
          ref={playerRef}
          url={TestUrl.YT}
          width='100%'
          height='100%'
        />
      )}
    </VideoPlayerBox>
  );
};

export default VideoPlayer;
