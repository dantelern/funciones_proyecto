const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', ws => {
  console.log('Cliente conectado');

  ws.on('message', message => {
    console.log(`Mensaje recibido: ${message}`);
  });

  ws.send('Hola desde el servidor WebSocket');
});
