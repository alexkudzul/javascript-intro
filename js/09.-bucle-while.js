'use strict'

// Bucle While(mientras)
// Es una estructura de control que se repite varias veces 

let anio= 2018;

// mientras anio sea menor o igual a 2040 que se ejecute el bloque
// anio++ contador para poder romper el bucle infinito
while(anio <= 2040){
    console.log( "Año: " + anio);
    
    anio++;
}

console.log("------------------------ Decremento --------------------------------");

let anio2=2018;
while (anio2 != 1990) {
    console.log("Año: " + anio2);
    if(anio2 == 2000){
        break; // break -> permite para el bloque de la iteracion
    }
    anio2--;
}


// Bucle Do While(hacer, mientras)
// Es una estructura de control que permite ejecutar un bloque y despues ejecutar la condicion;

let years = 30;

do{
    alert("solo cuando sea diferente a 20");
    years--;
}while (years!=25)

