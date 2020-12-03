'use strict'

/*
Calculadora:
- Pedir 2 numeros por pantalla 
- Si se ingresa un numero mal(una letra o un caracter especial), que vuelva a pedir los numeros
- Mostrar en el body, en un alert y en cosola el resultado de sumar, restar, multiplicar y dividir, 
*/

let numero1 = parseInt(prompt("Ingresar el primer numero")); 
let numero2 = parseInt(prompt("Ingresar el segundo numero"));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) { 
    numero1 = parseInt(prompt("Ingresar el primer numero")); 
    numero2 = parseInt(prompt("Ingresar el segundo numero"));
}

let resultado = "La suma es " + (numero1+numero2)+ "<br/>"+
                "La resta es " + (numero1-numero2)+ "<br/>"+
                "La multiplicación es " + (numero1*numero2)+ "<br/>"+
                "La división es " + (numero1/numero2)+ "<br/>";

let resultadoCMD = "La suma es " + (numero1+numero2)+ "\n"+
                "La resta es " + (numero1-numero2)+ "\n"+
                "La multiplicación es " + (numero1*numero2)+ "\n"+
                "La división es " + (numero1/numero2)+ "\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);