//import {example} from './data.js';
//import data from './data/pokemon/pokemon.js';
//import data from "./data/pokemon/pokemon.js";

//estoy exportando la función
export function resumeData(arregloPokemon) {
  const primerosDatos = [];
  arregloPokemon.forEach(element => {
    primerosDatos.push({ imagen: element.img, numero: element.num, nombre: element.name })
  });
  return primerosDatos
}

//estoy exportando la función
export function filtrarPokemonPorTipo(pokemones, tipoDePokeSeleccionadoPorUsuario) {
  return pokemones.filter((pokemon) => {
    return pokemon.type.includes(tipoDePokeSeleccionadoPorUsuario)
  })
}


export function buscarPokemonPorNombre(pokemones, nombreDePokemon) {
  return pokemones.filter((pokemon) => {
    return pokemon.name.includes(nombreDePokemon)

  })
}
//variedades.forEach((variedad)=> {
//let  pruebaResult= filtrarPokemon(data.pokemon, variedad);
//console.log(variedad, pruebaResult)
//})