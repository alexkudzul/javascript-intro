'use strict'

// fetch, es un metodo de Ajax, que nos permite hacerlo de manera mas sencilla, 
// peticiones asincronas a un servidor 

// peticiones a servicios / apis rest

// hacer pruebas con https://regres.in/api/users , nos brinda datos falsos en formato json



// fetch recibe una url que devuelva un json(promesa)
// en la promesa se tiene al metodo then
// then = recoge datos, tiene una funcion de callback y esa funcion recibe esa misma data y lo convierte a json
// se ejecuta de nuevo el then con la data ya convertido a json
// data se almacena en la variable usuarios

/*
var usuarios = [];

fetch('https://regres.in/api/users')
    .then(data => data.json())
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);  
        
        // recorremos el objeto json con map o con forEach
    usuarios.map((user, index) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = index + '. ' + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
    });
    });
*/


let div_usuarios = document.querySelector("#usuarios");
let div_profesor = document.querySelector("#profesor");
let div_janet = document.querySelector("#janet");


	getUsuarios()
		.then(data => data.json())
		.then(users => {
			listadoUsuarios(users.data);

			return getInfo();
		})
		.then(data => {
			div_profesor.innerHTML = data;

			return getJanet();
		})
		.then(data => data.json())
		.then(user => {
			mostrarJanet(user.data);
		})
		.catch(error => {
			alert("Error en las peticiones");
		});
		


function getUsuarios(){
	return fetch('https://reqres.in/api/users');
}

function getJanet(){
	return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
	let profesor = {
		nombre: 'Alex',
		apellidos: 'Ku',
		url: 'https://google.com'
	};

	return new Promise((resolve, reject) => {
		let profesor_string = "";

		setTimeout(function(){
			profesor_string = JSON.stringify(profesor);

			if(typeof profesor_string != 'string' || profesor_string == '') return reject('error 1');

			return resolve(profesor_string);

		}, 3000);
		
	});

}

function listadoUsuarios(usuarios){
	usuarios.map((user, i) => {
			let nombre = document.createElement('h3');

			nombre.innerHTML = i + '. ' + user.first_name + " " + user.last_name;

			div_usuarios.appendChild(nombre);

			document.querySelector(".loading").style.display = 'none';
		});
}

function mostrarJanet(user){
	console.log(user);
	let nombre = document.createElement('h4');
	let avatar = document.createElement('img');

	nombre.innerHTML =  user.first_name + " " + user.last_name;
	avatar.src = user.avatar;
	avatar.width = '100';

	div_janet.appendChild(nombre);
	div_janet.appendChild(avatar);

	document.querySelector("#janet .loading").style.display = 'none';
		
}









// Es lo mismo, la funcion con flecha, automaticamente ya trea el return 
/* fetch('https://regres.in/api/users')
    .then(function(data){ 
        return data.json() 
    })
    .then(function(users){
        usuarios = users.data;
        console.log(usuarios);
    });
*/
