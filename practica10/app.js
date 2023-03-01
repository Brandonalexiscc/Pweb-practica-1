const express = require('express');
const app = express();

var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

app.get('/', (req, res) => {
    res.send('Hello word, this is the root route');
});


/* con esto podemos copiar un documento html y mostrarlo en una 
pagina web, poniendo el nombre de la ruta nos muestra el mensaje "Hola" */
app.get('/prueba', (req, res) => {
    res.send('<html><hed></head><body><h1>el diablo</h1></body></html');
});

//Esta ruta nos mostrará este mensaje en un objeto JSON
app.get('/api', function(req, res){
    res.json({firstname: 'John', lastname: 'Doe'});
});

/*lo que nos mostrará en la ruta será lo que pongamos en el id por ejemplo 
nosotros ponemos un nombre y nos debe imprimir 'Person: Alexis'*/
app.get('/person/:id', function(req, res){
    res.send('<html><hed></head><body><h1>Person: ' + req.params.id + '</h1></body></html');
});

app.listen(port);
