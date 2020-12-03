'use strict'

/*
Mostrar todo los numeros impares que hay entre dos numeros introducidos por el usuario 
*/

let numero1=parseInt(prompt("Ingresa el primer numero"));
let numero2=parseInt(prompt("Ingresa el segundo numero"));

while(numero1 < numero2){

    numero1++;
    // Si el resto del numero1 es diferente de cero 
    if(numero1%2 != 0){
        console.log('El numero ' + numero1 +' es impar');
    }

}