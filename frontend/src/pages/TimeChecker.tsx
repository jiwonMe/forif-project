// 시간 체크 페이지입니다.
import React, { useEffect, useState } from 'react';

const TimeChecker = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);  // 지나간 시간
  const [isPaused, setIsPaused] = useState<boolean>(true);

  // 1초마다 timeElapsed가 1씩 증가
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setTimeElapsed((s: number) => s + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // 시간을 0으로 초기화하는 함수
  const resetTime = () => {
    setIsPaused(true);
    setTimeElapsed(0);
  }

  return (
    <div className="timeChecker">
      <h1>{timeElapsed}</h1>
      <button onClick={() => setIsPaused(false)}>Start</button>
      <button onClick={() => setIsPaused(true)}>Pause</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  );
};

export default TimeChecker;
