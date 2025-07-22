import { useEffect, useState } from "react"

export default function App() {
  const [page, setPage] = useState(1)
  const [pokemons, setPokemons] = useState([])
  // const [counter2, setCounter2] = useState(0)

  // Manejar el ciclo de vida de nuestro componente: Creación, actualiza, destruye
  // useEffect(FN, DEPENDECIES)

  // useEffect(() => {
    // console.log('Se ejecute la primera vez')
  // }, [counter2])

  const fetchPokemons = async (page = 1) => {
    const limit = 9
    const offset = (page - 1) * limit

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    
    return await response.json()
  }

  useEffect(() => {
    console.log('Este useEffect se esta ejecutando cuando el estado page cambia')
    fetchPokemons(page)
      .then((data) => setPokemons(data.results))
  }, [page])

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* <button className="bg-blue-500 p-4" onClick={() => setCounter(counter + 1)}>{counter}</button> */}
        {/* <button className="bg-red-500 p-4" onClick={() => setCounter2(counter2 + 1)}>{counter2}</button> */}

        <h1>Pokemon List</h1>

        <ul>
          {pokemons.map(pokemon => {
            return (
              <li key={pokemon.url}>{pokemon.name}</li>
            )
          })}
        </ul>

        <button className="bg-blue-500 p-4" onClick={() => setPage(page + 1)}>
          Next {page}
        </button>

      </div>
      <pre>{JSON.stringify(pokemons, null, 2)}</pre>
    </>
  )
}
