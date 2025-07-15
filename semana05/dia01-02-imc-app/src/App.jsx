import { useState } from "react"

const App = () => {
  // useState => Este hook nos ayuda a generar un estado para manipular datos dentro de nuestros componentes
  // useState => devuelve un arreglo con una variable de lectura y una función de escritura para cambiar el estado

  // const weight = useState(99) // Devuelve un arreglo
  // const getWeight = weight[0] // Variable de lectura
  // const setWeight = weight[1] // Función

  const [weight, setWeight] = useState(50)
  const [height, setHeight] = useState(50)

  const handleWeight = (event) => setWeight(event.target.value)

  const handleHeight = (event) => setHeight(event.target.value)

  const calculateIMC = weight / (height / 100) ** 2

  const imcTruncated = calculateIMC.toFixed(2)

  // IMC = peso / altura * altura
  // * NOTA: EL IMC es el peso(en kilos) entre la altura(en metros) al cuadrado.

  // **Condiciones del IMC:**
  // * Baja: < 18.5
  // * Normal: < 18.5 - 24.9
  // * Sobrepeso: < 25 - 29.9 
  // * Obeso: > 30

  const imcResult = 0

  return (
    <section>
      <h1>IMC Calculator</h1>

      <div>
        <p>Weight: {weight} kg</p>

        <input
          type="range"
          min="50"
          max="200"
          onChange={handleWeight}
        />
      </div>

      <div>
        <p>Height: {height} cm</p>

        <input
          type="range"
          min="50"
          max="1000"
          onChange={handleHeight}
        />
      </div>

      <p>TU IMC es {imcTruncated}</p>

      <p>Estado de IMC: {imcResult}</p>
    </section>
  )
}

export default App