import { PlaylistWithUsers } from '@/domain/Playlist/model/Playlist.model';
import { SocketProvider } from '.';

const videoHandler = (socket: SocketProvider.ServerIO) => {
  socket.data.playerState = {
    playedSeconds: 0,
  };
  // const PLAY_VIDEO = (receivedData: PlayerState) => {
  //   socket.data.playerState = receivedData;
  //   // console.log(socket.data.playerState);
  //   socket.broadcast.emit('RECEIVE_PLAY_VIDEO', receivedData);
  // };
  // const PAUSE_VIDEO = (receivedData: PlayerState) => {
  //   socket.data.playerState = receivedData;
  //   // console.log(socket.data.playerState);
  //   socket.broadcast.emit('RECEIVE_PAUSE_VIDEO', receivedData);
  // };
  // socket.on('PLAY_VIDEO', PLAY_VIDEO);
  // socket.on('PAUSE_VIDEO', PAUSE_VIDEO);
  // socket.on('REQUEST_PLAYER_STATE', REQUEST_PLAYER_STATE);

  const SEEK_TO = (newPlayedSeconds: number) => socket.broadcast.emit('RECEIVE_SEEK_TO', newPlayedSeconds);

  const TOGGLE_PLAYING = () => socket.broadcast.emit('RECEIVE_TOGGLE_PLAYING');

  const SKIP_VIDEO = () => socket.broadcast.emit('RECEIVE_SKIP_VIDEO');

  const REQUEST_PLAYER_STATE = (callback: (playerState: { playedSeconds?: number } | undefined) => void) => {
    callback(socket.data.playerState);
  };

  const ADD_NEW_VIDEO = (newVideo: PlaylistWithUsers) => socket.broadcast.emit('RECEIVE_NEW_VIDEO', newVideo);

  const TOGGLE_PLAYLIST = () => socket.broadcast.emit('RECEIVE_TOGGLE_PLAYLIST');

  socket.on('SEEK_TO', SEEK_TO);
  socket.on('TOGGLE_PLAYING', TOGGLE_PLAYING);
  socket.on('SKIP_VIDEO', SKIP_VIDEO);
  socket.on('REQUEST_PLAYER_STATE', REQUEST_PLAYER_STATE);
  socket.on('ADD_NEW_VIDEO', ADD_NEW_VIDEO);
  socket.on('TOGGLE_PLAYLIST', TOGGLE_PLAYLIST);
};

export default videoHandler;
