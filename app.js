/* El código anterior está convirtiendo Celsius a Fahrenheit y Fahrenheit a Celsius.*/

const { toCelsius } = require("celsius");
 
toCelsius(100); // 38
toCelsius(100, 3); // 37.778
toCelsius('105.981 degrees F', 5); // 41.10056


const { toFahrenheit } = require("celsius");
 
toFahrenheit(36); // 97
toFahrenheit(36.68, 3); // 98.024
console.log(toFahrenheit('-40.691 degrees C', 5)); // -41.24380

console.log(toCelsius(100)); // 38


//Aquí podemos tratar de encontrar estas dependencias pero como no están, pues no funciona
const conu = require ("celsius")
console.log(conu(toCelsius(100)));