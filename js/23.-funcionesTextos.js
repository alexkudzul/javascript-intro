'use strict'

// ************** Transforaciones de textos ****************

let numero = 100;
let texto1 = "Hola que tal";
let texto2 = "Alex Ku Dzul";

let dato = numero.toString();
    dato = texto1.toUpperCase(); // convertir todo a mayuscula
    dato = texto2.toLowerCase(); // convertir todo a minuscula

console.log(dato);

// ********** Calcular longitud **************

let nombre = "Alex Ku";
console.log("Longitud del texto: "+ nombre.length);

// Concatenar o Unir textos

// let unirTexto = texto1 + " " +texto2;
let unirTexto = texto1.concat(" " + texto2);

console.log(unirTexto);


// ************* Busqueda de textos *****************
//includes devuelve true o false si hace la busqueda

let busqueda = texto1.includes("que"); 
console.log(busqueda);

// ************* Reemplazar texto *******************
// replace, reemplaza la palabra "tal" por "haces"

let reemplazar = texto1.replace("tal", "haces"); 
console.log(reemplazar);


// ************* Separar texto ***********************

// slice, separa, recortar un string en el lugar donde se requiera, recibe 2 parametros inicio y fin 
//              12345 678 9
// let texto1 = "Hola que tal";
let separar = texto1.slice(5, 9); //solo dejara la palabra "que"
console.log(separar);

// ************* Convertir texto a array ***************

// split, separa string y lo convierte a un array, se puede aplicar en buscadores 
// let convertirArray = texto1.split(); // convierte en un array con indice
let convertirArray = texto1.split(" "); // convierte en un array y lo separa con espacio asignando cada valor en indice

console.log(convertirArray);

// ************* Quitar espacios al inicio y al final de un texto **********************

// Este metodo tambien lo tiene php con el mimo nombre, se puede aplicar en un login, en los email del user

let texto3 = "  Hola que tal texto 3  ";
let quitarEspacios = texto3.trim();

console.log(quitarEspacios);