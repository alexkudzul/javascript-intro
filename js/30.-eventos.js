'use strict'

// Eventos del mouse
// Un evento es una funcion que se ejecuta, cuando sucede algo


// Evento load, cuando la pagina este cargada, se ejecutara el load que contiene toda las funciones, 
// que nos permite acceder al DOM, de igual menera nos permite agregar el script en el header

window.addEventListener('load', function(){

    let button = document.querySelector("#btn");

    function cambiarColor(){

        console.log("Click");

        let color = button.style.background;

        if(color == "green"){
            button.style.background = "blue";
        }else{
            button.style.background = "green";
        }

        button.style.padding = "5px";
        button.style.border = "1px solid #ccf";

        return true;
    }

    // Evento Click

    // addEventListener, escuchador de eventos, en este caso es clic, igual recibe una funcion de callback
    button.addEventListener('click', function(){
        cambiarColor();
    });

    // Evento mouseover, efecto cuando se pasa el mouse encima del boton 

    button.addEventListener('mouseover', function(){
        button.style.background = "#ccf";
    });


    // Evento mouseout, efecto cuando se sale el mouse encima del boton 

    button.addEventListener('mouseout', function(){
        button.style.background = "#aaf";
    });


    // Focus, dentro del input

    let input = document.querySelector("#name");

    input.addEventListener('focus', function(){
        console.log("Ejecutando Focus, dentro del input");
    });

    // Blur, fuera del input

    input.addEventListener('blur', function(){
        console.log("Ejecutando Blur, fuera del input");
    });

    // Keydown, Tecla pulsada

    input.addEventListener('keydown', function(event){
        console.log("Ejecutando Keydown, Tecla pulsada", String.fromCharCode(event.keyCode));
    });


    // Keypress, Tecla presionada

    input.addEventListener('keypress', function(event){
        console.log("Ejecutando Keypress, Tecla presionada", String.fromCharCode(event.keyCode));
    });


    // Keyup, Tecla soltada

    input.addEventListener('keyup', function(event){
        console.log("Ejecutando Keyup, Tecla soltada", String.fromCharCode(event.keyCode));
    });
});