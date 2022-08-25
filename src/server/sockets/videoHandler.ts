import { SocketProvider } from '.';

const videoHandler = (socket: SocketProvider.ServerIO) => {
  const startVideo = () => {
    socket.broadcast.emit('receiveVideoStart');
  };

  socket.on('videoStart', startVideo);
};

export default videoHandler;
