import { useEffect } from "react"
import { fetchCharacters } from "../../services/characters"
import { useState } from "react"
import { Link } from "react-router"

export default function List() {
  // TODO: Renderizar los items del resultado de personajes en un grilla de 3x3
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
      // .then(data => setCharacters(data.items))
      .then(({ items }) => setCharacters(items))
  }, [])

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 m-4">
      {characters.map(character => {
        return (
          <Link
            key={character.id}
            to={`/characters/${character.id}`}
          >
            <article
              className="bg-yellow-300 rounded-lg p-3 flex flex-col justify-evenly items-center"
            >
              <img src={character.image} width={50} />
              <h2 className="font-bold text-3xl text-center mt-2">
                #{character.id} - {character.name}
              </h2>
              <p className="font-bold text-center mt-2 bg-orange-300 text-slate-700 p-2 uppercase rounded-lg">
                {character.race}
              </p>
            </article>
          </Link>
        )
      })}
    </section>
  )
}
