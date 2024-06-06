import React, { useState, useEffect } from 'react';

const Exercicio2 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <h1>Relógio Digital</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Exercicio2;

