//importo la data
import data from './data/pokemon/pokemon.js';
import { resumeData } from './data.js';
//accedo a la función que desee colocando el nombre de la misma dentro de {} desde el data.js
import {filtrarPokemonPorTipo} from "./data.js"


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
let selectTipoDePokemon = document.getElementById ("selectTipoDePokemon");
let botonFiltrarPoke = document.getElementById ("botonFiltrarPokemon");

//Manipulación del filtrado 
botonFiltrarPoke.addEventListener("click", () => {
  // let pokemones = data.pokemon;
   const indiceSeleccionadoDelPokemon = selectTipoDePokemon.selectedIndex;
   const opciones = selectTipoDePokemon.options;
   const seleccionTipoPokemon = opciones[indiceSeleccionadoDelPokemon];
   const valorDeOpcionSeleccionado = seleccionTipoPokemon.value;

   ///if(valorDeOpcionSeleccionado != ""){

   //aqui estoy pintando los pokemones
   let arregloPokemon = data.pokemon
   let resultado = filtrarPokemonPorTipo(arregloPokemon, valorDeOpcionSeleccionado)

   const pokeCard = document.getElementById("root");
   pokeCard.innerHTML = "";
   resultado.forEach((arregloPokemon) => {

      resumeData(arregloPokemon)
   })

})
