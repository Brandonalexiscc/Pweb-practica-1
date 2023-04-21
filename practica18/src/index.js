const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//const userRoutes = require("./routes/user");
//Usar dotenv para cargar las variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//Variables de entorno
const { MONGODB_URI } = process.env;
console.log(typeof MONGODB_URI);