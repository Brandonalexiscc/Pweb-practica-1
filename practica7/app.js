//var Emitter = require('./emitter');
/*Si ejecutamos esta linea nos mostrará que no encuantra el módulo de events */
var Emitter = require('events');

/*si nosotros ejecutamos este codigo lo que nos mostrará sera que 
sigue sin encontrar el módulo entonces no puede imprimir el mensaje*/
var config = require('./config');

/*Tenemos que mandar a declarar el emt y mandar a llamar ese modulo porque sino, 
nos marcará que no esta declarado o definido.*/
var emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, some said hello');
});

emtr.emit(config.events.GREET);