'use strict'

// BOM, Browser Object Model
// Elemento principal es el window

function getBom(){
    console.log(screen.width); //muestra el ancho de la ventana, tambien se puede utilizar el window.innerWidth
    console.log(screen.height); //muestra la altura de la ventana, tambien se puede utilizar el window.innerHeight
    console.log(window.location); //obtiene un array de la propiedad de la URL del navegador(sirve para saber en que URL se encuentra el usuario)
}

getBom();

//  **********************ejecutar las funciones en la consola**************


function redirect(url){
    window.location.href = url;
}

function openWindow(url){
    window.open(url, "", "width=350, height=550");
}

