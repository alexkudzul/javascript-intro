'use strict'

// Fechas 

// Obtiene la fecha actual completa 
let date = new Date();

let year = date.getFullYear();

let month = date.getMonth();

let day = date.getDate();

let hour = date.getHours();

let dateString = `
    Fecha completa = ${date}
    Año = ${year}
    Mes = ${month}
    día = ${day}
    Hora = ${hour}

`;

console.log(dateString);


// ceil(), quita los decimales
// *10000, indica cuantos digitos sera
console.log(Math.ceil(Math.random()*10000))
