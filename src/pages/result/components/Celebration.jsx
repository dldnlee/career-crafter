import {motion} from 'framer-motion';
import whiteChar from 'src/assets/whiteCharacter.svg';


export function Celebration() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-6">
      <motion.img
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      transition={{duration:1}}
      src={whiteChar} alt="하얀 캐릭터" className="size-[200px]" />
      <motion.h1
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:2}}
      className="w-full text-center text-2xl font-semibold">완료한 것을 축하드립니다!</motion.h1>
    </div>
  )
}