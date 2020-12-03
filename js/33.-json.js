'use strict'

// JSON - JavaScript Object Notation

// Es un tipo de array asociativo

// Definir un objeto json

let pelicula =  {
    title : 'pelicula 1',
    year : 2000,
    country : 'pais 1'
}

let peliculas = [
    {title: "Pelicula 2", year: 2001, country: "pais 2"},
    pelicula
];

// cambiar una propiedad del objeto

pelicula.title = "Pelicula 1.1";

// Acceder a una propiedad
console.log(pelicula.title);

console.log(peliculas[0].country);

// Recorrer un objeto JSON y agregarlo en el html

let agregarPeliculas = document.querySelector("#peliculas");
let indice;

for(indice in peliculas){
    let parrafo = document.createElement("p");
    parrafo.append(peliculas[indice].title + ", año: " + peliculas[indice].year);
    agregarPeliculas.append(parrafo);
}