import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { PauseRounded, PlayArrowRounded, VolumeDown, VolumeOff, VolumeUp } from '@mui/icons-material';

import { Playlist } from '@prisma/client';
import ReactPlayer from 'react-player';

export interface PlayerState {
  isPlaying: boolean;
  playedSeconds: number;
  loadedSeconds: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  controlsVisible: boolean;
  initialMute: boolean;
  activeVideo: Playlist | undefined;
}

export const initialPlayerState: PlayerState = {
  playedSeconds: 0,
  loadedSeconds: 0,
  duration: 0,
  isPlaying: true,
  isMuted: true,
  volume: 0,
  controlsVisible: true,
  initialMute: true,
  activeVideo: undefined,
};

export interface InitialContextProps {
  playerState: PlayerState;
  setPlayerState: (value: SetStateAction<PlayerState>) => void;
  setPlayerRef: (playerRef: MutableRefObject<ReactPlayer>) => void;
  seekTo: (seconds: number) => void;
  handleProgress: (event: ProgressProps) => void;
  togglePlaying: () => void;
  handleSeek: (newSecondsPlayed: number) => void;
  seeking: boolean;
  setSeeking: Dispatch<SetStateAction<boolean>>;
  setVolume: (_: Event, value: number | number[]) => void;
  toggleMuted: () => void;
  toggleControls: (newControlsVisibility: boolean) => void;
  disableInitialMute: () => void;
}

export const initialContextProps = {
  playerState: initialPlayerState,
  setPlayerState: () => null,
  seekTo: () => null,
  setPlayerRef: () => null,
  handleProgress: () => null,
  togglePlaying: () => null,
  handleSeek: () => null,
  seeking: false,
  setSeeking: () => null,
  setVolume: () => null,
  toggleMuted: () => null,
  toggleControls: () => null,
  disableInitialMute: () => null,
};

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

export const getPlayingStateIcon = (isPlaying: boolean, initialMute?: boolean) => {
  if (initialMute) return <VolumeOff />;
  if (isPlaying) return <PauseRounded />;
  return <PlayArrowRounded />;
};
