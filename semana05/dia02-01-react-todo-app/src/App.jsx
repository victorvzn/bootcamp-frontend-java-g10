import { useState } from "react"

import { TodoHeader } from "./components/TodoHeader"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import TodoStats from "./components/TodoStats"

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

  const handleRemoveTodo = (event) => {
    const { id } = event.target.dataset

    console.log('Eliminando todo desde App.jsx', id)

    const updatedTodos = todos.filter(todo => todo.id !== id)

    setTodos(updatedTodos)
  }

  const handleSubmit = (newTodo) => {
    console.log('APP.jsx', newTodo)

    setTodos([...todos, newTodo])
  }

  const handleCompleted = (event) => {
    const { id } = event.target.dataset

    const isChecked = event.target.checked

    console.log(id, isChecked)

    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: isChecked
        }
      }

      return todo // Dejams el objeto sin modificaciones
    })

    setTodos(updatedTodos)
  }

  const handleClearCompletedTodos = () => {
    const incompletedTodos = todos.filter(todo => !todo.completed)

    setTodos(incompletedTodos)
  }

  return (
    <main 
      className="bg-yellow-100 w-[400px] mx-auto mt-10 border border-yellow-400 rounded-lg shadow-md p-4"
    >
      <TodoHeader title="Todo APP + React + Tailwind" />
  
      <TodoForm onSubmit={handleSubmit} />

      <TodoStats todos={todos} onClearCompletedTodos={handleClearCompletedTodos} />

      <TodoList
        todos={todos}
        onRemoveTodo={handleRemoveTodo}
        onCompleted={handleCompleted}
      />

      <pre className="mt-4">{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}