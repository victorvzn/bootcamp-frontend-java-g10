const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear2')
const taskList = document.querySelector('.task__list')

let tasks = [
  {
    id: 'tarea-1',
    title: 'Estudiar Javascript',
    completed: true
  },
  {
    id: 'tarea-2',
    title: 'Salir al receso a las 9:00pm',
    completed: false
  },
  {
    id: 'tarea-3',
    title: 'Realizar un reto para el fin de semana',
    completed: false
  }
]

function renderTasks() {
  // console.log('Renderizando las tareas...')
  let list = ''

  tasks.forEach(function(task, index) {
    // list = list + '<li>' + task.title + '</li>'
    list = list + `
      <li class="flex justify-center items-center gap-4 py-1">
        <input
          type="checkbox"
          ${task.completed ? 'checked' : '' }
        />
        <div class="w-full">
          ${task.title}
        </div>
        <button class="border border-red-700 font-medium text-sm p-1 px-3 text-red-900 hover:bg-red-700 hover:text-white rounded-lg duration-300">
          Borrar
        </button>
      </li>
    `
  })

  console.log(list)
  taskList.innerHTML = list
}

// TODO: 01 - Al presionar enter en la caja de texto debe agregarse una nueva tarea.
// Manejar eventos, y renderizar el nuevo elemento.

renderTasks()