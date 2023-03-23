

const  express = require('express');
let app = express();
let PORT =process.env.PORT || 3000;

app.use( '/assets', express.static(__dirname + '/public')); //contenido estatico
app.set('view engine', 'ejs'); //motor de plantillas

app.get('/', (req, res) => {
    res.send(`<!DOCUMENT html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css">
    <title> DOCUMENT </title> </head>
    <body><h1>Hola Mundo </h1>
    <p>Este es un parrafo y su contenido debe ser azul </p></body></html>`)
});

/*
app.get('/person/:id',(req, res) => {
    res.render( 'person' , {ID: req.params. id, Qstr: req.query.qrst});
});

crear una funcion que use un query string ccon la peticion de tener 2 parametros
"message" y "times" En este caso, “message” puede tomar solo 3 valores “Hola”, “Adios” y “Bienvenido” y
el parámetro “times” indica las veces que se debe repetir el “message”, de tal forma
que para la siguiente petición Para validar el tipo de mensaje, se debe usar una sentencia SWITCH de EJS y para
repetir el mensaje “N” veces se debe utilizar una sentencia IF de EJS.

app.get('/person/:id', (req, res) => {
    res.render('person', { ID: req.params.id, Message: req.query.message, Time: req.query.time });
});
*/

app.get('/person/:id', function(req, res) {
    let message = req.query.message;
    let times = req.query.times;
    res.render('person', { Message: message, Time: times, ID: req.params.id });
  });
  

console.log(`Escuchando en el puerto ${PORT}`);

app.listen(PORT);