const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas'

  const reponse = await fetch(url) // Por defecto está usando el método GET

  return await reponse.json() // Tranformamos el json a un objeto JS
}

// Ejemplo usando promesas

fetchPeliculas()
  .then(peliculas => {
    // TODO: Creen la función renderPeliculas para mostrar los datos de las peliculas en la tabla.

    console.log(peliculas)
  })


// Ejemplo usando async/await