'use strict'

/*
Hacer un programa que muestre todo los numeros entre dos numeros introducidos por el usuario
*/

let numero1= parseInt(prompt("Ingresa el primer numero",0));
let numero2= parseInt(prompt("Ingresa el segundo numero",0));

document.write("<h1> De " + numero1 +" a " +numero2+" estan estos numeros: </h1>");

for (let i = numero1; i <= numero2; i++){
    document.write(i +"<br/>");
}