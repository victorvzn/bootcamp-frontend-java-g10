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

  console.log(todos)

  return (
    <main 
      className="bg-yellow-100 w-[400px] mx-auto mt-10 border border-yellow-400 rounded-lg shadow-md p-4"
    >
      <TodoHeader />
      Todo App
    </main>
  )
}