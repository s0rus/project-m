import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import ReactPlayer from 'react-player';
import { VolumeUp, VolumeDown, VolumeOff } from '@mui/icons-material';

export const initialPlayerState = {
  playedSeconds: 0,
  loadedSeconds: 0,
  duration: 0,
  isPlaying: false,
  isMuted: true,
  volume: 0.5,
};

export interface InitialContextProps {
  playerState: PlayerState;
  setPlayerRef: (playerRef: MutableRefObject<ReactPlayer>) => void;
  seekTo: (seconds: number) => void;
  handleProgress: (event: ProgressProps) => void;
  togglePlaying: () => void;
  handleSeek: (newSecondsPlayed: number) => void;
  seeking: boolean;
  setSeeking: Dispatch<SetStateAction<boolean>>;
  setVolume: (_: Event, value: number | number[]) => void;
  toggleMuted: () => void;
}

export const initialContextProps = {
  playerState: initialPlayerState,
  seekTo: () => null,
  setPlayerRef: () => null,
  handleProgress: () => null,
  togglePlaying: () => null,
  handleSeek: () => null,
  seeking: false,
  setSeeking: () => null,
  setVolume: () => null,
  toggleMuted: () => null,
};

export interface PlayerState {
  isPlaying: boolean;
  playedSeconds: number;
  loadedSeconds: number;
  duration: number;
  volume: number;
  isMuted: boolean;
}

export interface ProgressProps {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

export const getVolumeIcon = (isMuted: boolean, volume: number) => {
  if (isMuted || volume === 0) return <VolumeOff />;
  if (volume >= 0.5) return <VolumeUp />;
  return <VolumeDown />;
};