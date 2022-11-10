//import {example} from './data.js';
//import data from './data/pokemon/pokemon.js';

export function resumeData (arregloPokemon){
  const primerosDatos = [];
  arregloPokemon.forEach(element => {
    primerosDatos.push({imagen:element.img, numero:element.num, nombre:element.name})
  });
return primerosDatos
}
