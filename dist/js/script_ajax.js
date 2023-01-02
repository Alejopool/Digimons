let menuPokemon;
let contentPokemon;
let contador = 1;
let endpoint_actual = "https://pokeapi.co/api/v2/pokemon";

window.onload = function(){
	menuPokemon = document.getElementById("menuPokemon");
	contentPokemon = document.getElementById("contentPokemon");
}

function cargarListaPokemon(boton){

	fetch( endpoint_actual )
	.then( respuesta => respuesta.json() )
	.then( datos => {
		/* Eliminar el boton MAS */
		boton.remove();

		/* Poner los 20 botones para los pokemones obtenidos del servidor */
		for (var i=0; i<datos["results"].length; i++) {
			btn_html = `<button class="btn btn-outline-success col-12" onclick="cargarDetallePokemon('`+datos["results"][i]["name"]+`')" >`+contador+`-`+datos["results"][i]["name"]+`</button>`;
			menuPokemon.innerHTML = menuPokemon.innerHTML + btn_html;
			contador++;
		}

		/* Actualizar el siguiente Endpoint */
		endpoint_actual = datos["next"];

		/* Poner el boton de MAS al final */
		menuPokemon.innerHTML = menuPokemon.innerHTML + `<button class="btn btn-primary border-bottom col-12" onclick="cargarListaPokemon(this)" > ..MAS.. </button>`;
	});
}

function cargarDetallePokemon(nombre){
	let url = "https://pokeapi.co/api/v2/pokemon/"+nombre;
	fetch( url )
	.then( respuesta => respuesta.json() )
	.then( datos => {

		texto_html = `
						<h5>`+datos["name"]+`</h5>
						<img src="`+datos["sprites"]["other"]["dream_world"]["front_default"]+`" height="300px" >
					 `;

		contentPokemon.innerHTML = texto_html;
		
	});
}