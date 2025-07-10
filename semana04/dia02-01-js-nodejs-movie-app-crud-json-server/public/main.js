const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas'

  const reponse = await fetch(url) // Por defecto está usando el método GET

  return await reponse.json() // Tranformamos el json a un objeto JS
}

const renderPeliculas = (peliculas = []) => {
  const elPeliculasList = document.querySelector('.peliculas__list')

  let elementos = ''

  peliculas.forEach(pelicula => {
    elementos += `
      <tr>
        <td>${pelicula.id}</td>
        <td>
          <img
            src="${pelicula.imagen}"
            width="100"
            height="150"
            onerror="this.src='https://placehold.co/100x150'"
          />
        </td>
        <td>
          <strong>${pelicula.nombre}</strong>
          <div class="text-small">
            <strong>Estreno:</strong> ${pelicula.estreno}
          </div>
          <div class="text-small">
            <strong>Resumen:</strong> ${pelicula.resumen}
          </div>
        </td>
        <td>
          <div class="flex gap-0.5">
            <button class="peliculas__edit">✏</button>
            <button class="peliculas__remove">❌</button>
          </div>
        </td>
      </tr>
    `
  })

  elPeliculasList.innerHTML = elementos
}

// Ejemplo usando promesas

fetchPeliculas()
  .then(peliculas => {
    // TODO: Creen la función renderPeliculas para mostrar los datos de las peliculas en la tabla.

    renderPeliculas(peliculas)
  })


// Ejemplo usando async/await