
import { motion } from 'framer-motion';
import whiteChar from '/src/assets/whiteCharacter.svg';
import { useNavigate } from 'react-router-dom';



export function CompleteSignup() {

  const navigate = useNavigate();

  function StartBtn() {
    navigate('/main', {replace:true});
  }


  return (
    <div className="h-full w-full bg-primary-bg flex items-center justify-center">
      <div className='flex flex-col justify-center items-center gap-10 text-white'>
        <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className='text-center text-xl font-semibold'>당신의 진로 가이드가<br></br>생성되었습니다</motion.h1>
        <motion.img
        initial={{y:100, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:2}}
        src={whiteChar} alt="하얀색 캐릭터" className='size-[250px]' />
        <button
        type='button'
        onClickCapture={StartBtn}
        className='w-full py-3 bg-white text-black hover:bg-white/20 rounded-full text-center font-semibold'>시작하기</button>
      </div>
    </div>
    
  )
}