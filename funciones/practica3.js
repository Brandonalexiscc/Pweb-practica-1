function greet (){
    console.log('Hello');
}

let logGreeting = (miParametro) => miParametro();
logGreeting(function(){
    console.log('Hello fom the function created on the fly')
});

let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + "buenos dias tu color favorito es el! " + miColor);
}

logGreeting1('Alexis', 'Gris');

let color = "rojo";
let talla = "M";
let modelo = "Clasico";

console.log("Juan tiene una playera talla "+ talla + " de color " +
color + " modelo " + modelo);

console.log(`Juan tiene una playera talla ${talla}
 de color  ${color}
modelo ${modelo}`);
