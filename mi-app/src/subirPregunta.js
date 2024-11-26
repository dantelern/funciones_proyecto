import React, { useState } from 'react';
import axios from 'axios';

const SubirPreguntas = () => {
  const [pregunta, setPregunta] = useState('');

  const handleInputChange = (event) => {
    setPregunta(event.target.value);
  };

  const enviarPregunta = async () => {
    if (!pregunta.trim()) {
      alert('Por favor, escribe una pregunta antes de enviarla.');
      return;
    }

    try {
      const response = await axios.post('https://db-esi.vercel.app/api/preguntas', { pregunta });
      alert('Pregunta enviada exitosamente!');
      setPregunta('');
      console.log(response.data);
    } catch (error) {
      console.error('Error al enviar la pregunta:', error);
      alert('Hubo un error al enviar la pregunta. Inténtalo de nuevo.');
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Escribe tu pregunta aquí"
        value={pregunta}
        onChange={handleInputChange}
        style={{
          padding: '10px',
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      <button
        onClick={enviarPregunta}
        style={{
          padding: '10px 15px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Enviar pregunta
      </button>
    </div>
  );
};

export default SubirPreguntas;
