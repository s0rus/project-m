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
} from '@/components/VideoPlayer/VideoPlayer.model';

import { LocalStorageKeys } from '@/utils/localStorageKeys';
import ReactPlayer from 'react-player';
import { usePlaylistContext } from './PlaylistContext';

const PlayerContext = createContext<InitialContextProps>(initialContextProps);

export const usePlayerContext = () => useContext<InitialContextProps>(PlayerContext);

export const PlayerContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { currentVideo } = usePlaylistContext();
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
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        isPlaying: !prevPlayerState.isPlaying,
      };
    });
  }, []);

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

  const handleSeek = useCallback((newPlayedSeconds: number) => {
    setPlayerState((prevPlayerState) => {
      return {
        ...prevPlayerState,
        playedSeconds: newPlayedSeconds,
      };
    });
  }, []);

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

  const value = {
    playerState,
    seekTo,
    setPlayerRef,
    handleProgress,
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
