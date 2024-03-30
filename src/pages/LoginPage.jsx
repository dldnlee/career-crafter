

export function LoginPage() {
  return (
    <div>
      <form action="/main" className="flex flex-col">
        <input type="email" className=""/>
        <input type="password" />
        <button>Login</button>
      </form>

    </div>
  )
}