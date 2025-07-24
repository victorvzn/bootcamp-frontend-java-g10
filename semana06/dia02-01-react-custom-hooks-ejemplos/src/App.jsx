import Counter from "./components/Counter";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <>
      <h1 className='text-2xl font-medium text-center underline'>Custom hooks</h1>

      <Counter />

      <ProductList />
    </>
  )
}
