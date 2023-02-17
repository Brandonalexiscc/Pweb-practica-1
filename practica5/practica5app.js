/* It's creating an object. */
let obj = {
    nombre: 'Alexis',
    edad: 19,
    apellido: 'Calvario',
    /* It's a function inside an object. */
    keypress: function(){
        return 'Se ha presionado una tecla';
    },
    mouseOver: function (){
        return 'El puntero del mouse esta arriba';
    }
}

/* esto nos muestra que podemos tener un array lleno de funciones 
ademas de en la function no se puede acceder de ningun otro modo a menos
que se pase a otro modo*/
let myArray = [];
myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function (){
    return "hola desde el array";
})


/*Ahora tenemos un Array lleno de funciones donde ya podemos ver 
el mensaje de las funcinoes */
let funcArray = [];
funcArray.push(() => {
    console.log("funciton 1");
});

funcArray.push(() => {
    console.log("funciton 2");
});

funcArray.push(() => {
    console.log("funciton 3");
});

funcArray.forEach((item) => {
    item();
})

console.log(myArray);
console.log(obj.nombre);
console.log(obj['nombre']);
/* Es una forma de acceder a las propiedades del objeto a traves de
una funcion. */
let myKey = 'nombre';
console.log(obj[myKey]);
myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());

let Emitter = require('./emitter');

let emtr = new Emitter();

emtr.on('greet', () =>{
    console.log('Somewhere, someone said hello.');
})

emtr.on('greet', () => {
    console.log('A greeting ocurred!');
})

console.log('Hello!');
emtr.emit('greet');