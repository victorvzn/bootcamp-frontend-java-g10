import { useSelector } from 'react-redux'

export default function ShoppingCart() {
  const cart = useSelector(state => state.cart)

  return (
    <div>
      ShoppingCart

      <pre>{JSON.stringify(cart, null, 2)}</pre>  
    </div>
  )
}
