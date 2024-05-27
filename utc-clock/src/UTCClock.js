// src/UTCClock.js
import React, { useState, useEffect } from 'react';
import './UTCClock.css';

const UTCClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    return date.toISOString().substr(11, 8);
  };

  return (
    <div className="clock-container">
      <div className="clock">
        <span className="time">{formatTime(time)}</span>
        <span className="utc">UTC</span>
      </div>
    </div>
  );
};

export default UTCClock;
