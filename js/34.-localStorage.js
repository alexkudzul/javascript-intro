'use strict'

// LocalStorage

// Es una memoria que contiene el navegador, permiter guardar datos, tambien se define 
// como una forma de almacenar sesion en el navegador



// **************** Comprobar si LocalStorage esta disponible ***********************

if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("LocalStorage no es compatible");
}

// *************************** Guardar datos en el LocalStorage ***************************

localStorage.setItem("titulo", "Aprendiendo a guardar datos en LocalStorage");

// ************************** Obtener datos del LocalStorage ******************************

localStorage.getItem("titulo");

// ************************* Agregra el dato en Html ********************************

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// ************************ Guardar objetos ************************

let usuario = {
    nombre : "Alex",
    email : "alex@alex.com",
    web: "google.com"
}

// No se puede guardar un objeto puro en el LocalStorage, por lo que se tiene que convertir a un string

localStorage.setItem("usuario", JSON.stringify(usuario));

// ************************* Obtener datos de un objeto **********************************

// para obtener un objeto se tiene que parsear a un JSON con parse, ya stringify lo guarda en forma de un string
let getUsers = JSON.parse(localStorage.getItem("usuario"));

console.log(getUsers);

document.querySelector("#datos").append(getUsers.web +" - " +getUsers.nombre);

// ********************* Elimina un solo key o item ************************
// localStorage.removeItem("usuario");

// ********************* Limpia todo el storage ********************************
// localStorage.clear();