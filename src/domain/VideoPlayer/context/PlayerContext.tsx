import {
  FC,
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  InitialContextProps,
  PlayerState,
  ProgressProps,
  initialContextProps,
  initialPlayerState,
} from '../model/VideoPlayer.model';

import { LocalStorageKeys } from '@/utils/localStorageKeys';
import ReactPlayer from 'react-player';
import useAuth from '@/hooks/useAuth';
import { usePlaylistContext } from '../../Playlist/context/PlaylistContext';
import { useSocketContext } from '@/contexts/SocketContext';

const PlayerContext = createContext<InitialContextProps>(initialContextProps);

export const usePlayerContext = () => useContext<InitialContextProps>(PlayerContext);

export const PlayerContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isAdmin } = useAuth();
  const { socket } = useSocketContext();
  const { currentVideo, requestNextVideo } = usePlaylistContext();
  const [playerState, setPlayerState] = useState<PlayerState>(initialPlayerState);
  const [seeking, setSeeking] = useState(false);
  const [playerRef, setPlayerRef] = useState<MutableRefObject<ReactPlayer> | null>(null);

  const seekTo = useCallback((seconds: number) => playerRef?.current.seekTo(seconds, 'seconds'), [playerRef]);
  const getDuration = useCallback(() => playerRef?.current.getDuration(), [playerRef]);

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

  const togglePlaying = useCallback(() => {
    if (isAdmin) {
      //TODO: add local toggle for admin
      socket.emit('TOGGLE_PLAYING');
    }
    setPlayerState((prevPlayerState) => {
      //TODO: handle synchro after local pause

      return {
        ...prevPlayerState,
        isPlaying: !prevPlayerState.isPlaying,
      };
    });
  }, [isAdmin, socket]);

  const toggleMuted = useCallback(() => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        isMuted: !prevPlayerState.isMuted,
        initialMute: prevPlayerState.initialMute && false,
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

  useEffect(() => {
    if (!socket) return;

    socket.emit('REQUEST_PLAYER_STATE', (receivedPlayerState) => seekTo(receivedPlayerState?.playedSeconds || 0));
  }, [socket, seekTo]);

  useEffect(() => {
    if (!socket) return;

    socket.on('RECEIVE_TOGGLE_PLAYING', () => togglePlaying());
  }, [socket, togglePlaying]);

  useEffect(() => {
    if (!socket) return;

    socket.on('RECEIVE_SEEK_TO', (newSecondsPlayed) => seekTo(newSecondsPlayed));

    socket.on('RECEIVE_SKIP_VIDEO', () => handleOnEnd());
  }, [socket, seekTo, togglePlaying, handleOnEnd]);

  const value = {
    playerState,
    setPlayerState,
    seekTo,
    setPlayerRef,
    handleProgress,
    handleOnEnd,
    togglePlaying,
    handleSeek,
    seeking,
    setSeeking,
    toggleMuted,
    setVolume,
    toggleControls,
    disableInitialMute,
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
};
