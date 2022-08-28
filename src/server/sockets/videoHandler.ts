import { SocketProvider } from '.';
import { PlayerState } from './SocketProvider';

const videoHandler = (socket: SocketProvider.ServerIO) => {
  socket.data.playerState = {
    loadedSeconds: 0,
    playedSeconds: 0,
    duration: 0,
    playing: false,
  };

  const PLAY_VIDEO = (receivedData: PlayerState) => {
    socket.data.playerState = receivedData;
    // console.log(socket.data.playerState);
    socket.broadcast.emit('RECEIVE_PLAY_VIDEO', receivedData);
  };

  const PAUSE_VIDEO = (receivedData: PlayerState) => {
    socket.data.playerState = receivedData;
    // console.log(socket.data.playerState);
    socket.broadcast.emit('RECEIVE_PAUSE_VIDEO', receivedData);
  };

  const REQUEST_PLAYER_STATE = () => {
    socket.broadcast.emit('RECEIVE_PLAYER_STATE_REQUEST');
  };

  const SEND_PLAYER_STATE = (receivedData: PlayerState) => {
    socket.data.playerState = receivedData;
    socket.broadcast.emit('RECEIVE_PLAYER_STATE', receivedData);
  };

  socket.on('PLAY_VIDEO', PLAY_VIDEO);
  socket.on('PAUSE_VIDEO', PAUSE_VIDEO);
  socket.on('REQUEST_PLAYER_STATE', REQUEST_PLAYER_STATE);
  socket.on('SEND_PLAYER_STATE', SEND_PLAYER_STATE);
};

export default videoHandler;
