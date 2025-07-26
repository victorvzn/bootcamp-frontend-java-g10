import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"

const DUMMYJSON_API = 'https://dummyjson.com/auth/products'

const fetchProduct = async(accessToken) => {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }

  const response = await fetch(DUMMYJSON_API, options)

  return await response.json()
}

export const ProductPage = () => {
  const { user } = useAuth()

  // TODO: Renderizar los productos del endpoint https://dummyjson.com/auth/products (que está protegido)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProduct(user.accessToken)
      .then((data) => setProducts(data.products))
  }, [])

  return (
    <main>
      <h2 className="text-xl font-bold">Product list</h2>

      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>{product.title}</li>
          )
        })}
      </ul>

      <pre>{JSON.stringify(products, null, 2)}</pre>
    </main>
  )
}
