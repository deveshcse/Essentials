import { useEffect, useState } from "react";

const Timer = ({ timerEndDate }) => {
  const countdownDate = new Date(timerEndDate);

  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => setNewTime(), 1000);
    if (timer.seconds < 0) {
      clearInterval(interval);
    }
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date();
      const distanceToDate = countdownDate - currentTime;
      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
      const numbersToAddZeroTo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

      //   days = `${days}`;
      if (numbersToAddZeroTo.includes(days)) {
        days = `0${days}`;
      }
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      }
      if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      }
      if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }
      setTimer({ days, hours, minutes, seconds });
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col">
        <span className="font-title font-medium text-sm">Days</span>
        <span className="font-heading font-bold text-3xl">{timer.days}</span>
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
        <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-title font-medium text-sm">Hours</span>
        <span className="font-heading font-bold text-3xl">{timer.hours}</span>
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
        <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-title font-medium text-sm">Minutes</span>
        <span className="font-heading font-bold text-3xl">{timer.minutes}</span>
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
        <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-title font-medium text-sm">Seconds</span>
        <span className="font-heading font-bold text-3xl">{timer.seconds}</span>
      </div>
    </div>
  );
};

export default Timer;
