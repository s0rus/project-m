import { SocketProvider } from '.';

const videoHandler = (socket: SocketProvider.ServerIO) => {
  const PLAY_VIDEO = () => socket.broadcast.emit('RECEIVE_PLAY_VIDEO');
  const PAUSE_VIDEO = () => socket.broadcast.emit('RECEIVE_PAUSE_VIDEO');

  socket.on('PLAY_VIDEO', PLAY_VIDEO);
  socket.on('PAUSE_VIDEO', PAUSE_VIDEO);
};

export default videoHandler;
