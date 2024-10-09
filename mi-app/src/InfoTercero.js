import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InfoTercero = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerInfo = async () => {
      try {
        const { data } = await axios.get('https://db-esi.vercel.app/api/info');
        setInfo(data);
      } catch (error) {
        setError('Error al obtener la INFO: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    obtenerInfo();
  }, []);

  if (loading) {
    return <p style={{ fontWeight: 'bold' }}>Cargando...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <ul>
      {info.length > 0 ? (
        info.map((item) => (
          <li key={item.id || item.text}>{item.text}</li> 
        ))
      ) : (
        <p>No hay info para mostrar.</p>
      )}
    </ul>
  );
};

export default InfoTercero;
