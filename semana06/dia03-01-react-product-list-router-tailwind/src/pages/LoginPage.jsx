export default function LoginPage() {
  return (
    <main>
      <div>
        <h2>Product List App</h2>

        <p>Ingresa un nombre de usuario y password</p>

        <form>
          <label>
            Username
            <input
              type="text"
              name="username"
              placeholder="jhondoe"
            />
          </label>

          <label>
            Password
            <input
              type="text"
              name="password"
              placeholder="**************"
            />
          </label>

          <button
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  )
}
