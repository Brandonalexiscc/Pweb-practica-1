const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello word, this is the root route');
});

app.get('/uno', (req, res) =>{
    res.send('Hello word, from route One');
});

/* con esto usando los backtips podemos copiar un documento html y mostrarlo en una 
pagina web, poniendo el nombre de la ruta nos muestra el mensaje "Hola" */
app.get('/prueba', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hola </h1>
    </body>
    </html>`);
});

app.listen(3000);
