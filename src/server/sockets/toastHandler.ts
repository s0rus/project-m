import { SocketProvider } from '.';

const toastHandler = (socket: SocketProvider.ServerIO) => {
  socket.on('SEND_TOAST', (message) => {
    socket.broadcast.emit('RECEIVE_TOAST', message);
  });
};

export default toastHandler;
