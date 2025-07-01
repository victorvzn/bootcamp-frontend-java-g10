const taskInput = document.getElementById('taskInput')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

// EVENTOS

// ELEMENTO.addEventListener(NOMBRE_EVENTO, CALLBACK)

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón 'Añadir tarea'
  console.log('Click!!!', taskInput.value)

  // DOM: Forma de crear elementos dinámicamente con el DOM de Javascript
})