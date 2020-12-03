'use strict'

window.addEventListener('load', function(){
    // setInterval, se ejecuta en un bucle cada cierto tiempo, en este caso 3 segundos
    // setTimeout, se ejecuta una vez, con el tiempo que se le pase
    
    function ejecutarInvervalo(){
        let tiempo = setInterval(function(){
            console.log("setInterval ejecutado");
    
            let encabezado = document.querySelector("h1");
    
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        }, 1000); // 3 mil milisegundos o 3 segundos

        return tiempo;
    }

    let tiempo = ejecutarInvervalo();

    // clearInterval, elimina el intervalo y recibe el parametro tiempo

    let stop =document.querySelector("#stop");

    stop.addEventListener('click', function(){
        clearInterval(tiempo);
        alert("Has detenido el intervalo");
    });

    let start= document.querySelector("#start");

    start.addEventListener('click', () => {
        ejecutarInvervalo();
        alert("Has iniciado el intervalo");
    });
    
});