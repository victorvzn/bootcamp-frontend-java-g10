const fetchPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon'

  const response = await fetch(url) // Devuelve una promesa

  const data = await response.json()

  const dataResults = data.results.map(pokemon => {
    const id = pokemon.url.split('/').at(6)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    return {
      ...pokemon,
      id,
      image
    }
  })

  console.log({ dataResults })

  return {
    ...data,
    results: dataResults
  }
}

const renderPokemons = (pokemons = []) => {
  // TODO: 01 - Renderizar cada pokemon en #pokemonList
  const pokemonList = document.querySelector('#pokemonList')

  let elements = ''

  pokemons.forEach(pokemon => {
    elements += `
      <article class="pokemon-item">
        <h2>#${pokemon.id} - ${pokemon.name}</h2>
        <img
          src="${pokemon.image}"
          width="80"
          height="80"
        />
        <div class="pokemon-item__buttons">
          <button>Favorite</button>
          <button>Ver</button>
        </div>
      </article>
    `
  })

  pokemonList.innerHTML = elements
}

fetchPokemons()
  .then(data => {
    renderPokemons(data.results)
  })