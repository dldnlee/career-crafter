import { Link } from "react-router-dom"
import { FindInfo } from "../components"
import { motion } from "framer-motion"

export function AccessPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-[60px] bg-white">
      <div className="flex flex-col gap-4 w-fit justify-center items-start">
        <motion.div
          initial={{x:-100}}
          animate={{x:0}}
          transition={{type:"spring", duration:.2, bounce:0.25, stiffness:80}}
          className="text-[65px] font-extrabold flex flex-col leading-none">
          <p>Career</p>
          <p>Crafter</p>
        </motion.div>
        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
          className="font-extrabold text-[18px]">: 나만의 진로 설계 가이드</motion.p>
      </div>
      <div className="flex flex-col w-auto gap-[6px]">
        <Link to="/login" className="w-[260px] py-3 text-center border border-black hover:bg-black hover:text-white rounded-md">
          로그인
        </Link>
        <Link to="/signup" className="w-[260px] py-3 text-center border border-black hover:bg-black hover:text-white rounded-md">
          회원가입
        </Link>
        <div className="flex w-full text-[13px] justify-between items-center px-2">
          <FindInfo />
        </div>
      </div>
    </div>
  )
}