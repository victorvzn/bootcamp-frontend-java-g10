const MOCKAPI_URL = 'https://687ee83befe65e520087db5d.mockapi.io/api/v1/'

const ENDPOINT_STUDENTS = `${MOCKAPI_URL}/students`

export const fetchStudents = async () => {
  const response = await fetch(ENDPOINT_STUDENTS)

  return await response.json()
}

export const createStudent = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  const response = await fetch(ENDPOINT_STUDENTS, options)

  return await response.json()
}

export const removeStudent = async (id) => {
  const options = {
    method: 'DELETE'
  }

  const response = await fetch(`${ENDPOINT_STUDENTS}/${id}`, options)

  return await response.json()
}

export const updateStudent = async (data) => {
  const id = data.id

  const student = {
    name: data.name,
    city: data.city
  }

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(student)
  }

  const response = await fetch(`${ENDPOINT_STUDENTS}/${id}`, options)

  return await response.json()
}