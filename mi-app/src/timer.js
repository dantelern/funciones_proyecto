// timer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Timer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  const handleSendTime = async () => {
    try {
      const response = await axios.post('https://db-esi.vercel.app/api/postSopaLetras', { time });
      console.log('Tiempo enviado:', response.data);
      resetTimer();
    } catch (error) {
      console.error('Error al enviar el tiempo:', error);
    }
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div style={styles.container}>
      <h2>Temporizador: {time} segundos</h2>
      <div>
        <button onClick={toggleTimer} style={styles.button}>
          {isActive ? 'Pausar' : 'Iniciar'}
        </button>
        <button onClick={resetTimer} style={styles.button} disabled={time === 0}>
          Reiniciar
        </button>
        <button onClick={handleSendTime} style={styles.button} disabled={time === 0}>
          Enviar tiempo
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '20px',
    marginTop: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  button: {
    margin: '5px',
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
