'use strict'

/* 
Muestre todo los numeros divisores de un numero, introduce en prompt
*/

let numero = parseInt(prompt('Introduce un numero'));

for(let i = 1; i <= numero; i++){
    // Si el resto es igual a cero, es un divisor
    if(numero%i == 0){
        console.log('Divisor: '+ i);
    }
}