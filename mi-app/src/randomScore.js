import React, { useState } from 'react';
import axios from 'axios';

export function generateRandomScore() {
    return Math.floor(Math.random() * 101);
}

export function ScoreButton() {
    const [score, setScore] = useState(generateRandomScore());

    const handlePostScore = async () => {
        try {
            const response = await axios.post('https://db-esi.vercel.app/api/postMemotest', { score });
            console.log('Puntaje enviado:', response.data);
            // Si quieres actualizar el puntaje después de enviarlo, usa setScore
            setScore(generateRandomScore()); // Esto genera y asigna un nuevo puntaje
        } catch (error) {
            console.error('Error al enviar el puntaje:', error);
        }
    };

    return (
        <div>
            <h2>Puntaje: {score}</h2>
            <button onClick={handlePostScore}>Enviar Puntaje</button>
        </div>
    );
}
