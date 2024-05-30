import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import biasChar from '/src/assets/biasChar.png';



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
    <div className='w-full h-full flex flex-col gap-10 items-center justify-center bg-primary-bg'>
      <motion.div 
              animate={{y: [-50, 0], rotate: 10}}
              transition={{
                rotate: {
                  duration: 0.7,
                  repeatDelay: 0,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'linear'
                },
                y: {
                  type: 'spring', 
                  stiffness: 100, 
                  duration: 0.1,
                  repeatDelay: 0,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }
              }}
              className="relative"
              >
              <img src={biasChar} className="size-[80px]" alt="" />
            </motion.div>
            <h1 className='text-3xl font-extrabold mb-[50px] text-white'>Career Crafter</h1>
    </div>
  )
}