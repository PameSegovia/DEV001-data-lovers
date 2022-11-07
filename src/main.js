import data from './data/pokemon/pokemon.js';

const btnConocerMas = document.getElementById('conocerMas');
const pantallaUno = document.getElementById('contenedor1');
const pantallaDos = document.getElementById('root');

//FUNCIÓN PARA BOTÓN "CONOCE MÁS" Y CAMBIO DE PANTALLA//
btnConocerMas.addEventListener("click", () => {
   pantallaUno.style.display = "none";
   pantallaDos.style.display = "block"
   })
 
//aquí se imprime la imágen de cada pokemon contenido en el arreglo.
data.pokemon.forEach( (pokemon, i) =>{
    img(pokemon.img);
})
  function img (linkImg){
   let imagen = document.createElement("img");
   let elemento = document.getElementById("imgPokemon");
    imagen.src = linkImg;
    elemento.appendChild(imagen);
    document.body.appendChild(imagen);
}

//FUNCION CREAR TARJETAS POKEMÓN

 
//data.pokemon.forEach((pokemon) => {

  //  contenedorPpal(pokemon)
//})
