import React, { forwardRef, useMemo } from 'react';
import Countdown from 'react-countdown';

import './TimerValue.scss';

const TimerValue = ({totalCount}, ref) => {
  const totalCountValue = totalCount * 60 * 1000;
  const date = useMemo(() => Date.now() + totalCountValue, [totalCountValue]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const TimerRenderer = ({ minutes, seconds }) => (
    <span className="timer-text">{`${formatTime(minutes * 60000 + seconds * 1000)}`}</span>
  );

  return (
    <div className="timer-value">
      <Countdown ref={ref} autoStart={false} date={date} renderer={TimerRenderer} />
    </div>
  );
};

export default forwardRef(TimerValue);