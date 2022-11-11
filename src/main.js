//importo la data
import data from './data/pokemon/pokemon.js';
import { resumeData } from './data.js';
//accedo a la función que desee colocando el nombre de la misma dentro de {} desde el data.js
import { filtrarPokemonPorTipo } from "./data.js"


//aqui se guarda el arreglo de los pokemones
let arregloPokemon = data.pokemon

const btnConocerMas = document.getElementById('conocerMas');
const pantallaUno = document.getElementById('contenedor1');
const pantallaDos = document.getElementById('root');

//FUNCIÓN PARA BOTÓN "CONOCE MÁS" Y CAMBIO DE PANTALLA//
btnConocerMas.addEventListener("click", (event) => {
   event.preventDefault()
   pantallaUno.style.display = "none";
   pantallaDos.style.display = "flex";
});
/*
estoy creando una función para pintar los pokemones ya que por eso nos da errores al filtrar y no los arroja, 
ya que en las lineas 27 a la 42 es donde se encuentra todo lo necesario para pintarlos.
*/
//le paso como parametro pokemones ya que eso es lo que queremos que muestre la interfaz
function pintarPokemones(pokemones) {
   const pokeCard = document.getElementById("root")
   //aqui le paso el parametro pokemones
   const mostrarData = resumeData(pokemones);
   pokeCard.innerHTML = "";
   mostrarData.forEach(element => {

      pokeCard.insertAdjacentHTML("beforeend", `<div class="pokemonCard" id="pokemonCard">
   <div class="img-container">
    <img id="imgPokemon" src="${element.imagen}" alt="">
   </div>
   <div class="info">
   <span class="number" id="number">"${element.numero}"</span>
   <h3 claass="name" id="name">"${element.nombre}" </h3>
   </div>
   </div>`);
   });
}
/*
aqui llamo la función creada y le paso como parametro "arregloPokemon" que es la varibale que guarda 
dicha información.
*/
pintarPokemones(arregloPokemon);

const pokeCard = document.getElementById("root")
const mostrarData = resumeData(arregloPokemon);
pokeCard.innerHTML = "";
mostrarData.forEach(element => {

   pokeCard.insertAdjacentHTML("beforeend", `<div class="pokemonCard" id="pokemonCard">
   <div class="img-container">
    <img id="imgPokemon" src="${element.imagen}" alt="">
   </div>
   <div class="info">
   <span class="number" id="number">"${element.numero}"</span>
   <h3 claass="name" id="name">"${element.nombre}" </h3>
   </div>
   </div>`);
});

//let inputParaBuscarPokemon = document.getElementById ("inputPokemonNombre");
let selectTipoDePokemon = document.getElementById("selectTipoDePokemon");
let botonFiltrarPoke = document.getElementById("botonFiltrarPokemon");

//Manipulación del filtrado 
botonFiltrarPoke.addEventListener("click", () => {

   const indiceSeleccionadoDelPokemon = selectTipoDePokemon.selectedIndex;
   const opciones = selectTipoDePokemon.options;
   const seleccionTipoPokemon = opciones[indiceSeleccionadoDelPokemon];
   const valorDeOpcionSeleccionado = seleccionTipoPokemon.value;

   //aqui estoy pintando los pokemones filtrados
   let arregloPokemon = data.pokemon
   let resultado = filtrarPokemonPorTipo(arregloPokemon, valorDeOpcionSeleccionado)

   //llamo la función creada y utilizo la variable RESULTADO para pintar los pokemones en la interfaz.
   pintarPokemones(resultado);
})


