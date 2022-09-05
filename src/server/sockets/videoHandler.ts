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

  const REQUEST_PLAYER_STATE = (callback: (obj: { yikes: string }) => void) => {
    callback({ yikes: 'yikers' });
  };

  socket.on('PLAY_VIDEO', PLAY_VIDEO);
  socket.on('PAUSE_VIDEO', PAUSE_VIDEO);
  socket.on('REQUEST_PLAYER_STATE', REQUEST_PLAYER_STATE);
};

export default videoHandler;
