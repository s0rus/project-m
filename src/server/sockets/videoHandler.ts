import { PlaylistWithUsers } from '@/domain/Playlist/model/Playlist.model';
import { SocketProvider } from '.';

const videoHandler = (socket: SocketProvider.ServerIO) => {
  socket.data.playerState = {
    playedSeconds: 60,
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

  const TOGGLE_PLAYING = () => {
    console.log('TOGGLE PLAYING INVOKED');
    socket.broadcast.emit('RECEIVE_TOGGLE_PLAYING');
  };

  const REQUEST_PLAYER_STATE = (callback: (playerState: { playedSeconds?: number } | undefined) => void) => {
    callback(socket.data.playerState);
  };

  const ADD_NEW_VIDEO = (newVideo: PlaylistWithUsers) => socket.broadcast.emit('RECEIVE_NEW_VIDEO', newVideo);

  socket.on('SEEK_TO', SEEK_TO);
  socket.on('TOGGLE_PLAYING', TOGGLE_PLAYING);
  socket.on('REQUEST_PLAYER_STATE', REQUEST_PLAYER_STATE);
  socket.on('ADD_NEW_VIDEO', ADD_NEW_VIDEO);
};

export default videoHandler;
