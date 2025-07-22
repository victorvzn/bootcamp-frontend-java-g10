const MOCKAPI_URL = 'https://687ee83befe65e520087db5d.mockapi.io/api/v1/'

const ENDPOINT_STUDENTS = `${MOCKAPI_URL}/students`

export const fetchStudents = async () => {
  const response = await fetch(ENDPOINT_STUDENTS)

  return await response.json()
}