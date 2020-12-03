'use strict'

// Arrays multidimencionales
// Es un array dentro de otro array 

let colores = ["rojo", "azul","verde", "amarrillo"];

let autos = ["auto0", "auto1", "auto2", "auto3"];


//                    Dimenciones
//                    0        1
let arregloMulti = [colores, autos];

// Acceder a la dimencion 0 con el elemento 3
console.log(arregloMulti[0][3]); // Resultado color "amarillo"

// Acceder a la dimencion 1 con el elemento 2
console.log(arregloMulti[1][2]); // Resultado auto "auto2"


// ****************** Agregar elementos de un array *******************************

/*

let elemento = "";

do{
    elemento = prompt("Introduce un color, para finalizar escribir la palabra 'fin' ");
    colores.push(elemento);

} while (elemento != "fin");

// Quita el ultimo elemento ingresado, en este caso la palabra "fin"
colores.pop()

console.log(colores); 

*/

// ***************** Eliminar elementos de un array **********************************

let indiceEliminar = colores.indexOf('amarrillo');

// Si el indice a eliminar es mayor a -1, significa que el indice ya se ha encontrado y procede a eliminar
if (indiceEliminar > -1) {
    // splice, elimina un elemento del array, se le puede pasar un parametro 
    // para decir cuantos elementos se va a eliminar apartir del indice buscado
    colores.splice(indiceEliminar, 1);
}



console.log(colores);

// ******************* Convertir a string un array **********************************

// join(), agrega todo los elementos de un array a un string separado por comas

let colores_string = colores.join();

console.log(colores_string);


// ****************** Ordenar un array de forma alfabetica ***************************

colores.sort();


// Le da una vuelta al array, empezando con el ultimo elemento
// colores.reverse();

console.log(colores);