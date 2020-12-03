'use strict'

// Condicional IF
// Si numero1 es igual a numero2, entonces haz algo.

/*
    Operadores

    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=

*/

let numero1= 3;
let numero2= 4;

if (numero1 > numero2) {
    console.log("numero1 es mayor a numero2");
}else{
    console.log("numero1 es menor a numero2");
}

let edad=38;
let nombre="Alex Ku Dzul";

if(edad >=18){
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");
    if (edad <=29) {
        console.log("Eres millenials");
    } else if(edad >=60){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres millenials");
    }
}else{
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

// OPERADORES LOGICOS

// Negacion : !
// AND (Y) : &&
// OR (O) : ||


let year = 2019;
// var year = 2029;

// NEGACION
if(year != 2018){
    console.log("El año no es 2018, el año actual es "+year);
}

// AND
if(year >= 2000 && year <=2020){
    console.log("Estas en la era actual");
}else{
    console.log("Estas en la era post moderna");
}

// OR
if(year == 2009 || (year >= 2019 && year == 2029)){
    console.log("El año termina en 9");
}else{
    console.log("El año no esta registrado");
}