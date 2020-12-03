'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero(todo sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array 
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice 

*Se valorará el uso de funciones 

*/

// 1. Pida 6 numeros por pantalla y los meta en un array

// EJEMPLO 2

// let numeros2 = new Array (6);

// for(let i = 0; i <=5 ; i++){
//      numeros2[i] = parseInt(prompt("Ingresa 6 numeros, Ejemplo 2"));
// }

// console.log(numeros2);

// EJEMPLO 1

let numeros = [];

for(let i = 0; i <=5 ; i++){
    let elementos = parseInt(prompt("Ingresa 6 numeros")); 
    numeros.push(elementos);
}

// 2. Mostrar el array entero(todo sus elementos) en el cuerpo de la pagina y en la consola

function mostrarArray(elementos, textoMensaje = ""){

    document.write("<h1>Lista del array "+ textoMensaje+"</h1>");
    document.write("<ul>");

    elementos.forEach((elemento, indice) => {
        document.write("<li>"+ elemento+"</li>");
    });

    document.write("</ul>");
}

// Mostrar en el body

mostrarArray(numeros);

// Mostrar por consola
console.log(numeros);

// 3. Ordenar y mostrar

// sort, solo lo ordena de forma albetico, solo se basa con el primer digito, en caso de ser numeros de dos o mas digitos
numeros.sort();

// Ordenar de forma numerica

numeros.sort(function(a, b){
    return a-b; // ascendente
    // return b-a //descendente
});
mostrarArray(numeros, 'ordenado');


// 4. Invertir su orden y mostrarlo

numeros.reverse();
mostrarArray(numeros, 'revertido');

// 5. Mostrar cuantos elementos tiene el array 

document.write("<h1>El array tiene "+ numeros.length +" elementos</h1>");

// 6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice

let busqueda = parseInt(prompt("Busca un numero"));

let posicion = numeros.findIndex(function(elemento){
    return elemento == busqueda
});

// Si posicion da true y es diferente a -1 => se utiliza -1, por que el indice empieza con el 0
if (posicion && posicion != -1) {
    document.write("<h1>Numero encontrado</h1>");
    document.write("<h2>Posicion de la busqueda: "+ posicion +"</h2>"); // ya se le aplico un reverse
} else {
    document.write("<h1>Numero no encontrado</h1>");
}


