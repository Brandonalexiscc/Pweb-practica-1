const express = require('express');

/*instalamos dependencias para mongoose y procedemos a requerirla para conectarnos a mongoosedb Atlas
utilizamos el comendo de npm i mongoose*/
const mongoose = require('mongoose');

//Procedemos a requerir el dotenv para la cracion de las variables
require("dotenv").config(); //esto nos permite accesar a variables de ambiente definidas por nosotros.

const app = express();
// Definimos el puerto de escucha
const port = process.env.PORT || 9000;

//rutas
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

//conexion de mongodb 
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to Mongo DB Atlas"))
.catch((error) => console.log(error));

app.listen(port, () => console.log('server listening on port', port));