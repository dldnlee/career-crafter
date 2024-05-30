import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import whiteCharacter from '/src/assets/whiteCharacter.svg';



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
    <div className='w-full h-full flex flex-col items-center justify-center bg-primary-bg'>
      <h1 className='text-3xl font-extrabold mb-[50px] text-white'>Career Crafter</h1>
      
      <motion.img 
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
        }}
        transition={{
          ease: "linear",
          duration: 0.5,
          repeat: Infinity
        }}
        src={whiteCharacter}
        className='w-[200px] h-[200px]'></motion.img>
    </div>
  )
}