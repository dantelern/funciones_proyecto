import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ObtenerPalabras = () => {
  const [palabras, setPalabras] = useState([]);
  const [error, setError] = useState(null);

  const fetchPalabras = async () => {
    try {
      const response = await axios.get('https://db-esi.vercel.app/puzzlewords');
      setPalabras(response.data);
    } catch (err) {
      setError('Hubo un error al obtener las palabras.');
      console.error('Error:', err);
    }
  };

  useEffect(() => {
    fetchPalabras();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Palabras del Puzzle</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {palabras.length > 0 ? (
            palabras.map((palabra, index) => (
              <li key={index}>{palabra}</li>
            ))
          ) : (
            <p>Cargando palabras...</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default ObtenerPalabras;
