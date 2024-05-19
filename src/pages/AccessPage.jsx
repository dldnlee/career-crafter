import { Link } from "react-router-dom"
import { FindInfo } from "../components"
import { motion } from "framer-motion"
import whiteCharacter from 'src/assets/whiteCharacterStart.svg';
import { useInitializeAtoms } from "../hooks/useInitializeAtoms";

export function AccessPage() {

  useInitializeAtoms();

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full h-full bg-primary text-white">
      <div className="flex flex-col w-fit justify-center items-start">
        <motion.p
          initial={{x:-100}}
          animate={{x:0}}
          transition={{type:"spring", duration:.2, bounce:0.25, stiffness:80}}
          className="text-[30px] font-extrabold flex flex-col leading-none">
          CareerCrafter
        </motion.p>
        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:2}}
          className="font-semibold text-[18px]">: 나만의 진로 설계 가이드</motion.p>
      </div>
      <motion.img 
      initial={{scale:0.2}}
      animate={{scale:1}}
      src={whiteCharacter} alt="커리어크래프터 캐릭터" className="size-[220px]" />
      <div className="flex flex-col w-auto gap-3 mt-5">
        <Link to="/login" className="w-[260px] py-3 text-sm text-center text-white bg-point-color hover:bg-point-color/50 rounded-full">
          로그인
        </Link>
        <Link to="/signup" className="w-[260px] py-3 text-sm text-center bg-white text-black hover:bg-point-color/50 hover:text-white rounded-full">
          회원가입
        </Link>
        <div className="flex w-full text-[13px] justify-between items-center px-2">
          <FindInfo />
        </div>
      </div>
    </div>
  )
}