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
    list = list + '<li>Tarea</li>'
  })

  console.log(list)
  taskList.innerHTML = list
}

renderTasks()