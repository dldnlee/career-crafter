import prefChar from 'src/assets/prefChar.svg'
import biasChar from 'src/assets/biasChar.svg'
import specChar from 'src/assets/specChar.svg'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Playground() {
  return (
    <div 
      className="relative w-full mx-auto min-w-[300px] h-[400px] text-black font-bold text-xl rounded-2xl bg-gradient-to-tl from-white to-[#fee3ff] flex justify-center items-center">
        <div>
          <Link to="/questions/성향이">
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
              <img src={biasChar} className="size-[90px]" alt="" />
              <p className="absolute top-[-10px] left-6 text-sm w-full">성향이</p>
            </motion.div>
          </Link>
          <Link to="/questions/취향이">
            <motion.div 
              animate={{x: [80, -80], y:-10}}
              transition={{
                y: {duration: 0.3, repeat: Infinity, repeatType:'mirror'},
                x: {
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'reverse',}
              }}
              className="relative"
              >
              <img src={prefChar} className="size-[90px]" alt="" />
              <p className="absolute top-[-10px] left-5 text-sm w-full">취향이</p>
            </motion.div>
          </Link>
          <Link to="/questions/스펙이">
            <motion.div
              initial={{x:0}}
              animate={{x:[20, 0, -20], y:[20, 0, 20]}}
              transition={{repeat:Infinity, duration:3, repeatType:'reverse'}}
              className="relative">
              <img src={specChar} className="size-[75px]" alt="" />
              <p className="absolute top-[-10px] left-5 text-sm w-full">스펙이</p>
            </motion.div>
          </Link>
        </div>
      </div>
  )
}