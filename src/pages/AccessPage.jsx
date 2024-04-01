import { Link } from "react-router-dom"
import { FindInfo } from "../components"

export function AccessPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-[60px]">
      <div className="flex flex-col gap-4 w-fit justify-center items-start">
        <div className="text-[65px] font-extrabold flex flex-col leading-none">
          <p>Career</p>
          <p>Crafter</p>
        </div>
        <p className="font-extrabold text-[18px]">: 나만의 진로 설계 가이드</p>
      </div>
      <div className="flex flex-col w-auto gap-[6px]">
        <Link to="/login" className="w-[260px] py-3 text-center border border-black hover:bg-black hover:text-white">Log In</Link>
        <Link to="/login" className="w-[260px] py-3 text-center border border-black hover:bg-black hover:text-white">Sign Up</Link>
        <div className="flex w-full text-[13px] justify-between items-center px-2">
          <FindInfo />
        </div>
      </div>
    </div>
  )
}