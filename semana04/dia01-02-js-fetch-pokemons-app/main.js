let currentPage = 1
let totalCount = 0
const LIMIT = 9

const fetchPokemons = async (page=1) => {
  const offset = (page - 1) * LIMIT

  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${LIMIT}`

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

  totalCount = data.count

  return {
    ...data,
    results: dataResults
  }
}

const renderPokemons = (pokemons = []) => {
  // TODO: 01 - Renderizar cada pokemon en #pokemonList
  const pokemonList = document.querySelector('#pokemonList')
  const elCurrentPage = document.querySelector('#currentPage')

  let elements = ''

  pokemons.forEach(pokemon => {
    elements += `
      <article class="pokemon-item">
        <h2>#${pokemon.id} - ${pokemon.name}</h2>
        <img
          src="${pokemon.image}"
          onerror="this.src='https://placehold.co/80x80'"
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

  const totalPages = Math.ceil(totalCount / LIMIT)

  elCurrentPage.textContent = `${currentPage} de ${totalPages}`
}

const elNextPage = document.querySelector('#nextPage')
const elLastPage = document.querySelector('#lastPage')
const elPrevPage = document.querySelector('#prevPage')
const elFirstPage = document.querySelector('#firstPage')

elNextPage.addEventListener('click', async (event) => {
  currentPage = currentPage + 1

  console.log({totalCount})

  const totalPages = Math.ceil(totalCount / LIMIT)

  if (currentPage > totalPages) {
    currentPage = totalPages
    return
  }

  const data = await fetchPokemons(currentPage)

  renderPokemons(data.results)
})

elLastPage.addEventListener('click', async (event) => {
  const totalPages = Math.ceil(totalCount / LIMIT)

  currentPage = totalPages

  const data = await fetchPokemons(currentPage)

  renderPokemons(data.results)
})

// TODO: Implementar el botón Previous y el botón first

elPrevPage.addEventListener('click', async (event) => {
  currentPage = currentPage - 1

  if (currentPage <= 0) {
    currentPage = 1
    return
  }

  const data = await fetchPokemons(currentPage)

  renderPokemons(data.results)
})

elFirstPage.addEventListener('click', async (event) => {
  currentPage = 1

  const data = await fetchPokemons(currentPage)

  renderPokemons(data.results)
})


fetchPokemons()
  .then(data => {
    renderPokemons(data.results)
  })