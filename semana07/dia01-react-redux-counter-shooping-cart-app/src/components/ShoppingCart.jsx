import { useSelector } from 'react-redux'

export default function ShoppingCart() {
  const cart = useSelector(state => state.cart)

  return (
    <section className='w-56'>
      <h3 className='text-2xl mb-2'>Shopping cart</h3>

      <div className='mb-2'>
        <button
          className='bg-violet-400 p-2 rounded-lg cursor-pointer text-white font-medium w-full'
        >
          Clean cart
        </button>
      </div>

      <ul className='flex flex-col gap-2 mt-4'>
        <li className='flex flex-col gap-2 font-bold bg-slate-100 p-2 shadow'>
          <span>title</span>
          <span>S/ 0.00 (qty: 0)</span>
          <button
            className='bg-red-400 p-1 rounded-lg cursor-pointer'
          >
            ❌
          </button>
        </li>
      </ul>

      <div className='mt-4 pt-4 font-bold bg-amber-100 px-4 py-2 flex justify-between'>
        <strong>TOTAL:</strong> <span>S/ 0.00</span>
      </div>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </section>
  )
}
