import {
  FC,
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  InitialContextProps,
  PlayerState,
  ProgressProps,
  initialContextProps,
  initialPlayerState,
} from '../model/VideoPlayer.model';

import { CustomToast } from '@/utils/sendToast';
import { LocalStorageKeys } from '@/utils/localStorageKeys';
import ReactPlayer from 'react-player';
import { ToastTypes } from '@/utils/ToastTypes';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePlaylistContext } from '../../Playlist/context/PlaylistContext';
import { useSocketContext } from '@/contexts/SocketContext';
import { useTranslation } from 'react-i18next';

const PlayerContext = createContext<InitialContextProps>(initialContextProps);

export const usePlayerContext = () => useContext<InitialContextProps>(PlayerContext);

export const PlayerContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();
  const { isAdmin } = useAuthContext();
  const { socket } = useSocketContext();
  const { currentVideo, requestNextVideo, handleSkipVideo } = usePlaylistContext();
  const [playerState, setPlayerState] = useState<PlayerState>(initialPlayerState);
  const [seeking, setSeeking] = useState(false);
  const [playerRef, setPlayerRef] = useState<MutableRefObject<ReactPlayer> | null>(null);

  const seekTo = useCallback((seconds: number) => playerRef?.current?.seekTo(seconds, 'seconds'), [playerRef]);
  const getDuration = useCallback(() => playerRef?.current?.getDuration() || 0, [playerRef]);
  const getPlayedSeconds = useCallback(() => playerRef?.current?.getCurrentTime() || 0, [playerRef]);
  const isPlayerPlaying = useMemo(() => playerState.isPlaying, [playerState.isPlaying]);

  useEffect(() => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        activeVideo: currentVideo,
        isPlaying: true,
      };
    });
  }, [currentVideo]);

  useEffect(() => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        volume: Number(localStorage.getItem(LocalStorageKeys.PlayerVolume)) || 0.5,
      };
    });
  }, []);

  const togglePlaying = useCallback((newPlayingState: boolean) => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        isPlaying: newPlayingState,
      };
    });
  }, []);

  const toggleMuted = useCallback(() => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        isMuted: prevPlayerState.isReady && !prevPlayerState.isMuted,
        initialMute: prevPlayerState.initialMute && prevPlayerState.isReady && false,
      };
    });
  }, []);

  const setVolume = useCallback((_: Event, value: number | number[]) => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        volume: value as number,
        isMuted: prevPlayerState.isMuted && false,
        initialMute: prevPlayerState.initialMute && false,
      };
    });
    localStorage.setItem(LocalStorageKeys.PlayerVolume, JSON.stringify(value as number));
  }, []);

  const handleProgress = useCallback(
    ({ loadedSeconds, playedSeconds }: ProgressProps) => {
      if (!seeking) {
        setPlayerState((prevPlayerState) => {
          return {
            ...prevPlayerState,
            duration: getDuration() || 0,
            playedSeconds,
            loadedSeconds,
          };
        });
      }
    },
    [seeking, getDuration]
  );

  const handleSeek = useCallback(
    (newPlayedSeconds: number) => {
      if (isAdmin) {
        socket && socket.emit('SEEK_TO', newPlayedSeconds);
        setPlayerState((prevPlayerState) => {
          return {
            ...prevPlayerState,
            playedSeconds: newPlayedSeconds,
          };
        });
      }
    },
    [isAdmin, socket]
  );

  const toggleControls = useCallback((newControlsVisibility: boolean) => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        controlsVisible: newControlsVisibility,
      };
    });
  }, []);

  const disableInitialMute = useCallback(() => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        initialMute: false,
        isMuted: false,
      };
    });
  }, []);

  const handleOnEnd = useCallback(() => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        duration: 0,
        playedSeconds: 0,
        loadedSeconds: 0,
        activeVideo: undefined,
      };
    });

    requestNextVideo();
  }, [requestNextVideo]);

  const handleOnVideoSkip = useCallback(() => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        duration: 0,
        playedSeconds: 0,
        loadedSeconds: 0,
        activeVideo: undefined,
      };
    });

    handleSkipVideo();
  }, [handleSkipVideo]);

  const handleOnError = useCallback(() => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        duration: 0,
        playedSeconds: 0,
        loadedSeconds: 0,
        activeVideo: undefined,
      };
    });
    requestNextVideo();
  }, [t, requestNextVideo]);

  const handleOnReady = useCallback(() => {
    if (!playerState.isReady) {
      setPlayerState((prevPlayerState) => {
        return {
          ...prevPlayerState,
          isReady: true,
        };
      });
    }
  }, [playerState.isReady]);

  useEffect(() => {
    if (!socket) return;

    socket.on('RECEIVE_REQUEST_PLAYER_STATE', (socketId) => {
      const currentPlayedSeconds = getPlayedSeconds() || 0;
      const playedSecondsWithDelay = isPlayerPlaying ? currentPlayedSeconds + 1 : currentPlayedSeconds;

      socket.emit(
        'SEND_PLAYER_STATE',
        {
          isPlaying: isPlayerPlaying,
          playedSeconds: playedSecondsWithDelay,
        },
        socketId
      );
    });
  }, [socket, getPlayedSeconds, isPlayerPlaying]);

  useEffect(() => {
    if (!socket) return;

    socket.emit('REQUEST_PLAYER_STATE');
    socket.on('RECEIVE_TOGGLE_PLAYING', (newPlayingState) => togglePlaying(newPlayingState));
    socket.on('RECEIVE_SEEK_TO', (newSecondsPlayed) => seekTo(newSecondsPlayed));
    socket.on('RECEIVE_SKIP_VIDEO', () => handleOnEnd());
    socket.on('RECEIVE_PLAYER_STATE', (receivedPlayerState) => {
      if (receivedPlayerState) {
        setPlayerState((prevPlayerState) => {
          return {
            ...prevPlayerState,
            isPlaying: receivedPlayerState.isPlaying,
            playedSeconds: receivedPlayerState.playedSeconds,
          };
        });
        seekTo(receivedPlayerState.playedSeconds);
      }
    });

    return () => {
      socket.off('RECEIVE_TOGGLE_PLAYING');
      socket.off('RECEIVE_SEEK_TO');
      socket.off('RECEIVE_SKIP_VIDEO');
      socket.off('RECEIVE_PLAYER_STATE');
    };
  }, [socket, togglePlaying, handleOnEnd, seekTo]);

  const value = useMemo(
    () => ({
      playerState,
      setPlayerState,
      seekTo,
      setPlayerRef,
      handleProgress,
      handleOnVideoSkip,
      handleOnEnd,
      handleOnError,
      handleOnReady,
      togglePlaying,
      handleSeek,
      seeking,
      setSeeking,
      toggleMuted,
      setVolume,
      toggleControls,
      disableInitialMute,
    }),
    [
      playerState,
      setPlayerState,
      seekTo,
      setPlayerRef,
      handleProgress,
      handleOnVideoSkip,
      handleOnEnd,
      handleOnError,
      handleOnReady,
      togglePlaying,
      handleSeek,
      seeking,
      setSeeking,
      toggleMuted,
      setVolume,
      toggleControls,
      disableInitialMute,
    ]
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
};
