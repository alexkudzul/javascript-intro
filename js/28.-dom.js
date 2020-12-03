'use strict'

// DOM, Document Object Model 

// Se puede ejecutar directamente desde la consola del navegador
function cambiarColor(color){
    domHtml.style.background = color;
}

// ************** Obtener un elemento por su ID **************************

// let domHtml = document.getElementById("dom");
let domHtml = document.querySelector("#dom");

domHtml.innerHTML = "Agrega hmtl en el dom"; 
domHtml.style.background = "blue";
domHtml.style.padding = "40px";
domHtml.style.color = "white";
domHtml.className = "agregaNuevaClaseEnElHtml otraClase";

console.log(domHtml);

// *************** Obtener un elemento por su ETIQUETA **************************

// TagName, obtiene los elementos y los agrega en un arrar de elementos
let todoLosDivs = document.getElementsByTagName("div");
console.log(todoLosDivs);

// Agregar contenido al indice 2 del elemento
// let contenidoEnTexto = todoLosDivs[2].textContent;
let contenidoEnTexto = todoLosDivs[2];
contenidoEnTexto.innerHTML = "Nuevo texto para el segundo div";
contenidoEnTexto.style.background = "blue";
console.log(contenidoEnTexto);

//**************************  Recorrer todo los divs ***************
// append, añade despues, prepend, añade antes

let seccion = document.querySelector("#seccion");
let hr = document.createElement("hr");


for(let valor in todoLosDivs){
    // Si es texto el valor de los divs
    if(typeof todoLosDivs[valor].textContent == 'string'){
        let parrafo = document.createElement("p");
        // por cada valor del div, crear un texto
        let texto = document.createTextNode(todoLosDivs[valor].textContent);
        // console.log(texto);
        // console.log(parrafo);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
// Agrega una linea
seccion.append(hr);

// *************** Obtener un elemento por su CLASE css *************************

// Se obtiene la clase blue
let divsAzules = document.getElementsByClassName('blue');

// Recorre todo los elementos con la clase azul
for(let divA in divsAzules){
    // Si la clase es igual a blue
    if(divsAzules[divA].className == "blue"){
        divsAzules[divA].style.background="blue";
    }
}
// Obtiene la clase green
let divsVerdes = document.getElementsByClassName('green'); // se convierte en una colleccion
divsVerdes[0].style.background = "green"

// ************************ Query selector *******************************

let id = document.querySelector("#ids");
console.log(id);

let classAzules = document.querySelector("div.blue");
console.log(classAzules);

let element = document.querySelector("div");
console.log(element);