export default function App() {
  const DEFAULT_STUDENTS = [
    {
      id: '8941ec9d-c644-4f5c-af28-207bc40604eb',
      name: 'Bulma',
      city: 'Chiclayo'
    },
    {
      id: 'db6e37d1-6df0-4ff2-9a8e-2cb166869d25',
      name: 'Goku',
      city: 'Trujillo'
    },
    {
      id: 'a768a694-bf79-4480-8ad5-38ee88e47a34',
      name: 'Vegeta',
      city: 'Lima'
    }
  ]

  return (
    <main>
      <h1>Student list - CRUD</h1>

      <form>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
            required
          />
        </label>
        <label>
          <span>City</span>
          <input
            type="text"
            name="city"
            placeholder="Ex. Cuzco"
            required
          />
        </label>
        <input
          type="submit"
          value="Save student"
        />
        <input
          type="button"
          value="Clean form"
        />
      </form>

      <section>
        <div>
          <div>Avatar</div>
          <div>Name</div>
          <div>City</div>
          <div>
            <button>
              Edit
            </button>
            <button>
              Delete
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
