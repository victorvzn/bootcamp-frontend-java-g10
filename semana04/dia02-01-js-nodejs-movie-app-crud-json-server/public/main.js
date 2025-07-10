import { fetchPeliculas } from './services.js'
import { renderPeliculas, newPelicula } from './peliculas.js'

const elPeliculasForm = document.querySelector('#peliculasForm')

elPeliculasForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  newPelicula()
})

// Ejemplo usando promesas
fetchPeliculas()
  .then(peliculas => {
    // TODO: Creen la función renderPeliculas para mostrar los datos de las peliculas en la tabla.

    renderPeliculas(peliculas)
  })


// Ejemplo usando async/await