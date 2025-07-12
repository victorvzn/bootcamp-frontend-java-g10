import { createPelicula, fetchPeliculas, deletePelicula } from "./services.js"

export const renderPeliculas = (peliculas = []) => {
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
            <button class="peliculas__remove" data-id="${pelicula.id}">❌</button>
          </div>
        </td>
      </tr>
    `
  })

  elPeliculasList.innerHTML = elementos

  const removeBotones = document.querySelectorAll('.peliculas__remove')

  removeBotones.forEach(boton => {
    boton.addEventListener('click', async (event) => {
      const id = event.target.dataset.id

      console.log('Eliminando pelicula', id)

      // TODO: Terminar de hacer el llamado a la función 'deletePelicula(id)' y refrescar la tabla de peliculas

      const confirmaElimacion = confirm('¿Estas seguro de eliminar esta pelicula?')

      if (confirmaElimacion) {
        const response = await deletePelicula(id)

        console.log(response)

        if(response) {
          const peliculas = await fetchPeliculas()

          renderPeliculas(peliculas)
        }
      }
    })
  })

  // TODO: REcuperar la información de pelicula seleccionada cuando hagamos click en el botón editar y llenar los datos del formulario
}

export const newPelicula = async () => {
  console.log('Creando nueva pelicula...')

  const peliculaForm = document.forms['peliculasForm']

  const nombre = peliculaForm.nombre.value
  const imagen = peliculaForm.imagen.value
  const estreno = peliculaForm.estreno.value
  const genero = peliculaForm.genero.value
  const resumen = peliculaForm.resumen.value

  console.log({ nombre, imagen, estreno, genero, resumen })

  const nuevaPelicula = {
    nombre,
    imagen,
    estreno,
    resumen,
    generoId: genero
  }

  const response = await createPelicula(nuevaPelicula)

  if (response) {
    const peliculas = await fetchPeliculas()

    renderPeliculas(peliculas)
  }

  peliculaForm.reset()
}