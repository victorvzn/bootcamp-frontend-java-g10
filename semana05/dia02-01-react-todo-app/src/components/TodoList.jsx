const TodoList = ({ todos = [] }) => {
  // TODO: 01 - Separar el siguiente li en un componente llamado 'TodoItem.jsx'

  return (
    <ul className="flex flex-col gap-2 mt-4">
      {todos.map(todo => {
        return (
          <li key={todo.id} className="flex gap-2 bg-yellow-200 p-2 rounded-lg">
            <input
              type="checkbox"
            />
            <div className="w-full flex justify-between items-center">
              <span className="font-medium">
                {todo.title}
              </span>
              <button
                className="bg-red-300 rounded-lg px-2 py-1 cursor-pointer"
              >
                ❌
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList