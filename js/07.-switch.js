'use strict'

// Switch

let edad = 1876;
let imprime = "";

switch (edad){
    case 18:
        imprime = "Ya eres mayor de edad";
        break;

    case 25:
        imprime = "Ya eres adulto";
        break;

    case 40:
        imprime = "Ya cumpliste 40 años";
        break;

    case 70:
        imprime = "Ya eres anciano";
        break;

    default:
        imprime = "No existe tu edad o no encuentra en la base de datos";
        break;

}

console.log(imprime);