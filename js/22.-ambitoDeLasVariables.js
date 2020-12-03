'use strict'

// Ambito o alcance de las variables
// Variable global = se puede acceder dentro o afuera de la funcion
// Variable local = se puede acceder solo dentro de la funcion que pertenece
function ambito(variableGlobal){

    let variableLocal = "Variable local";

    console.log(variableGlobal);
    console.log(variableLocal);
    console.log(numeroGlobal.toString());
}

var variableGlobal = "Variable global";
var numeroGlobal = 5;

ambito(variableGlobal);