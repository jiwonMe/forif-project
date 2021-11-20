// 초(second) -> hh:mm:ss 로 변환
const timeFormatter = (sec: number): string => {
  const hour = ~~(sec / 3600);
  const minute = ~~((sec % 3600) / 60);
  const second = (sec % 60);

  return `${timeToString(hour)}:${timeToString(minute)}:${timeToString(second)}`;
};

const timeToString = (time: number) => {
  return (time < 10) ? `0${time}` : `${time}`;
};

export default timeFormatter;