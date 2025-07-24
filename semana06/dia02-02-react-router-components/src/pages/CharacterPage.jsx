import { useEffect } from "react"
import { Link, useParams, useNavigate, useSearchParams } from "react-router"
import { getCharacter } from "../services/characters"
import { useState } from "react"

export default function CharacterPage() {
  const { id } = useParams() // { id: 1 }

  const navigate = useNavigate()

  const [searchParams] = useSearchParams()

  // characters?order=desc
  const order = searchParams.get('order') // desc

  const [character, setCharacter] = useState()

  useEffect(() => {
    getCharacter(id)
      .then(result => setCharacter(result))
  }, [])

  const handleBackCharacterListPage = () => {
    navigate('/characters')
  }

  return (
    <>
      <h1 className="text-3xl font-medium text-center mb-4">Character detail #{id} / {order}</h1>

      <section>
        <div className="flex flex-col gap-2 items-center justify-center">
          <button
            className="bg-blue-400 py-2 px-4"
            onClick={handleBackCharacterListPage}
          >
            Back character list (useNavigate)
          </button>

          <Link
            to='/characters'
            className="bg-green-400 py-2 px-4"
          >
            Edit
          </Link>
        </div>


        <img src={character?.image} width={200} />
        <h2>{character?.race}</h2>
        <strong>{character?.originPlanet?.name}</strong>
        <p>{character?.description}</p>
      </section>

      <pre className="border-t-2 mt-4">{JSON.stringify(character, null, 2)}</pre>
    </>
  )
}
