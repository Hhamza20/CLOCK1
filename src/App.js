// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [time, setTime] = useState("");

  const updateTime = () => {
    let mode ="AM";
    const currentDate = new Date();
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    if(hours>12){
      hours=hours-12;
      mode="PM";
    }
    const currentTime = hours+":"+minutes+":"+seconds+" "+mode;
    setTime(currentTime);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="App">
      <p>{time}</p>
    </div>
  );
}

export default App;
