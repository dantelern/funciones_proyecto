import React from 'react';
import ImageList from './ImageList';
import ListaPreguntas from './ListaPreguntas';
import Login from './Login';
import InfoTercero from './InfoTercero';

function App() {
  return (
    <div>
      <h1>Test de Componentes</h1>
      <Login />
      <ImageList />
      <ListaPreguntas />
      <InfoTercero />
    </div>
  );
}

export default App;
