'use strict'

/*
Tabla de multiplicar de un numero introducido por pantalla
*/

let numero = parseInt(prompt("Ingresa un numero para visualizar la tabla de multiplicación"));

document.write("<h1>Tabla del "+ numero+"</h1>");

for(let i = 1; i <= 10; i++){
    document.write( numero + " x " + i +" = " + (i*numero)+ "<br/>");
}


// Toda las tablas de multiplicar 
// j variable para decir hasta que tabla se necesita mostrar
// i variable para mostrar la tabla indivual 

 for(let j = 1; j <= 10; j++){
    document.write("<h1>Tabla del "+j+"</h1>");
    for(let i= 1; i<=10; i++){
        document.write( j + " x " + i +" = " + (i*j)+ "<br/>");
    }
 }
