'use strict'

// Constantes -> Variable, su valor no puede cambiar.

let web ="www.google.com";
const ip = "192.120.1.10";

web = "www.youtube.com";
ip = "192.1.120.1"; // Error( Assignment to constant variable. ) No se puede agregar un valor variable a la constante

console.log(web, ip);
