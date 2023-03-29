let express = require ('express');
//inyeccion de la dependencia express
let app = express();
//app que hace la fucion de servidor 
let personsRoute = require('./routes/person');
//inyeccion de la dependencia de la ruta person

app.set('view engine', 'ejs');
//motor de plantillas
app.use(personsRoute);
//middleware
app.use('/assets', express.static(__dirname + '/public'));
//middleware
let PORT = process.env.PORT || 3000;
//puerto de escucha

//confirmacion de que el server esta corriendo 
app.listen(PORT, ()=>{
    console.log('Escuchando la marrana');
})