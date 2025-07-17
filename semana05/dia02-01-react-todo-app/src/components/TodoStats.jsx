// TODO: Llenar los datos de las estadisticas de las tareas y limpiar las tareas completadas con el botón

const TodoStats = () => {
  return (
    <section className="flex justify-between items-center">
      <span
        className="font-bold"
      >
        2 de 3
      </span>
      <button
        className="bg-blue-500 text-white rounded-lg px-2 py-1 hover:bg-blue-700 duration-300 cursor-pointer"
      >
        Limpiar completadas
      </button>
    </section>
  )
}

export default TodoStats