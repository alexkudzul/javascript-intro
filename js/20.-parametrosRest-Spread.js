'use strict'

// Parametros Rest y Spread
// Se agrega tres puntos supensivos antes de un parametro
// Ejemplo "...pametro" creara un array de los parametros que no estan asignadas o que no tiene variables

function listaFrutas(fruta1,fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log("Resto de las frutas: ", resto_de_frutas);
}
// Aplicacion de REST
listaFrutas("Naranja", "Limon", "Platano", "Uva", "Manzana", "Sandia");

// Aplicacion de SPREAD
let frutas = ["Naranja", "Limon"];
listaFrutas(...frutas, "Platano", "Uva", "Manzana", "Sandia");