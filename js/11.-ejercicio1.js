'use strict'

// Programa que pida 2 numeros y que nos diga cual es el mayor y el menor y si son iguales.
// PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos lo vuelva a pedir
let numero1=parseInt(prompt("Ingrese el primero numero", 0));
let numero2=parseInt(prompt("Ingrese el segundo numero", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Ingrese el primer numero", 0));
    numero2 = parseInt(prompt("Ingrese el segundo numero", 0));
}

if(numero1==numero2){
    alert("LOS NUMEROS SON IGUALES");
} else if(numero1>numero2){
    alert("EL NUMERO MAYOR ES: " + numero1);
    alert("EL NUMERO MENOR ES: " + numero2);
} else if(numero2>numero1){
    alert("EL NUMERO MAYOR ES: " + numero2);
    alert("EL NUMERO MENOR ES: " + numero1);
}else{
    alert("INGRESE UN NUMERO CORRECTO");
}