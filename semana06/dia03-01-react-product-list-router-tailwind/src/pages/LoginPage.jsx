import { useState } from "react";
import { BaseInput } from "../components/ui/BaseInput";

export default function LoginPage() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }
  
  return (
    <main className="w-[500px] m-auto  flex flex-col gap-5 justify-center items-center h-dvh">
      <div className="bg-slate-200 p-8 rounded-lg flex flex-col gap-6 ">
        <h2 className="text-3xl text-center font-bold">Login</h2>

        <p className="font-light text-center">Ingresa un nombre de usuario y password</p>

        <form>
          <BaseInput
            label='Username'
            name="username"
            onChange={handleChange}
          />

          <BaseInput
            label='Password'
            name="password"
            onChange={handleChange}
          />

          {/* <label className="flex flex-col gap-2 mb-4">
            <span className="font-normal">Password</span>
            <input
              className="w-full py-4 px-5 rounded-lg bg-slate-400"
              type="password"
              name="password"
              placeholder=""
            />
          </label> */}

          <button
            className="rounded-full px-5 py-4 font-semibold  w-full bg-blue-700 hover:bg-blue-800 text-white cursor-pointer duration-300"
            type="submit"
          >
            Login
          </button>
        </form>

        <pre>form state: {JSON.stringify(form, null, 2)}</pre>
      </div>
    </main>
  )
}
