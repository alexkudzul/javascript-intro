'use strict'
// Pruebas con Let y Var

// var -> tiene un alcance global, si se cambia el valor principal, afectara a todo los variables con ese nombre 
// let -> tiene un alcance limitado de un bloque de codigo, afectara los cambios solo en ese bloque

// Prueba con Var

var numero = 25;
console.log(numero); // 25

if(true){
    var numero =50;
    console.log(numero); // 50
}

console.log(numero); //50

// Prueba con Let

let texto = "JavaScript"
console.log(texto); //JavaScript

if(true){
    let texto= "Laravel"
    console.log(texto); //Laravel
}

console.log(texto); //JavaScript