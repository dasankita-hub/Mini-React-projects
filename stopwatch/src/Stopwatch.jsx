// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const timer = useRef(null);

  const startTimer = () => {
    if (!timer.current) {
      timer.current = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timer.current);
    timer.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className='w-full h-screen'style={{backgroundColor:'slategray'}}>
    <div className="flex flex-col items-center justify-center h-screen  text-center p-4">
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        Timer: <span className="text-green-700">{time}</span> Seconds
      </h1>
      <div className="flex gap-4">
        <button
          onClick={startTimer}
          className="bg-green-600 text-white py-2 px-4 rounded shadow-lg hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
          aria-label="Start Timer"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-600 text-white py-2 px-4 rounded shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:outline-none"
          aria-label="Stop Timer"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-gray-600 text-white py-2 px-4 rounded shadow-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none"
          aria-label="Reset Timer"
        >
          Reset
        </button>
      </div>
    </div>
    </div>
  );
};

export default Stopwatch;
