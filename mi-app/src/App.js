import React from 'react';
import ImageList from './ImageList';
import ListaPreguntas from './ListaPreguntas';
import InfoTercero from './InfoTercero';
import InfoPrimero from './InfoPrimero';
import InfoSegundo from './InfoSegundo';
import { ScoreButton } from './randomScore';
import { Timer } from './timer';
import SubirPreguntas from './subirPregunta';
import ObtenerPalabras from './palabras';

function App() {
  return (
    <div>
      <h1>SI A ESI</h1>
      <ImageList />
      <ListaPreguntas />
      <SubirPreguntas />
      <ObtenerPalabras />
      <h1> Info Primero </h1> <InfoPrimero /> 
      <h1> Info Segundo </h1> <InfoSegundo /> 
      <h1> Info Tercero </h1> <InfoTercero /> 
    </div>
  );
}

export default App;
