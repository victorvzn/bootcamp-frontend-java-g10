import { useEffect, useState } from "react"
import { fetchProducts } from "../services/products"

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('Se ejecuta al crearse el componente')
    setLoading(true)

    fetchProducts()
      .then(data => setProducts(data.products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return {
    products,
    loading
  }
}