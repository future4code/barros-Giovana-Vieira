type Pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: Pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: Pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: Pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

/* b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
Resposta: Apenas rodaria o script que já possuiria o tsc. */

/* c) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças. 
Resposta: Não pois no tsconfig.json já tem a configuração que considera que todos meus arquivos ts estão dentro da pasta src. */

