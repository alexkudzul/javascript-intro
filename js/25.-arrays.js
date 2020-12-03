'use strict'

// Arrays, arreglos, matrices, es una coleccion de tipo de datos, puede ser string, int, entre otros

// Ejemplo 
let nombres = ["Alex", "Manuel", "Ku", "Dzul", 9, true];
// Ejemplo en forma de objeto
let lenguajes = new Array("PHP", "PYTHON", "JS", "C++");

console.log(nombres);
console.log(lenguajes);

console.log(lenguajes[2]); // Obtiene el indice 0,1,2 => JS 

// ****************** Obteniendo la longitud del array *************************

console.log(lenguajes.length); // 4

// ****************** Elegir una posicion segun lo que se pida por pantalla ********************************

/* 

let elemento = parseInt(prompt("Que elemento del array quieres obtener"));

if(elemento >= lenguajes.length){
    alert("Introduce el numero correcto menor que: " + lenguajes.length);
} else{
    alert(lenguajes[elemento]);
}

*/

//  ****************************** Recorrer un array *********************************

document.write("<h1>Lenguajes de programacion del 2020</h1>");
document.write("<ul>");

// Recorrer con for
// donde el contador i sea menor a la longitud del array, ejecutar el ciclo
document.write("Recorrer con for");
for(let i = 0; i <lenguajes.length; i++){
    document.write("<li> "+ i +"=>" +lenguajes[i]+"</li>");
}

// Recorrer con forEach
document.write("Recorrer con forEach")
lenguajes.forEach((elemento, indice) => {
    document.write("<li> "+indice+"=>"+elemento+"</li>");
});

// Recorrer con for in
document.write("Recorrer con for in");
// Se rrecorre los elemento(indice) del array lenguajes
for(let elemento in lenguajes){
    document.write("<li> "+ elemento +"=>" +lenguajes[elemento]+"</li>");
}

document.write("</ul>");


// ***************** Busqueda en un array *****************************

// Verifica si existe un elemento en un array

// find busca el elemento como una funcion callback
let busquedaCallback = lenguajes.find(function(elemento){
    return elemento == "JS"
});

console.log(busquedaCallback);

// Reducir el codigo anterior con la funcion con flechas

let busquedaFlecha =lenguajes.find(elemento => elemento == "JS");

console.log(busquedaFlecha);

// ************************* Busqueda con el indice de un array *************************

let busquedaIndex =lenguajes.findIndex(elemento => elemento == "JS");

console.log(busquedaIndex); // indice 2


// ****************** Busqueda con some, si el elemento se encuentra en el array ************************

// some, determina a traves de una funcion callback, si el elemento se encuentra en el array y devuelve un true
// some, para comprobar si cumple las condiciones concretas, >, <, =, !=
let numeros = [1,2,3,4,5,6,7,8,9];

// Determina cuantos elementos son mayor o igual a 5, resultado true
let busquedaSome = numeros.some(elemento => elemento >= 5);

console.log(busquedaSome);

 