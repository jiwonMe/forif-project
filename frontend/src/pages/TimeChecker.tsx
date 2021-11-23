// 시간 체크 페이지입니다.
import React, { useEffect, useState } from 'react';
import timeFormatter from '../utils/timeFormatter';

// 시간 status를 '시작함', '일시정지함', '멈춤' 세 가지로 분류.
type timeStatusType = 'started' | 'paused' | 'stopped';

const TimeChecker = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);  // 지나간 시간
  const [timeStatus, setTimeStatus] = useState<timeStatusType>('stopped');

  // 1초마다 timeElapsed가 1씩 증가
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeStatus === 'started') {
        setTimeElapsed((s: number) => s + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeStatus]);

  // 시간을 0으로 정지!
  const stopTime = () => {
    setTimeStatus('stopped');
    setTimeElapsed(0);
  }

  return (
    <div className="timeChecker">
      <h1>{timeFormatter(timeElapsed)}</h1>
      {
        // stopped면 '공부시작' 버튼만 표시
        (timeStatus === 'stopped') ? 
          <button onClick={() => setTimeStatus('started')}>공부시작</button> :

        // started면 '일시정지'와 '정지' 버튼 표시
        (timeStatus === 'started') ? 
        <>
          <button onClick={() => setTimeStatus('paused')}>일시정지</button>
          <button onClick={stopTime}>정지</button>
        </> : 

        // paused면 '계속하기'와 '정지' 버튼 표시
        <>
          <button onClick={() => setTimeStatus('started')}>계속하기</button>
          <button onClick={stopTime}>정지</button>
        </>
      }
    </div>
  );
};

export default TimeChecker;
