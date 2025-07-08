const fetchPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon'

  const response = await fetch(url) // Devuelve una promesa

  return await response.json()
}

const renderPokemons = (pokemons = []) => {

  // TODO: Renderizar cada pokemon en #pokemonList

}

fetchPokemons()
  .then(data => {
    renderPokemons(data)
  })