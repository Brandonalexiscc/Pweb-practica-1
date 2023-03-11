const express = require('express');
const app = express();

app.set('view engine', 'ejs');
/* Telling the server to use the public folder as a static folder. */
app.use('/assets', express.static(__dirname + '/public'));

/* A function that is called when the user goes to the root route. */
/* Telling the server to render the index.ejs file when the user goes to the root route. */
app.get('/', function (req, res) {
    res.render('index');
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
/* The above code is creating a route that will render the person.ejs file and pass the ID parameter to
the file. */
//tenía un espacio mas en 'person' y no jaló hasta que lo quité XD
app.get('/person/:id', function(req, res){
    res.render('person', {ID: req.params.id});
});

let data = [
    {id : 1, nombre: 'Hugo', apellidos : 'Estrada Ramirez', edad : 19},
    {id : 2, nombre: 'Estela', apellidos : 'Perez Suarez', edad : 18},
    {id : 3, nombre: 'Sabrina', apellidos : 'Contreras Morales', edad : 17}    
];

// La ruta /personas, regresa un objeto que contiene un arreglo de objetos
app.get('/personas', function(req, res){
    res.render('personas', {personas: data});
});

var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor
app.listen(port, console.log('jalando'));


//instalamos ejs con npm i ejs para poder correrlo