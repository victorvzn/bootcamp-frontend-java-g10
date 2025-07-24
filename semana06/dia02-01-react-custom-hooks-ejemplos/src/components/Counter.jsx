import { useCounter } from "../hooks/useCounter"

export default function Counter() {
  const { decrement, count, increment } = useCounter(10)

  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', gap: '8px', border: '1px solid gray', padding: '8px' }}
    >
      <h1 className="text-xl font-medium text-center">Counter</h1>

      <div className="flex gap-4 items-center justify-center">
        <button
          className="py-2 px-6 bg-blue-500"
          onClick={decrement}
        >-</button>
        <strong className="text-xl ">{count}</strong>
        <button
          className="py-2 px-6 bg-blue-500"
          onClick={increment}
        >+</button>
      </div>
    </section>
  )
}

// ANTES DE USAR CUSTOM HOOKS

// export default function Counter() {
//   const [counter, setCounter] = useState(10)

//   return (
//     <section
//       style={{ display: 'flex', flexDirection: 'column', gap: '8px', border: '1px solid gray', padding: '8px' }}
//     >
//       <h1 className="text-xl font-medium text-center">Counter</h1>

//       <div className="flex gap-4 items-center justify-center">
//         <button
//           className="py-2 px-6 bg-blue-500"
//           onClick={() => setCounter(counter - 1)}
//         >-</button>
//         <strong className="text-xl ">{counter}</strong>
//         <button
//           className="py-2 px-6 bg-blue-500"
//           onClick={() => setCounter(counter + 1)}
//         >+</button>
//       </div>
//     </section>
//   )
// }
