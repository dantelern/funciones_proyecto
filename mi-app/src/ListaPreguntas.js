import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaPreguntas = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPreguntas = async () => {
      try {
        const response = await axios.get('https://db-esi.vercel.app/api/preguntas');
        console.log(response.data);
        setPreguntas(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener las preguntas:', error);
        setError('Error al obtener las preguntas'); 
        setLoading(false);
      }
    };

    obtenerPreguntas();
  }, []);

  if (loading) {
    return <p>Cargando preguntas...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {preguntas.length > 0 ? (
        preguntas.map((pregunta, index) => (
          <li key={index}>{pregunta.text || pregunta.pregunta || 'Sin texto disponible'}</li>  
        ))
      ) : (
        <p>No hay preguntas para mostrar.</p>
      )}
    </ul>
  );
};

export default ListaPreguntas;
