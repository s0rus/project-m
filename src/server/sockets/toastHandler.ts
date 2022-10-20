import { SocketProvider } from '.';

const toastHandler = (socket: SocketProvider.ServerIO) => {
  socket.on('SEND_TOAST', (message, type) => {
    socket.broadcast.emit('RECEIVE_TOAST', message, type);
  });
};

export default toastHandler;
