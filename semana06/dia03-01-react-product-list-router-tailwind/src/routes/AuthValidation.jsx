import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"
import { Outlet, useNavigate } from "react-router"

export const AuthValidation = () => {
  const { isAuth } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      // Redireccionamos al login
      navigate('/')
    }
  }, [isAuth])

  return <Outlet />
}