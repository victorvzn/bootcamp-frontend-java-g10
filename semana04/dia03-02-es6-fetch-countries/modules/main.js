const url = 'https://restcountries.com/v3.1/independent?status=true&fields=name,flags,region,capital,population,languages,currencies,timezones'

const fetchCountries = async () => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('ERROR:', response.status)
    }

    return await response.json()
  } catch(error) {
    console.log(error)
  }
}

const renderCountries = (countries = []) => {
  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  countries.forEach(country => {
    countryList += `
      <div class="country">
        <img class="country__flag" src="${country.flags.png}" alt="${country.flags.alt}" />
        <div class="country__wrapper">
          <h2 class="country__title">${country.name.common}</h2>
          <div class="country__description">
            <strong>Population:</strong> ${country.population}
          </div>
          <div class="country__description">
            <strong>Region:</strong> ${country.region}
          </div>
          <div class="country__description">
            <strong>Capital:</strong> ${country.capital.join(', ')}
          </div>
        </div>
      </div>
    `
  })

  countryListElement.innerHTML = countryList
}

// TODO: Necesitamos hacer busquedas por capital, nombre de pais. Y además necesitamos filtrar los paises por su region usando el select 'Filter by Region'.

const searchInput = document.querySelector('.app__input')
const filterSelect = document.querySelector('.app__filter')

searchInput.addEventListener('input', (event) => {
  // Acceder a lo que se escribe en la caja

  // Filtramos los datos de los paises

  // Renderizamos
})


fetchCountries()
  .then(data => {
    renderCountries(data)
  })