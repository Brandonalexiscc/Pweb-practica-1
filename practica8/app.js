var http = require('http');
//el paquete de 'http' ya no existe.
/*Cuando nosotros vamos a la terminal y abrimos el navegador 
poniendo el localhost:1337 nos mostrará el mensaje de 'Hello world/n' */
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world/n');
}).listen(1337, '127.0.0.1');

//si nosotros corremos esto en la terminal el navegador estará 
//esperando a la escucha de la terminal ejecutada entonces si se está ejecutando 
//en el navegador se imprimirá el 'Hello Wold'
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)