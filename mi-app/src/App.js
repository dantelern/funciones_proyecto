import React from 'react';
import ImageList from './ImageList.js';
import ListaPreguntas from './ListaPreguntas.js';
import Login from './Login.js';
import InfoTercero from './InfoTercero.js';
import InfoPrimero from './InfoPrimero.js';
import InfoSegundo from './InfoSegundo.js';
import { ScoreButton } from './randomScore.js';

function App() {
  return (
    <div>
      <h1>Test de Componentes</h1>
      <Login />
      <ImageList />
      <ListaPreguntas />
      <h1> Info Primero </h1> <InfoPrimero /> 
      <h1> Info Segundo </h1> <InfoSegundo /> 
      <h1> Info Tercero </h1> <InfoTercero /> 
      <ScoreButton />
    </div>
  );
}

export default App;
