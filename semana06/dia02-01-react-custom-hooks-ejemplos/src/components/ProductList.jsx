
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
      .then(data => setProducts(data.products))
  }, [])

  return (
    <section className="border p-3 mt-4">
      <h1 className="text-xl font-medium text-center">Product List</h1>

      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <h5 className="font-medium">{product.id} - {product.title}</h5>
              <p>{product.description}</p>
              <img src={product.thumbnail} width={100} />
            </li>
          )
        })}
      </ul>

      {/* TODO: Listar los productos del endpoint products (https://dummyjson.com/products) */}

      <hr className="my-4" />

      <pre>{JSON.stringify(products, null, 2)}</pre>
    </section>
  )
}
