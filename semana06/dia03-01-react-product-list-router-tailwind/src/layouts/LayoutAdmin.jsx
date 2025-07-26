import { Outlet, useNavigate } from "react-router"
import { useAuth } from "../hooks/useAuth"

export const LayoutAdmin = () => {
  const { user, logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    // Limpiar la clave auth que está en localstorage
    logout()

    // redirigir al login
    navigate('/')
  }

  return (
    <>
      <header className="py-4 px-6 bg-amber-300">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold">Product List</h1>

          <div className="flex gap-3">
          Otros enlaces
          </div>

          <div className="flex gap-2">
            <span className="font-bold">Bienvenid@ {user ? user?.username : 'Anon' }</span>
            <button className="text-red-500 font-bold cursor-pointer" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>

      <main className="my-6">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  )
}