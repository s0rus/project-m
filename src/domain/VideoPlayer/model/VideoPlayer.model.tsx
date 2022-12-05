import type { MutableRefObject } from 'react';
import { PauseRounded, PlayArrowRounded, VolumeDown, VolumeOff, VolumeUp } from '@mui/icons-material';

import type { Playlist } from '@prisma/client';
import type ReactPlayer from 'react-player';
import type { VideoProps } from '@/domain/Playlist/model/Playlist.model';

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

export interface VideoPlayerStore {
  playerRef: MutableRefObject<ReactPlayer> | null;
  setPlayerRef: (playerRef: MutableRefObject<ReactPlayer>) => void;
  resetPlayerState: () => void;
  activeVideo: VideoProps | undefined;
  setActiveVideo: (video: VideoProps | undefined) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  playedSeconds: number;
  setPlayedSeconds: (playedSeconds: number) => void;
  loadedSeconds: number;
  setLoadedSeconds: (loadedSeconds: number) => void;
  duration: number;
  setDuration: (duration: number) => void;
  volume: number;
  setVolume: (volume: number) => void;
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
  initialMute: boolean;
  setInitialMute: (initialMute: boolean) => void;
  controlsVisible: boolean;
  setControlsVisible: (controlsVisible: boolean) => void;
  isReady: boolean;
  setIsReady: (isReady: boolean) => void;
  seeking: boolean;
  setSeeking: (seeking: boolean) => void;
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
