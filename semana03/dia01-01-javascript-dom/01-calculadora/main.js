let numeroActual = '0'
let operador = ''
let operando = ''

// Consulta un elemento a la vez
const inputDisplay = document.querySelector('#inputDisplay')
const buttons = document.querySelectorAll('.button')

console.log(buttons)

// EVENTOS
buttons.forEach(function(button) {

  // button.addEventListener(EVENTO, FUNCION)
  button.addEventListener('click', function(event) {
    // console.log({ textContent: event.target.textContent })

    const button = event.target
    const buttonText = button.textContent

    console.log(buttonText)
  })

})


// const inputDisplay = document.getElementById('inputDisplay') // Consulta un elemento por su atributo id
// console.log(buttons)
// console.log(buttons.length)

// console.log(inputDisplay)
// console.log(inputDisplay.value)
// inputDisplay.value = 'hola'
