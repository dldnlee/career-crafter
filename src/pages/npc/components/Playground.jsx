import prefChar from 'src/assets/prefChar.png'
import biasChar from 'src/assets/biasChar.png'
import specChar from 'src/assets/specChar.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Playground() {
  return (
    <div 
      className="relative w-full mx-auto min-w-[300px] h-[400px] text-black font-bold text-xl rounded-2xl bg-gradient-to-tl bg-white flex justify-center items-center">
        <div className='flex flex-col w-full h-full items-center justify-center gap-10'>
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
              <img src={biasChar} className="size-[60px]" alt="" />
              <p className="absolute bottom-[-25px] left-0 text-[10px] font-normal w-full">[초록이/성향]</p>
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
              <img src={prefChar} className="size-[60px]" alt="" />
              <p className="absolute bottom-[-25px] left-0 text-[10px] font-normal w-full">[파랑이/취향]</p>
            </motion.div>
          </Link>
          <Link to="/questions/스펙이">
            <motion.div
              initial={{x:0}}
              animate={{x:[20, 0, -20], y:[20, 0, 20]}}
              transition={{repeat:Infinity, duration:3, repeatType:'reverse'}}
              className="relative">
              <img src={specChar} className="size-[60px]" alt="" />
              <p className="absolute bottom-[-25px] left-0 text-[10px] font-normal w-full">[노랑이/스펙]</p>
            </motion.div>
          </Link>
        </div>
      </div>
  )
}