import {
    InitialContextProps,
    initialContextProps,
    initialPlayerState,
    PlayerState,
    ProgressProps,
  } from '@/components/VideoPlayer/VideoPlayer.model';
  import { createContext, FC, MutableRefObject, PropsWithChildren, useCallback, useContext, useState } from 'react';
  import ReactPlayer from 'react-player';
  
  const PlayerContext = createContext<InitialContextProps>(initialContextProps);
  
  export const usePlayerContext = () => useContext<InitialContextProps>(PlayerContext);
  
  export const PlayerContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [playerState, setPlayerState] = useState<PlayerState>(initialPlayerState);
    const [seeking, setSeeking] = useState(false);
    const [playerRef, setPlayerRef] = useState<MutableRefObject<ReactPlayer> | null>(null);
  
    const seekTo = useCallback((seconds: number) => playerRef?.current.seekTo(seconds, 'seconds'), [playerRef]);
    const getDuration = useCallback(() => playerRef?.current.getDuration(), [playerRef]);
  
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
        };
      });
    }, []);
  
    const setVolume = useCallback((_: Event, value: number | number[]) => {
      setPlayerState((prevPlayerState) => {
        return {
          ...prevPlayerState,
          volume: value as number,
          isMuted: prevPlayerState.isMuted && false,
        };
      });
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
    };
  
    return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
  };