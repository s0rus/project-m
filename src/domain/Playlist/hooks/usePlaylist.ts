import { useSocketStore } from '@/domain/App/store/Socket.store';
import { trpc } from '@/utils/trpc';
import { useEffect } from 'react';
import { usePlaylistStore } from '../store/Playlist.store';
import { queryParams } from '../utils/queryParams';

export const usePlaylist = () => {
  const { socket } = useSocketStore();
  const currentVideo = usePlaylistStore((state) => state.currentVideo);
  const setCurrentVideo = usePlaylistStore((state) => state.setCurrentVideo);
  const addVideoToPlaylist = usePlaylistStore((state) => state.addVideoToPlaylist);
  const deleteVideoFromPlaylist = usePlaylistStore((state) => state.deleteVideoFromPlaylist);
  const playlist = usePlaylistStore((state) => state.playlist);
  const setPlaylist = usePlaylistStore((state) => state.setPlaylist);
  const isPlaylistLocked = usePlaylistStore((state) => state.isPlaylistLocked);
  const setIsPlaylistLocked = usePlaylistStore((state) => state.setIsPlaylistLocked);

  const {
    data: playlistData,
    // isSuccess: isPlaylistDataResolved,
    // isLoading: isPlaylistDataLoading,
  } = trpc.useQuery(['playlist.get-all'], queryParams);

  const {
    data: playlistState,
    // isLoading: isPlaylistStateLoading,
    // isSuccess: isPlaylistStateResolved,
  } = trpc.useQuery(['playlist.get-playlist-state'], queryParams);

  useEffect(() => {
    if (!currentVideo) {
      setCurrentVideo(playlist[0]);
    }
  }, [currentVideo, playlist, setCurrentVideo]);

  useEffect(() => {
    setPlaylist(playlistData || []);
    setCurrentVideo(playlistData?.[0]);
    setIsPlaylistLocked(playlistState?.playlistLocked || true);
  }, [playlistData, playlistState, setPlaylist, setCurrentVideo, setIsPlaylistLocked]);

  useEffect(() => {
    if (socket) {
      socket.on('RECEIVE_TOGGLE_PLAYLIST', () => setIsPlaylistLocked(!isPlaylistLocked));
      socket.on('RECEIVE_NEW_VIDEO', (newVideo) => addVideoToPlaylist(newVideo));
      socket.on('RECEIVE_DELETE_VIDEO', (videoId) => deleteVideoFromPlaylist(videoId));
    }

    return () => {
      if (socket) {
        socket.off('RECEIVE_TOGGLE_PLAYING');
        socket.off('RECEIVE_NEW_VIDEO');
        socket.off('RECEIVE_DELETE_VIDEO');
      }
    };
  }, [socket, addVideoToPlaylist, deleteVideoFromPlaylist, isPlaylistLocked, setIsPlaylistLocked]);
};
