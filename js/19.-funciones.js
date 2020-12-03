'use strict'
/*
Funciones: Una función es una agrupacion reutilizable de un conjunto de instrucciones
 */

//  Funcion 
 function calculadora(){
    //  Intrucciones
    console.log("Calculadora sin parametros");
    console.log("Hola");
    return "Calculadora";
 }

//  Invocar o llamar a la funcion 
 calculadora(); // No sera visible en la pantalla, se tiene que llamar por consola del navegador para que se vizualice el return


 // ###############################################################################################


 //  Funcion con parametros

function calculadoraParametro(numero1, numero2){
    // Conjunto de instrucciones
    console.log("Calculadora con parametros");
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("multiplicación: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));
    console.log("**************************************");
}

// Invocar o llamar a la funcion

// Ejemplo, se le pasa los numeros como parametros
calculadoraParametro(5,3);

// Ejemplo, con una iteracion for
// i < 5 = el numero 5 es la cantidad de iteacion que va a ser "i"
for(let i = 1; i < 5; i++){
    // Muestra con que iteracion se esta ejecutando la operacion
    console.log(i +" y 8")
    // El nunero 8 es la constante con la que se va a ejecutar la operacion(+-*/) 
    calculadoraParametro(i,8);
}

// ##################################################################################################

// Funcion con parametros opcionales

function calculadoraParametroOpcional(numero1, numero2, opcion = false){
    
    // Conjunto de instrucciones 

    if(opcion == false){
        console.log("Calculadora con parametro opcional");
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("multiplicación: " + (numero1*numero2));
        console.log("División: " + (numero1/numero2));
        console.log("**************************************");
    } else{
        document.write("Calculadora con parametro opcional <br/>");
        document.write("Suma: " + (numero1+numero2)+"<br/>");
        document.write("Resta: " + (numero1-numero2)+"<br/>");
        document.write("multiplicación: " + (numero1*numero2)+"<br/>");
        document.write("División: " + (numero1/numero2)+"<br/>");
        document.write("************************************** <br/>");
    }  
}

// Invocar o llamar a la funcion

calculadoraParametroOpcional(3,2); // por default ya esta inicializado la variable opcion = false, se ejecutara el if como verdadero
calculadoraParametroOpcional(3,2,true); // la variable opcion fue inicializado con true, se ejecutara la opcion de else 

// #######################################################################################################

// Funcion dentro de otra funcion

function porConsole(numero1, numero2){
    console.log("Calculadora Dentro De Otras Fuciones");
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("multiplicación: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));
    console.log("**************************************");
}

function porDocument(numero1, numero2){
    document.write("Calculadora Dentro De Otras Fuciones <br/>");
    document.write("Suma: " + (numero1+numero2)+"<br/>");
    document.write("Resta: " + (numero1-numero2)+"<br/>");
    document.write("multiplicación: " + (numero1*numero2)+"<br/>");
    document.write("División: " + (numero1/numero2)+"<br/>");
    document.write("**************************************");
}

function calculadoraDentroDeFuciones(numero1, numero2, opcion = false){
    
    // Conjunto de instrucciones 

    if(opcion == false){
        porConsole(numero1, numero2);
    } else{
        porDocument(numero1, numero2)
    }
    
    return true; // Se puede poner o quitar, la funcion va a ejecutar
}

// Invocar o llamar a la funcion

calculadoraDentroDeFuciones(3,3); // por default ya esta inicializado la variable opcion = false, se ejecutara el if como verdadero
calculadoraDentroDeFuciones(3,3,true); // la variable opcion fue inicializado con true, se ejecutara la opcion de else 

