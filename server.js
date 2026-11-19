// Servidor de sinalização do multiplayer de Rift Duel (PeerJS).
// Ele só apresenta um jogador ao outro; as jogadas passam direto entre os navegadores.
const { PeerServer } = require('peer');

const port = Number(process.env.PORT) || 9000;
PeerServer({
  port,
  host: '0.0.0.0',
  path: '/',
  proxied: true,          // atrás do proxy do Render (HTTPS)
  allow_discovery: false, // ninguém lista os IDs das salas
  corsOptions: { origin: true },
});
console.log('Rift Duel signal server ouvindo na porta ' + port);
