const App = () => {
  // useState => Este hook nos ayuda a generar un estado para manipular datos dentro de nuestros componentes
  // useState => devuelve un arreglo con una variable de lectura y una función de escritura para cambiar el estado

  return (
    <section>
      <h1>IMC Calculator</h1>

      <div>
        <p>Weight: 0 kg</p>

        <input
          type="range"
          min="50"
          max="200"
        />
      </div>

      <div>
        <p>Height: 0 cm</p>

        <input
          type="range"
          min="50"
          max="1000"
        />
      </div>

      <p>TU IMC es 0.00</p>

      <p>Estado de IMC: ???</p>
    </section>
  )
}

export default App