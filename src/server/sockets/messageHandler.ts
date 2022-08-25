import { SocketProvider } from '.';

const messageHandler = (socket: SocketProvider.ServerIO) => {
  const newMessage = (msg: string) => {
    console.log('xDDD');
    socket.broadcast.emit('newChangedMessage', msg);
  };

  socket.on('changedMessage', newMessage);
};

export default messageHandler;
