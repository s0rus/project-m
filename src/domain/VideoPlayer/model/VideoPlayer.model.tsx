import type { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { PauseRounded, PlayArrowRounded, VolumeDown, VolumeOff, VolumeUp } from '@mui/icons-material';

import type { Playlist } from '@prisma/client';
import type ReactPlayer from 'react-player';

export const HIDE_CONTROLS_TIMEOUT = 4000;
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
  isReady: boolean;
}

export const initialPlayerState: PlayerState = {
  playedSeconds: 0,
  loadedSeconds: 0,
  duration: 0,
  isPlaying: false,
  isMuted: true,
  volume: 0,
  controlsVisible: true,
  initialMute: true,
  activeVideo: undefined,
  isReady: false,
};

export interface InitialContextProps {
  playerState: PlayerState;
  setPlayerState: (value: SetStateAction<PlayerState>) => void;
  setPlayerRef: (playerRef: MutableRefObject<ReactPlayer>) => void;
  seekTo: (seconds: number) => void;
  handleProgress: (event: ProgressProps) => void;
  handleOnEnd: () => void;
  handleOnVideoSkip: () => void;
  handleOnPlayVideoNow: () => void;
  handleOnError: () => void;
  handleOnReady: () => void;
  togglePlaying: (newPlayingState: boolean, localPause?: boolean) => void;
  handleSeek: (newSecondsPlayed: number) => void;
  seeking: boolean;
  setSeeking: Dispatch<SetStateAction<boolean>>;
  setVolume: (_: Event, value: number | number[]) => void;
  toggleMuted: () => void;
  toggleControls: (newControlsVisibility: boolean) => void;
  disableInitialMute: () => void;
  requestPlayerState: () => void;
}

export const initialContextProps = {
  playerState: initialPlayerState,
  setPlayerState: () => null,
  seekTo: () => null,
  setPlayerRef: () => null,
  handleProgress: () => null,
  handleOnEnd: () => null,
  handleOnVideoSkip: () => null,
  handleOnPlayVideoNow: () => null,
  handleOnError: () => null,
  handleOnReady: () => null,
  togglePlaying: () => null,
  handleSeek: () => null,
  seeking: false,
  setSeeking: () => null,
  setVolume: () => null,
  toggleMuted: () => null,
  toggleControls: () => null,
  disableInitialMute: () => null,
  requestPlayerState: () => null,
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

export const getPlayerConfig = (playerId: string) => ({
  youtube: {
    playerVars: {
      modestbranding: 1,
    },
  },
  vimeo: {
    playerOptions: {
      controls: false,
      loop: false,
    },
  },
  soundcloud: {
    options: {
      auto_play: false,
    },
  },
  wistia: {
    options: {
      controlsVisibleOnLoad: false,
      copyLinkAndThumbnailEnabled: false,
      doNotTrack: true,
      fullscreenButton: false,
      googleAnalytics: false,
    },
  },
  facebook: {
    playerId: playerId,
  },
  mixcloud: {
    options: {
      disablePushstate: true,
      disableHotkeys: true,
      disableUnloadWarning: true,
      hide_artwork: true,
    },
  },
  dailymotion: {
    params: {
      controls: false,
    },
  },
  twitch: {
    playerId: playerId,
    options: {
      muted: false,
    },
  },
  file: {
    forceVideo: true,
    attributes: {
      controls: false,
    },
  },
});
