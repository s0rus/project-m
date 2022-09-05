import dayjs from 'dayjs';

const timeFormatter = (secondsToFormat: number) => {
  const hours = Math.floor((secondsToFormat % (3600 * 24)) / 3600);
  const minutes = Math.floor((secondsToFormat % 3600) / 60);
  const seconds = Math.floor(secondsToFormat % 60);

  return hours
    ? dayjs().hour(hours).minute(minutes).second(seconds).format('HH:mm:ss')
    : dayjs().minute(minutes).second(seconds).format('mm:ss');
};

export default timeFormatter;