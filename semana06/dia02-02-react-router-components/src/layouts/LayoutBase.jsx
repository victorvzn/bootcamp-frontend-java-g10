import { Link, Outlet } from 'react-router'

export default function LayoutBase() {
  return (
    <>
      <header className='bg-amber-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>React router - LayoutBase</h1>

          <nav className='flex gap-4'>
            <Link to='/'>
              Home
            </Link>
            <Link to='/characters'>
              Character list
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}
