/*function greet (){
    console.log('Hello');
}*/

let greet = () => {
    console.log('Hello');
}

greet(); //invoke

/*function logGreeting(fn) {
    fn();
};*/

let logGreeting = (fn) => {
    fn();
}

logGreeting(greet);

/*estamos pasando la funcion como parametro
invocandola con el nombre del argumento fn */

/*let greenMe = function () {
    console.log('Hello from the function expression');
}*/

let greenMe = () =>{
    console.log('Hello from the function expression');
}

greenMe();

logGreeting(greenMe);
//function are first class, pass it as a parameter

//Arrow function
let mifunction = () => {
    //codigo de la funcion 
}

let saludo = (nombre, tratamiento) => {
    console.log('Hola ' + tratamiento + ' ' + nombre);
}
//invocamos 
saludo('Miguel', 'Sr.');

let cuadrado = numero  => {
    return numero * numero; 
}
//codigo de una sola linea
let saludo2 = (nombre, tratamiento) => console.log('Hola ' + tratamiento + ' ' + nombre);

//let cuadrado2 = numero => numero * numero; 

//codigo mas compacto

/*let cuadrado3 = function(numero){
    return numero * numero;
}*/

function cuadrado1(numero){
    return numero * numero
}

console.log(cuadrado(9));

let cuadrado2 = numero => {
    return numero * numero;
}

console.log(cuadrado2(8));

let cuadrado3 = numero => numero * numero;
console.log(cuadrado3(7));