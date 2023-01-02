let menuDigimons;
let endpoint_actual = "https://digimon-api.vercel.app/api/digimon";
/*modal*/
let modalDigimons;
/*imagen modal*/
let nombreDigimon;
let imagenModal;
letcontador = 1;


window.onload = function(){
	menuDigimons = document.getElementById('menuDigimons');
	imagenModal = document.getElementById('imagenModal');
	nombreDigimon = document.getElementById('nombreDigimon');
	modalDigimons = new bootstrap.Modal(document.getElementById('modalDigimons'), { backdrop: 'static', keyboard:false, focus:true } );
}

console.log(endpoint_actual);

function cargarListaDigimons(boton){
	fetch( endpoint_actual )
	.then(respuesta => respuesta.json() )
	.then(datos => {
		/*elimino el boton de mas*/

		boton.remove()

		/* Poner los botones para los digimons obtenidos del servidor */

		for (var i=0; i<datos.length; i++) {
			btn_html = `<button class="btn btn-outline-success col-12" onclick="cargarDetalleDigimons('`+datos[i]["name"]+`')" >`+datos[i]["name"]+`</button>`;
			menuDigimons.innerHTML = menuDigimons.innerHTML + btn_html;
			
			}
	});	
}

function cargarDetalleDigimons(nombre){
	let url = `https://digimon-api.vercel.app/api/digimon/name/`+nombre;
	fetch( url )
	.then(respuesta => respuesta.json() )
	.then(datos => {

		imagen = `<img src="`+datos[0]['img']+`" height="300px">`;

		nombreDigimon.innerText = nombre;
		imagenModal.innerHTML = imagen;


		modalDigimons.show()

			console.log(imagen);
			console.log(url);
	});
}