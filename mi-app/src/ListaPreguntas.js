import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaPreguntas = () => {
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    const obtenerPreguntas = async () => {
      try {
        const response = await axios.get('https://db-esi.vercel.app/api/preguntas');
        setPreguntas(response.data);
      } catch (error) {
        console.error('Error al obtener las preguntas:', error);
      }
    };

    obtenerPreguntas();
  }, []);

  return (
    <ul>
      {preguntas.length > 0 ? (
        preguntas.map((pregunta, index) => (
          <li key={index}>{pregunta.text}</li>
        ))
      ) : (
        <p>No hay preguntas para mostrar.</p>
      )}
    </ul>
  );
};

export default ListaPreguntas;
