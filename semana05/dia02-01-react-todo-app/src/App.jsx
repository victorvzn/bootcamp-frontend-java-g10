import { useState } from "react"
import { TodoHeader } from "./components/TodoHeader"

export default function App() {
  // Logica de la función

  const DEFAULT_TODOS = [
    {
      id: '1',
      title: 'Aprender Javascript',
      completed: true
    },
    {
      id: '2',
      title: 'Aprender CSS',
      completed: false
    },
    {
      id: '3',
      title: 'Aprender React.js + Tailwind',
      completed: true
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)

  // console.log(todos)

  return (
    <main 
      className="bg-yellow-100 w-[400px] mx-auto mt-10 border border-yellow-400 rounded-lg shadow-md p-4"
    >
      <TodoHeader title="Todo APP + React + Tailwind" />
  
      <ul className="flex flex-col gap-2 mt-4">
        <li className="flex gap-2 bg-yellow-200 p-2 rounded-lg">
          <input
            type="checkbox"
          />
          <div className="w-full flex justify-between items-center">
            <span className="font-medium">
              Tarea 1
            </span>
            <button
              className="bg-red-300 rounded-lg px-2 py-1 cursor-pointer"
            >
              ❌
            </button>
          </div>
        </li>
      </ul>
    </main>
  )
}