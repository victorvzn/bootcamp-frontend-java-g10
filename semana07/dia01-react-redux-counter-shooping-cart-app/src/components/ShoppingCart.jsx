import { useSelector } from 'react-redux'

export default function ShoppingCart() {
  const cart = useSelector(state => state.cart)

  return (
    <section className='w-56'>
      <h3>Shopping cart</h3>

      <div>
        <button>
          Clean cart
        </button>
      </div>

      <ul>
        <li>
          <span>title</span>
          <span>S/ 0.00 (qty: 0)</span>
          <button
            className=''
          >
            ❌
          </button>
        </li>
      </ul>

      <div>
        <strong>TOTAL:</strong> <span>S/ 0.00</span>
      </div>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </section>
  )
}
