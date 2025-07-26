import { useState } from "react";
import { BaseInput } from "../components/ui/BaseInput";
import BaseButton from "../components/ui/BaseButton";
import { login } from "../services/auth";

import { useNavigate } from 'react-router'

export default function LoginPage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    
    const { username, password } = form

    const response = await login(username, password)

    if (!response.message) {
      console.log(response)

      // Redireccionar a la ruta /home
      navigate('/home')
    } else {
      // TODO: Mostrar una alerta cuando el usuario no se autenticó correctamente
      console.log(response.message)
    }
  }
  
  return (
    <main className="w-[500px] m-auto  flex flex-col gap-5 justify-center items-center h-dvh">
      <div className="bg-slate-200 p-8 rounded-lg flex flex-col gap-6 ">
        <h2 className="text-3xl text-center font-bold">Login</h2>

        <p className="font-light text-center">Ingresa un nombre de usuario y password</p>

        <form onSubmit={handleLogin}>
          <BaseInput
            label='Username'
            name="username"
            onChange={handleChange}
          />

          <BaseInput
            label='Password'
            name="password"
            type="password"
            onChange={handleChange}
          />

          <BaseButton
            type="submit"
            label="login"
          />
        </form>

        <pre>form state: {JSON.stringify(form, null, 2)}</pre>
      </div>
    </main>
  )
}
