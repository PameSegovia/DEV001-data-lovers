//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data.pokemon[156].name);
//console.log(([]).forEach);

data.pokemon.forEach( (pokemon, i) =>{
   // console.log(pokemon.img);
    //aquí se imprime la imágen de cada pokemon contenido en el arreglo.
   img(pokemon.img);
})
  function img (linkImg){
    let imagen = document.createElement("img");
    let elemento = document.getElementById("root");
    imagen.src = linkImg;
    elemento.appendChild(imagen);
    //document.body.appendChild(imagen);
    console.log(imagen);
}




