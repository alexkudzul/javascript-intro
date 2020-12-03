'use strict'

// Plantilla de textos

let nombre = prompt("Ingresa tu nombre");
let apellidos = prompt("Ingresa tus apellidos");


// let texto = "Mi nombre es: " + nombre +"<br/> Mis apellidos son: "+ apellidos;

// En vez de hacer lo anterior se puede hacer de la siguiente manera:
// agregando comillas invertidas, se puede agregar una plantilla html completa 
// y solo sustituir la variables correspondientes con el signo de pesos ${}
// de esta manera se evita concatenar varias veces en una cadena de texto

let texto = `

    <h1>Biemvenido</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>

`;

document.write(texto);

