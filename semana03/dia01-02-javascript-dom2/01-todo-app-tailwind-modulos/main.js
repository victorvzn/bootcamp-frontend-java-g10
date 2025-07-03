const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear2')
const taskList = document.querySelector('.task__list')

let tasks = []

// let tasks = [
//   {
//     id: 'tarea-1',
//     title: 'Estudiar Javascript',
//     completed: true
//   },
//   {
//     id: 'tarea-2',
//     title: 'Salir al receso a las 9:00pm',
//     completed: false
//   },
//   {
//     id: 'tarea-3',
//     title: 'Realizar un reto para el fin de semana',
//     completed: false
//   }
// ]

function removeTask() {
  console.log('Removiendo tarea ->')
}

function renderTasks() {
  // console.log('Renderizando las tareas...')
  let list = ''

  // TODO: Validar y añadir el contendo "No hay tareas registradas" si no hay tareas en el array tasks.



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
        <button
          class="border border-red-700 font-medium text-sm p-1 px-3 text-red-900 hover:bg-red-700 hover:text-white rounded-lg duration-300"
        >
          Borrar
        </button>
      </li>
    `
  })

  // console.log(list)
  taskList.innerHTML = list
}

taskList.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function(event) {
    console.log('removing task...s')
  })
})

// TODO: 01 - Al presionar enter en la caja de texto debe agregarse una nueva tarea.
// Manejar eventos, y renderizar el nuevo elemento.

taskInput.addEventListener('keydown', function(event) {
  console.log(event.key === 'Enter')

  // const value = taskInput.value
  const value = event.target.value

  if (value.trim() === '') {
    taskInput.value = ''
    return
  }

  if (event.key === 'Enter') {
    console.log('Agregando una nueva tarea', value)

    const newTask = {
      id: crypto.randomUUID(),
      title: value,
      completed: false
    }

    tasks.push(newTask)

    console.log(tasks)

    taskInput.value = ''

    renderTasks()
  }
})

renderTasks()