import { useEffect } from "react"
import { fetchCharacters } from "../../services/characters"
import { useState } from "react"

export default function List() {
  // TODO: Renderizar los items del resultado de personajes en un grilla de 3x3
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
      // .then(data => setCharacters(data.items))
      .then(({ items }) => setCharacters(items))
  }, [])

  return (
    <section>
      {characters.map(character => {
        return (
          <article>
            <img src={character.image} width={50} />
            <h2>#{character.id} - {character.name}</h2>
            <p>{character.race}</p>
          </article>
        )
      })}
    </section>
  )
}
