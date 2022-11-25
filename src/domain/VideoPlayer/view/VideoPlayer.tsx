import type { MutableRefObject } from 'react';
import { useCallback } from 'react';
import React, { useEffect, useId, useRef } from 'react';
import { StyledReactPlayer, VideoPlayerBox, VideoPlayerContainer, EmptyPlayer } from './VideoPlayer.styles';
import { Typography, Hidden } from '@mui/material';
import PlayerControls from '../components/PlayerControls';
import type ReactPlayer from 'react-player';
import TwitchChat from '@/domain/TwitchChat/view/TwitchChat';
import { theme } from '@/styles/theme';
import { useAddonsContext } from '@/domain/App/context/Addons.context';
import useHasWindow from '../utils/hasWindow';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { ProgressProps } from '../model/VideoPlayer.model';
import { getPlayerConfig } from '../model/VideoPlayer.model';
import { useVideoPlayerStore } from '../store/VideoPlayer.store';
import { useVideoPlayer } from '../hooks/useVideoPlayer';
import { useSocketStore } from '@/domain/App/store/Socket.store';
import { usePlaylistStore } from '@/domain/Playlist/store/Playlist.store';
import MadgeIcon from '@/domain/Icons/MadgeIcon.svg';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Playlist from '@/domain/Playlist/view/Playlist';
import DashboardBar from '@/domain/Dashboard/components/DashboardBar';
const VideoPlayer = () => {
  const hasWindow = useHasWindow();
  const { isChatOn, isPlaylistOn } = useAddonsContext();
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  const socket = useSocketStore((state) => state.socket);
  const { t } = useTranslation();

  const playerId = useId();
  const playerRef = useRef<ReactPlayer | null>(null);
  const currentVideo = usePlaylistStore((state) => state.currentVideo);

  const {
    handleOnReady,
    handleOnError,
    handleOnEnd,
    seekTo,
    requestPlayerState,
    getPlayedSeconds,
    handleRecievedPlayerState,
  } = useVideoPlayer();
  const setPlayerRef = useVideoPlayerStore((state) => state.setPlayerRef);
  const setActiveVideo = useVideoPlayerStore((state) => state.setActiveVideo);
  const setLoadedSeconds = useVideoPlayerStore((state) => state.setLoadedSeconds);
  const setPlayedSeconds = useVideoPlayerStore((state) => state.setPlayedSeconds);
  const setDuration = useVideoPlayerStore((state) => state.setDuration);
  const isPlaying = useVideoPlayerStore((state) => state.isPlaying);
  const setIsPlaying = useVideoPlayerStore((state) => state.setIsPlaying);
  const activeVideo = useVideoPlayerStore((state) => state.activeVideo);
  const volume = useVideoPlayerStore((state) => state.volume);
  const isMuted = useVideoPlayerStore((state) => state.isMuted);
  const seeking = useVideoPlayerStore((state) => state.seeking);

  useEffect(() => {
    if (playerRef) {
      setPlayerRef(playerRef as MutableRefObject<ReactPlayer>);
    }
  }, [setPlayerRef]);

  useEffect(() => {
    setDuration(currentVideo?.videoDuration || 0);
    setActiveVideo(currentVideo);
  }, [currentVideo, setActiveVideo, setDuration]);

  const handleProgress = useCallback(
    ({ loadedSeconds, playedSeconds }: ProgressProps) => {
      if (!seeking) {
        setLoadedSeconds(loadedSeconds);
        setPlayedSeconds(playedSeconds);
      }
    },
    [setLoadedSeconds, setPlayedSeconds, seeking]
  );

  useEffect(() => {
    if (socket) {
      socket.on('RECEIVE_TOGGLE_PLAYING', (newPlayingState) => setIsPlaying(newPlayingState));
      socket.on('RECEIVE_SEEK_TO', (newSecondsPlayed) => seekTo(newSecondsPlayed));
      socket.on('RECEIVE_SKIP_VIDEO', (targetVideoId) => handleOnEnd(targetVideoId));
      socket.on('RECEIVE_PLAYER_STATE', (recievedPlayerState) => handleRecievedPlayerState(recievedPlayerState));

      socket.on('RECEIVE_REQUEST_PLAYER_STATE', (socketId) => {
        socket.emit(
          'SEND_PLAYER_STATE',
          {
            isPlaying,
            playedSeconds: getPlayedSeconds(),
          },
          socketId
        );
      });
    }

    return () => {
      if (socket) {
        socket.off('RECEIVE_TOGGLE_PLAYING');
        socket.off('RECEIVE_SEEK_TO');
        socket.off('RECEIVE_SKIP_VIDEO');
        socket.off('RECEIVE_PLAYER_STATE');
        socket.off('RECEIVE_REQUEST_PLAYER_STATE');
      }
    };
  }, [
    socket,
    setIsPlaying,
    seekTo,
    setPlayedSeconds,
    handleOnEnd,
    requestPlayerState,
    handleRecievedPlayerState,
    isPlaying,
    getPlayedSeconds,
  ]);

  return (
    <>
      <VideoPlayerContainer style={{ padding: isMediumDown ? '0' : '3rem 3rem' }}>
        <VideoPlayerBox style={{ height: isMediumDown ? '65vh' : '80vh' }}>
          {!currentVideo ? (
            <>
              <EmptyPlayer>
                <Typography variant='h4'>{t('playlist.empty')}</Typography>
                <Image src={MadgeIcon} alt='Madge' height={48} width={48} />
              </EmptyPlayer>
              <PlayerControls />
              <DashboardBar />
            </>
          ) : (
            <>
              <>
                {hasWindow && (
                  <>
                    <StyledReactPlayer
                      onReady={handleOnReady}
                      onError={handleOnError}
                      onProgress={handleProgress}
                      onEnded={handleOnEnd}
                      playing={isPlaying}
                      muted={isMuted}
                      volume={volume}
                      ref={playerRef}
                      height='100%'
                      width='100%'
                      url={activeVideo?.videoUrl}
                      config={getPlayerConfig(playerId)}
                    />
                    <PlayerControls />
                    <DashboardBar />
                  </>
                )}
              </>
            </>
          )}
        </VideoPlayerBox>
        <Hidden lgDown>{isPlaylistOn && <Playlist />}</Hidden>
        <Hidden lgDown>{isChatOn && <TwitchChat />}</Hidden>
      </VideoPlayerContainer>
    </>
  );
};

export default VideoPlayer;
