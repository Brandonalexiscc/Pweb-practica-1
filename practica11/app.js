const express = require('express');
const app = express();
/* Telling the server to use the public folder as a static folder. */
app.use('/assets', express.static(__dirname + '/public'));

var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor
/* A function that is called when the user goes to the root route. */
app.get('/', (req, res) => {
    cad = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/assets/style.css" rel="stylesheet">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello word, this is the root route update </h1>
    </body>
    </html>
    `
    res.send(cad);
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

app.get('/person/:id', function (req, res){
    res.send('<html><hed></head><body><h1>Person: ' + req.params.id + '</h1></body></html');
})

app.listen(port, console.log('jalando'));
