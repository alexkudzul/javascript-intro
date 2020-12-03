'use strict'

// Funciones anonimas: Es una funcion que no tiene nombre
// Callbacks : Es una funcion que se ejecuta dentro de otra

let pelicula = function (nombre){
    return "La pelicula es: " + nombre
}

console.log(pelicula("One piece"));

// Callbacks, ejecuta la funcion principal, se ejecutara otras funciones que se encuentra dentro de esa funcion 
// Callbacks, es una funcion anonima que se le pasa como parametro a otra funcion

// Primero se ejecuta sumame con los 2 primeros parametro
// Segundo se ejecuta las 2 funciones como parametros, con el resultado de sumar
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    let sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}


sumame(5,5,function(dato){
    console.log("La suma es: ", dato);
},function(dato){
    console.log("La suma por dos es: ", dato*2);
});

// Funciones flecha

// Sustituir la palabra function por una flecha =>

sumame(3,5,dato => {
    console.log("******Funciones con flecha******");
    console.log("La suma es: ", dato);
},dato => {
    console.log("La suma por dos es: ", dato*2);
});