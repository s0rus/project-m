import { PlaylistWithUsers } from '@/domain/Playlist/model/Playlist.model';
import { SocketProvider } from '.';

const videoHandler = (socket: SocketProvider.ServerIO) => {
  const SEEK_TO = (newPlayedSeconds: number) => socket.broadcast.emit('RECEIVE_SEEK_TO', newPlayedSeconds);

  const TOGGLE_PLAYING = (newPlayingState: boolean) => socket.broadcast.emit('RECEIVE_TOGGLE_PLAYING', newPlayingState);

  const SKIP_VIDEO = () => socket.broadcast.emit('RECEIVE_SKIP_VIDEO');

  const ADD_NEW_VIDEO = (newVideo: PlaylistWithUsers) => socket.broadcast.emit('RECEIVE_NEW_VIDEO', newVideo);

  const TOGGLE_PLAYLIST = () => socket.broadcast.emit('RECEIVE_TOGGLE_PLAYLIST');

  socket.on('SEEK_TO', SEEK_TO);
  socket.on('TOGGLE_PLAYING', TOGGLE_PLAYING);
  socket.on('SKIP_VIDEO', SKIP_VIDEO);
  socket.on('ADD_NEW_VIDEO', ADD_NEW_VIDEO);
  socket.on('TOGGLE_PLAYLIST', TOGGLE_PLAYLIST);
};

export default videoHandler;
