const TodoItem = ({ todo }) => {
  return (
    <li className="flex gap-2 bg-yellow-200 p-2 rounded-lg">
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
}

export default TodoItem