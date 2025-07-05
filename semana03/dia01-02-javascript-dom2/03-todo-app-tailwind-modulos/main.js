import { renderTasks } from './utils.js'

const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
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

// window.removeTask = removeTask // ❌ Exponemos el método

taskList.addEventListener('click', function(event) {
  const { target } = event

  if (target.tagName === 'BUTTON' && target.classList.contains('removebtn')) {
    console.log('eliminando tarea...')
    const { id } = target.dataset

    console.log(id)

    tasks = tasks.filter(function(task) {
      return task.id !== id
    })

    renderTasks(tasks)
  }

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    const { id } = target.dataset

    console.log('Completando tarea...', id)

    const taskSelectedIndex = tasks.findIndex(function(task) {
      return task.id === id
    })

    tasks[taskSelectedIndex] = {
      ...tasks[taskSelectedIndex],
      completed: !tasks[taskSelectedIndex].completed
    }

    console.log({tasks})

    renderTasks(tasks)
  }
})

taskList.addEventListener('dblclick', function(event) {
  const { target } = event

  if (target.tagName === 'DIV') {
    console.log('Doble click...')
  }
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

    renderTasks(tasks)
  }
})

taskClear.addEventListener('click', function(event) {
  // TODO: Al hace click en el botón limpiar debemos remover todas las tareas completadas. Hay que llamar al método render.
  
  const completedTasks = tasks.filter(function(task) {
    // return task.completed === false
    return !task.completed
  })

  tasks = completedTasks

  renderTasks(tasks)
})

renderTasks(tasks)