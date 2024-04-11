import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'




export function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if(localStorage.getItem('pocketbase_auth')){
        navigate('/main')
      } else {
        navigate('/access')
      }
    }, 2000)
  }, [])
  
  return (
    <div className='w-full h-full flex flex-col items-center justify-center bg-white'>
      <h1 className='text-3xl font-extrabold mb-[50px]'>Career Crafter</h1>
      <motion.div 
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          ease: "linear",
          duration: 1.5,
          repeat: Infinity
        }}
        className='bg-black w-[120px] h-[120px]'></motion.div>
    </div>
  )
}