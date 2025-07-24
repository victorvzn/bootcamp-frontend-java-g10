
// useEffect: permite ejecutar código cuando algo pasa en tu componente
// ejemplo: cuando el componente se crea(monta), actualiza, elimina(desmontarlo)
// En donde lo podemos usar: peticiones a APIs, leemos de localstorage, limpiar recursos, reaccionar a cambios en un estado

import { useEffect, useState } from "react"

export default function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log('Se ejecuta al crearse el componente')
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <section>
      <h1>Product List</h1>

      {/* TODO: Listar los productos del endpoint products (https://dummyjson.com/products) */}

      <pre>{JSON.stringify(products, null, 2)}</pre>
    </section>
  )
}
