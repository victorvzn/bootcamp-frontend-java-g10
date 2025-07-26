const API_URL = 'https://dummyjson.com'

export const login = async (username, password) => {
  const urlResource = `${API_URL}/auth/login`

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }

  const response = await fetch(urlResource, options)

  console.log({ response })

  return {
    success: response.ok,
    data: await response.json()
  }
}