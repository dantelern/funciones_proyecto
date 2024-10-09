const WebSocket = require('ws');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', ws => {
  console.log('Cliente conectado');

  ws.on('message', message => {
    console.log(`Mensaje recibido: ${message}`);
  });

  ws.send('Hola desde el servidor WebSocket');
});
