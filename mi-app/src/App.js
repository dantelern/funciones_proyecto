import React from 'react';
import ImageList from './ImageList';
import ListaPreguntas from './ListaPreguntas';
import Login from './Login';
import InfoTercero from './InfoTercero';
import InfoPrimero from './InfoPrimero';
import InfoSegundo from './InfoSegundo';
import { ScoreButton } from './randomScore';
import { Timer } from './timer';
import SubirPreguntas from './subirPregunta';

function App() {
  return (
    <div>
      <h1>Test de Componentes</h1>
      <Login />
      <ImageList />
      <ListaPreguntas />
      <SubirPreguntas />
      <h1> Info Primero </h1> <InfoPrimero /> 
      <h1> Info Segundo </h1> <InfoSegundo /> 
      <h1> Info Tercero </h1> <InfoTercero /> 
      <ScoreButton />
      <Timer />
    </div>
  );
}

export default App;
