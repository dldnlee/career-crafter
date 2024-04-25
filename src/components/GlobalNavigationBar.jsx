import { Link } from "react-router-dom"

export function GlobalNavigationBar() {
  return (
    <div className="fixed text-white bottom-10 w-full flex justify-center mx-auto inset-x-0">
      <div className="bg-black rounded-full px-5 py-2 flex justify-between items-center">
        <Link to="/main" >홈</Link>
        <p className="px-4 text-gray-400">|</p>
        <Link to="/community" >Community</Link>
      </div>
    </div>
  )
}