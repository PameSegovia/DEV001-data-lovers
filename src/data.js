//estamos exportando las funciones

export function resumeData(arregloPokemon) {
  const primerosDatos = [];
  arregloPokemon.forEach(element => {
    primerosDatos.push({ imagen: element.img, numero: element.num, nombre: element.name })
  });
  return primerosDatos
}


export function filtrarPokemonPorTipo(pokemones, tipoDePokeSeleccionadoPorUsuario) {
  return pokemones.filter((pokemon) => {
    return pokemon.type.includes(tipoDePokeSeleccionadoPorUsuario)
    })
}

