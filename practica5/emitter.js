/*
    La función Emisor es una función constructora que crea un 
    objeto con una propiedad de eventos que
    es un objeto vacío. La función on toma un tipo y un oyente 
    y empuja al oyente a la función de emisión toma un tipo e itera
     a través de la matriz de oyentes y llamadas.
 */
function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type){
    if(this.events[type]){
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
}

module.exports = Emitter;