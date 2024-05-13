import { useNavigate } from "react-router-dom"
import { CheckAnimation } from "../components"
import { motion } from "framer-motion"
import myLoader from '/src/assets/my-loader.svg'
// import testo from 
import { lineSpinner } from "ldrs"
lineSpinner.register();

export function CompletePage() {
  const navigate = useNavigate();

  // setTimeout(() => {
  //   navigate('/main',);
  // }, 3000 )

  return(
    <div className="w-full h-full bg-white flex justify-center items-center flex-col gap-10">
      <CheckAnimation />
      <l-line-spinner
  size="40"
  stroke="3"
  speed="1" 
  color="black" 
></l-line-spinner>
      <motion.h1 
      animate={{x:[-200, 0]}}
      className="text-3xl font-extrabold">완료!</motion.h1>
    </div>
  )
}


