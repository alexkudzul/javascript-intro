'use strict'
// Utilizando un bucle, mostrar la suma y la media de los numeros introducidos, 
// hasta introducir un numero negativo y ahi mostrar el resultado

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Ingresa numeros, hasta ingresar un numero negativo"));

    // si no es un numero, la variable numero sera igual a cero
    if(isNaN(numero)){
        numero = 0;
    } else if(numero >= 0){

        suma = suma + numero;
        // suma += numero;
        contador++;
    }

    console.log(suma);
    console.log(contador);

} while (numero >= 0);

alert("La suma de los numeros introducidos es = " + suma);
alert("La media de los numeros introducidos es = " + (suma/contador));