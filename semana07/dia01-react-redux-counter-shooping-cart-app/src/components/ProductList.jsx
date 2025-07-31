export default function ProductList({ products }) {
  return (
    <>
      <div>
        ProductList
      </div>

      <pre>{JSON.stringify(products, null, 2)}</pre>
    </>
  )
}
