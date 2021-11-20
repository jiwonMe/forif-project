// 시간 체크 페이지입니다.
import React, { useState } from 'react';

const TimeChecker = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  return (
    <div className="timeChecker">
      <h1>{timeElapsed}</h1>
      <button>Start</button>
      <button>Stop</button>
    </div>
  );
};

export default TimeChecker;
