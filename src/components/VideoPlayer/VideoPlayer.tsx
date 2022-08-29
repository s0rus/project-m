import { useSocketContext } from '@/contexts/SocketContext';
import { PlayerState } from '@/server/sockets/SocketProvider';
import useHasWindow from '@/utils/hasWindow';
import { TestUrl } from '@/utils/testUrls';
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import PlayerControls from './PlayerControls';
import { StyledReactPlayer, VideoPlayerBox } from './VideoPlayer.styles';

const initialPlayerState: PlayerState = {
  playedSeconds: 0,
  loadedSeconds: 0,
  duration: 0,
  playing: false,
};

const VideoPlayer = () => {
  const hasWindow = useHasWindow();
  // const { socket } = useSocketContext();
  const playerRef = useRef<ReactPlayer | null>(null);
  const [playing, setPlaying] = useState(false);
  const [playerState, setPlayerState] = useState<PlayerState>(initialPlayerState);
  const [seeking, setSeeking] = useState(false);

  // const getPlayerState = useCallback((): PlayerState => {
  //   return {
  //     playedSeconds: playerRef.current?.getCurrentTime() || 0,
  //     loadedSeconds: playerRef.current?.getSecondsLoaded() || 0,
  //     duration: playerRef.current?.getDuration() || 0,
  //     playing: !playing,
  //   };
  // }, [playing]);

  const seekTo = (seconds: number) => playerRef.current?.seekTo(seconds, 'seconds');

  // useEffect(() => {
  //   if (socket) {
  //     socket.on('RECEIVE_PLAY_VIDEO', (data) => {
  //       // console.log('RECEIVE_PLAY_VIDEO', data);
  //       if (data) {
  //         setPlaying(data.playing);
  //       }
  //     });

  //     socket.on('RECEIVE_PAUSE_VIDEO', (data) => {
  //       // console.log('RECEIVE_PAUSE_VIDEO', data);
  //       if (data) {
  //         setPlaying(data.playing);
  //       }
  //     });
  //   }
  // }, [socket, getPlayerState]);

  // const handlePlay = () => {
  //   if (!playing && socket) {
  //     socket.emit('PLAY_VIDEO', getPlayerState());
  //     setPlaying(true);
  //   }
  //   return;
  // };

  // const handlePause = () => {
  //   if (playing && socket) {
  //     socket.emit('PAUSE_VIDEO', getPlayerState());
  //     setPlaying(false);
  //   }
  //   return;
  // };

  // const handleReady = () =>
  //   socket &&
  //   socket.emit('REQUEST_PLAYER_STATE', (response) => {
  //     console.log(response);
  //   });

  const handleProgress = (e: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }) => {
    if (!seeking) {
      setPlayerState({
        duration: playerRef.current?.getDuration() || 0,
        loadedSeconds: e.loadedSeconds,
        playedSeconds: e.playedSeconds,
        playing,
      });
    }
  };

  const handlePlaying = () => {
    setPlaying((prevPlaying) => !prevPlaying);
  };

  const handleSeek = (newPlayedSeconds: number) => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        playedSeconds: newPlayedSeconds,
      };
    });
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = (newSecondsPlayed: number) => {
    setSeeking(false);
    seekTo(newSecondsPlayed);
  };

  return (
    <VideoPlayerBox>
      {hasWindow && (
        <>
          <StyledReactPlayer
            // onPlay={handlePlay}
            // onPause={handlePause}
            onProgress={handleProgress}
            // onReady={handleReady}
            onSeek={handleSeek}
            playing={playing}
            volume={0.5}
            ref={playerRef}
            url={TestUrl.YT}
            width='100%'
            height='100%'
          />
          <PlayerControls
            playing={playing}
            setPlaying={handlePlaying}
            duration={playerState.duration}
            position={playerState.playedSeconds}
            handleSeek={handleSeek}
            handleSeekMouseDown={handleSeekMouseDown}
            handleSeekMouseUp={handleSeekMouseUp}
          />
        </>
      )}
    </VideoPlayerBox>
  );
};

export default VideoPlayer;
