export default function App() {
  // TODO: Cargar los datos de la poke.api, renderizar nombre e imagen y añadir paginación usando el hook useEffect. Opcional: añadir estilos con tailwind.

  return (
    <main className="mt-4">
      <h1>
        Pokemon list
      </h1>

      <section>
        <article>
          <img src="https://placehold.co/200x150" />
          <h3>Pokemon name</h3>
        </article>
      </section>

      <section>
        <button>First</button>
        <button>Prev</button>
        <span>0 de 0</span>
        <button>Next</button>
        <button>Last</button>
      </section>

      <pre></pre>
    </main>
  )
}
