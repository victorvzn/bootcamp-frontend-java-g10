const TodoItem = ({ todo, onRemoveTodo, onCompleted }) => {

  // TODO: Editar el título del todo haciendo doble click en el título, esto hará que aparezca una caja de texto. Y para guardarlo solo debemos presionar enter en la caja de texto.

  return (
    <li className="flex gap-2 bg-yellow-200 p-2 rounded-lg">
      <input
        type="checkbox"
        data-id={todo.id}
        onChange={onCompleted}
        checked={todo.completed}
      />
      <div className="w-full flex justify-between items-center">
        <span className="font-medium">
          {todo.title}
        </span>
        <button
          className="bg-red-300 rounded-lg px-2 py-1 cursor-pointer"
          data-id={todo.id}
          onClick={onRemoveTodo}
        >
          ❌
        </button>
      </div>
    </li>
  )
}

export default TodoItem