import { useState } from "react"
import Avatar from 'boring-avatars'
import { TbEdit, TbTrash } from 'react-icons/tb'

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

  // TODO: 01 - Mostrar la lista de estudiantes en una lista
  const [students, setStudents] = useState(DEFAULT_STUDENTS)

  // TODO: 02 - Agregar nuevo estudiante con nombre, ciudad
  const DEFAULT_FORM = {
    id: '',
    name: '',
    city: ''
  }

  const [form, setForm] = useState(DEFAULT_FORM)

  const handleChange = (event) => {
    console.log({ input: event.target })

    // Uso destructuring para obtener el name y el value del objeto target
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSave = (event) => {
    event.preventDefault();
    
    console.log('Guardando student...')

    const newStudent = {
      id: crypto.randomUUID(),
      name: form.name,
      city: form.city
    }

    const updatedStudents = [...students, newStudent]

    setStudents(updatedStudents)

    setForm(DEFAULT_FORM)
  }

  const handleRemove = (id) => {
    console.log('Deleting student', id)

    const updatedStudents = students.filter(student => student.id !== id)

    setStudents(updatedStudents)
  }

  return (
    <main className="w-96 mx-auto rounded-lg mt-6 p-4">
      <h1 className="text-2xl font-semibold text-center mb-3">Student list - CRUD</h1>

      <form
        className="flex flex-col gap-3 bg-slate-300 p-3 rounded-lg shadow-lg"
        onSubmit={handleSave}
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg p-2.5"
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
            required
            onChange={handleChange}
            value={form.name}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">City</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg p-2.5"
            type="text"
            name="city"
            placeholder="Ex. Cuzco"
            required
            onChange={handleChange}
            value={form.city}
          />
        </label>
        <input
          className="bg-blue-800 text-white hover:bg-blue-900 font-medium rounded-lg text-sm w-full py-2.5 cursor-pointer"
          type="submit"
          value="Save student"
        />
        <input
          className="bg-amber-500 text-white hover:bg-amber-600 font-medium rounded-lg text-sm w-full py-2.5 cursor-pointer"
          type="button"
          value="Clean form"
          onClick={() => setForm(DEFAULT_FORM)}
        />

        <pre>{JSON.stringify(form)}</pre>
      </form>

      <h2 className="text-xl font-semibold text-center mb-3 my-8">Student List</h2>

      <section className="student__list flex flex-col gap-2 mt-2">
        {students.map(student => {
          return (
            <div key={student.id} className="student__row flex justify-between items-center bg-slate-100 p-2 rounded-lg border border-slate-200">
              <Avatar name={student.name} size={48} variant="beam" />
              <div className="text-left font-semibold">{student.name}</div>
              <div className="text-left">{student.city}</div>
              <div className="flex gap-4">
                <button
                  className="text-blue-600 cursor-pointer font-semibold"
                >
                  <TbEdit size={20} />
                </button>
                <button
                  className="text-red-600 cursor-pointer font-semibold"
                  onClick={() => handleRemove(student.id)}
                >
                  <TbTrash size={20} />
                </button>
              </div>
            </div>
          )
        })}
      </section>

      <pre className="mt-8 border border-slate-300 p-3 rounded-lg bg-slate-50 overflow-y-auto">{JSON.stringify(students, null, 2)}</pre>
    </main>
  )
}
