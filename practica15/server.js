
const  express = require('express'); //inyeccion de la dependencia
let app = express();
let PORT =process.env.PORT || 3000; //puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //middleware

//comenta esta funcion nos ayuda a Parsear las peticiones con la URL dentro del body

app.use(express.urlencoded({extended: false})); //middleware

app.set('view engine', 'ejs'); //motor de plantillas

app.get('/', (req, res) => {
    res.send(`<!DOCUMENT html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css">
    <title> DOCUMENT </title> </head>
    <body><h1>Hola Mundo </h1>
    </body></html>`)
});    


/* El código anterior está creando una ruta que representará el archivo person.ejs. 
esta funcion nos permitira mandar a llamar en el navegador lo que es un mensaje, el ID en este caso 
puede ser un nombre, y el time las veces que queramos que se repita el mensaje */

app.get('/students', (req, res) => {
    res.render('students', {});
});

/*
app.post('/addStudent', function(req, res){
    res.send(`Nombre: ${req.body.nombre}
              Apellido: ${req.body.edad}
              NSS: ${req.body.nss}
              Tipo de sangre: ${req.body.tipoSangre}`);
}); */
/*Esta funcion nos ayuda a renderizarl funcion en la cual en el navegador 
nos muestra el resultado de agregar a un estudiante, su nss, nombre, etc.
esta vez utilizamos el displayData para darle otra imagen al momento de llamar la funcion en el navegador */



app.post('/addStudent', function(req, res){
    res.render('displayData', {
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,  
        tipoSangre: req.body.tipoSangre
    });
});


console.log(`Escuchando la marrana ${PORT}`);
app.listen(PORT);