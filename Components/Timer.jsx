import React, { useState, useEffect } from "react";
import classes from "../modules/Timter.module.scss";

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const fetchTargetTime = async () => {
      try {
        const response = await fetch("http://localhost:3000/Shop/timers");
        if (!response.ok) {
          throw new Error("Failed to fetch target time");
        }
        const data = await response.json();
        const targetTime = new Date(data.targetTime);
        startCountdown(targetTime);
      } catch (error) {
        console.error("Error fetching target time:", error.message);
      }
    };

    fetchTargetTime();
  }, []);




  const startCountdown = (targetTime) => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = targetTime.getTime() - currentTime.getTime();

      if (timeDifference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
  };



  
  return ( 
      <div className={classes["timer-container"]}>
        <h1 className={classes['sales']}>Flesh Sales</h1>
        <div className={classes["items"]}>
          <div className={classes["timer-item"]}>
            <p>Days</p>
            <h1 className={classes['time']}>{days < 10 ? `0${days}` : days}<span>:</span></h1>
          </div>
          <div className={classes["timer-item"]}>
            <p>Hours</p>
            <h1 className={classes['time']}>{hours < 10 ? `0${hours}` : hours}<span>:</span></h1>
          </div>
          <div className={classes["timer-item"]}>
            <p>Minutes</p>
            <h1 className={classes['time']}>{minutes < 10 ? `0${minutes}` : minutes}<span>:</span></h1>
          </div>
          <div className={classes["timer-item"]}>
            <p>Seconds</p>
            <h1 className={classes['time']}>{seconds < 10 ? `0${seconds}` : seconds}</h1>
          </div>
        </div>
      </div>
  );
};

export default CountdownTimer;
