import React, { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    let timer = setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      
      let fullTime = hours + ":" + minutes + ":" + seconds;
      setTime(fullTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Digital Clock</h2>
      <h1>{time}</h1>
    </div>
  );
}
