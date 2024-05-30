import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useInitializeAtoms } from "../hooks/useInitializeAtoms";
import { swiperIndex } from "../data";
import {useSetAtom} from 'jotai'
import { useEffect } from "react";
import accessPage from 'src/assets/accessPage.svg';

export function AccessPage() {
  const setActiveIndex = useSetAtom(swiperIndex);

  useEffect(() => {
    setActiveIndex(0);
  })
  useInitializeAtoms();

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full bg-primary-bg h-full bg-primary text-white">
      <div className="flex flex-col w-fit justify-center items-center">
        <motion.p
          initial={{x:-100}}
          animate={{x:0}}
          transition={{type:"spring", duration:.2, bounce:0.25, stiffness:80}}
          className="text-[35px] font-extrabold flex flex-col leading-none">
          CareerCrafter
        </motion.p>
        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:2}}
          className="font-semibold text-[20px]">: 나만의 진로 설계 가이드</motion.p>
        <motion.img 
        initial={{scale:0.2}}
        animate={{scale:1}}
        src={accessPage} alt="커리어크래프터 캐릭터" className="size-[270px]" />
      </div>
      <div className="flex flex-col w-auto gap-3 mt-5">
        <Link to="/login" className="w-[260px] py-3 text-sm text-center text-black bg-white hover:bg-white/60 rounded-full">
          로그인
        </Link>
        <Link to="/signup" className="w-[260px] py-3 text-sm text-center bg-black text-white border border-white hover:bg-white/20 hover:text-white rounded-full">
          회원가입
        </Link>
        {/* <div className="flex w-full text-[13px] justify-between items-center px-2">
          <FindInfo />
        </div> */}
      </div>
    </div>
  )
}