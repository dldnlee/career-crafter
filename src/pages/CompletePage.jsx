import { useNavigate } from "react-router-dom"
import { CheckAnimation } from "../components"
import { motion } from "framer-motion"
import { lineSpinner } from "ldrs"
lineSpinner.register();

export function CompletePage() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/main',);
  }, 3000 )

  return(
    <div className="w-full h-full bg-white flex justify-center items-center flex-col gap-10">
      <CheckAnimation />
      <motion.h1 
      animate={{x:[-200, 0]}}
      className="text-3xl font-extrabold">완료!</motion.h1>
    </div>
  )
}


