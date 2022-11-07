//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data.pokemon[156].name);
//console.log(([]).forEach);


function img(linkImg) {
    let contenedor = document.createElement("div")
    let imagen = document.createElement("img");
    imagen.src = linkImg;
    contenedor.appendChild(imagen);
    //document.body.appendChild(imagen);
    contenedor.classList.add("contenedor-img");
    imagen.classList.add("imagen-pokemon");

    return contenedor;
}

function names(nombres) {
    let contenedor = document.createElement("article");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = nombres;
    contenedor.appendChild(parrafo);
    //le estoy agregando una clase al elemento contenedor
    contenedor.classList.add("contenedor-nombre");

    return contenedor;
}


function descripcion(informacion) {
    let contenedor = document.createElement("article");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = informacion;
    contenedor.appendChild(parrafo);
    //le estoy agragndo una clase al elemento contenedor
    contenedor.classList.add("contenedor-descripcion");

    return contenedor;
}



function contenedorPpal(pokemon) {
    let contenedor = document.createElement("div")
    let root = document.getElementById("root")
    root.appendChild(contenedor);
    contenedor.appendChild(img(pokemon.img));
    contenedor.appendChild(names(pokemon.name));
    contenedor.appendChild(descripcion(pokemon.about));
    contenedor.appendChild(debilidad(pokemon.weaknesses));
    contenedor.appendChild(resistencia(pokemon.resistant));
    //le estoy agragndo una clase al elemento contenedor
    contenedor.classList.add("contenedor-ppal");

}

function debilidad(debilidades) {
    let contenedor = document.createElement("article");
    debilidades.forEach((debilidad) => {
        let span = document.createElement("span");
        contenedor.appendChild(span);
        span.innerHTML = debilidad;
        span.classList.add("item-debilidad");
    })
    //le estoy agragndo una clase al elemento contenedor
    contenedor.classList.add("contenedor-debilidades");

    return contenedor;
}

function resistencia(resistencias) {
    let contenedor = document.createElement("article");
    resistencias.forEach((resistencia) => {
        let span = document.createElement("span");
        contenedor.appendChild(span);
        span.innerHTML = resistencia;
        span.classList.add("item-resistencia");
    })
    //le estoy agragndo una clase al elemento contenedor
    contenedor.classList.add("contenedor-resistencias");

    return contenedor;
}

