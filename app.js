// Modelos HTTP: la constante gestiona peticiones de HTTP.
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// La función (server) que recibe "http.createServer" se va a ejecutar cada vez que hay una petición al puerto de escucha.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<b>Hello World, Bienvenidos a mi servidor HTTP.</b>');
});

// El servicio http comienza a escuchar en el puerto y hostname configurado.
server.listen(port, hostname, () => {
  console.log(`Corriendo en el server http://${hostname}:${port}/`);
});