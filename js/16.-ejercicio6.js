'use strict'

/*
Que nos diga si un numero es par o impar
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/

var numero = parseInt(prompt("Introduce un numero"));

    // Si el numero introducido no es un numero, que se pida de nuevo el numero 
    while(isNaN(numero)){
        var numero = parseInt(prompt("Introduce un numero"));
    }
    

    if(numero%2 == 0){
        console.log("El numero "+ numero +" es par");
    }
    else{
        console.log("El nunero "+ numero + " es impar");
    }
