import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://db-esi.vercel.app/api/users');
      const users = response.data;

      const user = users.find(user => user.username === username && user.password === password);

      if (user) {
        console.log('Login exitoso');
        setError(null); // Limpiar el error si el login es exitoso
      } else {
        setError('Contraseña o usuario inválido');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Un error ocurrió durante el login');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Usuario"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;