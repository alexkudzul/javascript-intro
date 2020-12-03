'use strict'

// window.addEventListener('load', function(){
//     console.log("Dom cargado");

    
// });

    let formulario = document.querySelector("#formulario");

    let box_dashed = document.querySelector(".dashed");
        // Mantiene oculto la caja
        box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){

        console.log("Submit capturado");

        // value, se obtiene la propiedad o los datos de ese campo

        let name = document.querySelector("#name").value;
        let lastname = document.querySelector("#lastname").value;
        let year = parseInt(document.querySelector("#year").value);

        // VALIDACION DE FORMULARIO


        // trim() quita los espacios del input al inicio y al final 
        if(name.trim() == null || name.trim().length == 0){
            alert("El nombre no es valido");
            document.querySelector("#error_name").innerHTML = "El nombre no es valido <br>"; //mostrar nombre
            return false;
        }else{
            document.querySelector("#error_name").style.display = "none"; //ocultar mensaje
        }

        // trim() quita los espacios del input al inicio y al final 
        if(lastname.trim() == null || lastname.trim().length == 0){
            alert("El apellido no es valido");
            return false;
        }

        // trim() no acepta numeros
        // is Not And Number isNaN, si no es un numero
        if(year == null || year <= 0 || isNaN(year)){
            alert("La edad no es valido");
            return false;
        }


        // Mantiene visible la caja, cuando se en submit
        box_dashed.style.display = "block";

        console.log(name, lastname, year);

        // OPCION 1, Mostrar datos por pantalla

        let p_name= document.querySelector("#p_name span");
        let p_lastname= document.querySelector("#p_lastname span");
        let p_year= document.querySelector("#p_year span");

        p_name.innerHTML = name;
        p_lastname.innerHTML = lastname;
        p_year.innerHTML = year;

        // OPCION 2, Mostrar datos por pantalla

        // let datos_usuario = [name,lastname,year];

        // for(let indice in datos_usuario){
        //     let parrafo = document.createElement("p");
                
        //     parrafo.append(datos_usuario[indice]);
        //     box_dashed.append(parrafo);
        // }        
    });