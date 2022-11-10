import data from './data/pokemon/pokemon.js';
import { resumeData } from './data.js';

const arregloPokemon = data.pokemon
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

