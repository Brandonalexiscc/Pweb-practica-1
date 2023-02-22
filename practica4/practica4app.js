/* esto no es accesible por el "protect"
let green = require('./greet');

greet();
*/

/* De esta manera ya es accesible a cualquier otro lugar del código 
y se podrá mandar a llamar de cierto dato en específico sin que se muestren
datos externos 
*/
let green = require('./greet');

let persona = {
    nombre: "Alexis",
    apellido: "Calvario",
    getName: function (){
        return `${this.nombre} ${this.apellido}`;
    },
    domicilio:{
        calle:"Anacahuita",
        colonia: "Prados del Sur",
        cp: 28078,
        municipio: "colima"
    },
    getDomicilio: function(){
        return `${this.domicilio.calle}, ${this.domicilio.colonia}, ${this.domicilio.cp}, ${this.domicilio.municipio}`;
    }
};

console.log(persona.getName());
/*
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.domicilio);
*/
console.log(persona.getDomicilio());