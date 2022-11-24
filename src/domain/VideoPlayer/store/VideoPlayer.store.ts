import create from 'zustand';
import type { VideoPlayerStore } from '../model/VideoPlayer.model';

export const useVideoPlayerStore = create<VideoPlayerStore>((set) => ({
  playerRef: null,
  setPlayerRef: (playerRef) => set({ playerRef }),
  resetPlayerState: () => {
    set({ activeVideo: undefined, isReady: false, duration: 0, loadedSeconds: 0, playedSeconds: 0 });
  },
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  loadedSeconds: 0,
  setLoadedSeconds: (loadedSeconds) => set({ loadedSeconds }),
  playedSeconds: 0,
  setPlayedSeconds: (playedSeconds) => set({ playedSeconds }),
  duration: 0,
  setDuration: (duration) => set({ duration }),
  volume: 0.5,
  setVolume: (volume) => set({ volume }),
  controlsVisible: true,
  setControlsVisible: (controlsVisible) => set({ controlsVisible }),
  initialMute: true,
  setInitialMute: (initialMute) => set({ initialMute }),
  isMuted: true,
  setIsMuted: (isMuted) => set({ isMuted }),
  isReady: false,
  setIsReady: (isReady) => set({ isReady }),
  activeVideo: undefined,
  setActiveVideo: (activeVideo) => set({ activeVideo }),
  seeking: false,
  setSeeking: (seeking) => set({ seeking }),
}));
