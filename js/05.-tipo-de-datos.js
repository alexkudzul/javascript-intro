'use strict'

// Operadores
let numero1 = 7;
let numero2 = 3;
let operacion = numero1 + numero2; //La operacion puede cambia con +, -, *, /, %

console.log("El resultado de la operacion es: "+operacion);

// Tipo de datos

let numero_entero = 2;
let cadena_texto = "Hola"
let verdaro_falso = true; //tambien puede ser false o un 1(verdadero) y 0(falso)
let numero_falso = "25.5";

console.log("Convirtiendo tipo de dato a otro tipo de dato: "+parseInt(numero_falso)+5); // tambien puede ser parseFloat, String

// typeof -> verifica que tipo de dato tiene una variable

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdaro_falso);
console.log(typeof numero_falso);