// const getPlayerState = useCallback((): PlayerState => {
//   return {
//     playedSeconds: playerRef.current?.getCurrentTime() || 0,
//     loadedSeconds: playerRef.current?.getSecondsLoaded() || 0,
//     duration: playerRef.current?.getDuration() || 0,
//     playing: !playing,
//   };
// }, [playing]);

// useEffect(() => {
//   if (socket) {
//     socket.on('RECEIVE_PLAY_VIDEO', (data) => {
//       // console.log('RECEIVE_PLAY_VIDEO', data);
//       if (data) {
//         setPlaying(data.playing);
//       }
//     });

//     socket.on('RECEIVE_PAUSE_VIDEO', (data) => {
//       // console.log('RECEIVE_PAUSE_VIDEO', data);
//       if (data) {
//         setPlaying(data.playing);
//       }
//     });
//   }
// }, [socket, getPlayerState]);

// const handlePlay = () => {
//   if (!playing && socket) {
//     socket.emit('PLAY_VIDEO', getPlayerState());
//     setPlaying(true);
//   }
//   return;
// };

// const handlePause = () => {
//   if (playing && socket) {
//     socket.emit('PAUSE_VIDEO', getPlayerState());
//     setPlaying(false);
//   }
//   return;
// };

// const handleReady = () =>
//   socket &&
//   socket.emit('REQUEST_PLAYER_STATE', (response) => {
//     console.log(response);
//   });
