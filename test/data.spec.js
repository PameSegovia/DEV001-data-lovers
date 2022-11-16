import { resumeData, filtrarPokemonPorTipo, sortName, sortNameReverse, sortNumber, sortNumberReverse } from '../src/data.js';

//TEST PARA FUNCIÓN DE TRAER LOS DATOS ESPECÍFICOS//
describe('resumeData Test', () => {
  it('Es una función', () => {
    expect(typeof resumeData).toBe('function');
  });
  it('Debe retornar about, img, name, num, type', () => {
    const exampleData = [{
      "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
      "name": "bulbasaur",
      "num": "001",
      "type": [
        "normal"],
    }
    ]
    const expectResult = [
      {
        "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
        "name": "bulbasaur",
        "num": "001",
        "type": [
          "normal"],
      }
    ];
    const resumirDato = resumeData(exampleData, "https://www.serebii.net/pokemongo/pokemon/001.png", "001", "bulbasaur", "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.", "normal",)
    expect(resumirDato)===(expectResult);
  });
})

//TEST PARA FUNCIÓN DE FILTRAR POR TIPO//
describe('filtrarPokemonPorTipo Test', () => {
  it('Es una función', () => {
    expect(typeof filtrarPokemonPorTipo).toBe('function');
  });
  it('Debe filtrar los pokemones por tipo', () => {
    const exampleData = [{
      "type": [
        "grass",
        "poison"]
    }
    ]
    const expectResult = [{
      "type": [
        "grass",
        "poison"]
      }
    ];
    const filtrarPokePorTipo = filtrarPokemonPorTipo (exampleData, "grass", "poison")
    expect(filtrarPokePorTipo)===(expectResult);
  });
})

//TEST PARA FUNCIÓN DE ORDENAR ALFABETICAMENTE/
//FUNCION A-Z//
describe('sortName Test', () => {
  it('Es una función', () => {
    expect(typeof sortName).toBe('function');
  });
  it('Debe ordenar los pokemones por nombre en forma ascendete', () => {
    const exampleData = [
      {
      "name": "abra"
    },
    {
      "name": "aerodactyl"
    },
    {
      "name": "aipom"
    }
    ];
    const expectResult = [
      {
      "name": "abra"
    },
    {
      "name": "aerodactyl"
    },
    {
      "name": "aipom"
    }
    ];
    const ordenarABC = sortName (exampleData, "abra", "aerodactyl")
    expect(ordenarABC)===(expectResult);
  });
})

//FUNCION Z-A//
describe('sortNameReverse Test', () => {
  it('Es una función', () => {
    expect(typeof sortNameReverse).toBe('function');
  });
  it('Debe ordenar los pokemones por nombre en forma descendete', () => {
    const exampleData = [
      {
      "name": "zubat"
    },
    {
      "name": "zapdos"
    },
    {
      "name": "yanma"
    }
    ];
    const expectResult = [
      {
        "name": "zubat"
      },
      {
        "name": "zapdos"
      },
      {
        "name": "yanma"
      }
    ];
    const ordenarZWX = sortNameReverse (exampleData, "zubat", "zapdos", "yamna")
    expect(ordenarZWX)===(expectResult);
  });
})

//TESTS PARA FUNCIONES DE ORDENAR POR NÚMERO//
//FUNCION ORDENAR DE MENOR A MAYOR//
describe('sortNumber Test', () => {
  it('Es una función', () => {
    expect(typeof sortNumber).toBe('function');
  });
  it('Debe ordenar los pokemones por número de forma ascendente', () => {
    const exampleData = [
      {
        "num": "001"
      },
      {
        "num": "002"
      },
      {
        "num": "003"
      }
    ];
    const expectResult = [
      {
        "num": "001"
      },
      {
        "num": "002"
      },
      {
        "num": "003"
      }
    ];
    const ordenar123 = sortNumber(exampleData, "001", "002", "003")
    expect(ordenar123) === (expectResult);
  });
})

//FUNCION ORDENAR DE MAYOR Y MENOR//
describe('sortNumberReverse Test', () => {
  it('Es una función', () => {
    expect(typeof sortNumberReverse).toBe('function');
  });
  it('Debe ordenar los pokemones por número de forma descendente', () => {
    const exampleData = [
      {
        "num": "003"
      },
      {
        "num": "002"
      },
      {
        "num": "001"
      }
    ];
    const expectResult = [
      {
        "num": "003"
      },
      {
        "num": "002"
      },
      {
        "num": "001"
      }
    ];
    const ordenar321 = sortNumberReverse(exampleData, "003", "002", "001")
    expect(ordenar321) === (expectResult);
  });
})