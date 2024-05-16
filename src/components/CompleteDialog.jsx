import { useEffect, useState } from "react"
import mainChar from '/src/assets/horse3d.svg';
import scorpion from '/src/assets/scorpion.svg';
import goat from '/src/assets/goat.svg';
import lion from '/src/assets/goat.svg';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const variants = [
  {
    text1: '오늘도 한 걸음 더 가까워졌어요!',
    text2: '축하합니다!',
    character: mainChar
  },
  {
    text1: '오늘도 한 걸음 더 가까워졌어요!',
    text2: '축하합니다!',
    character: scorpion
  },
  {
    text1: '오늘도 한 걸음 더 가까워졌어요!',
    text2: '축하합니다!',
    character: goat
  },
  {
    text1: '오늘도 한 걸음 더 가까워졌어요!',
    text2: '축하합니다!',
    character: lion
  },
]

export function CompleteDialog({category, active}) {

  const [number, setNumber] = useState(0);

  useEffect(() => {
    switch(category) {
      case '오늘의 질문':
        setNumber(0);
        break;
      case '서향이':
        setNumber(1);
        break;
      case '취향이':
        setNumber(2);
        break;
      case '스펙이':
        setNumber(3);
    }
  }, [category])

  return (
    <div className={`${active ? 'absolute' : 'hidden'} w-full h-full top-0 left-0 backdrop-blur-sm bg-black/30 flex flex-col justify-center items-center`}>
      <motion.div
      initial={{scale:0.2}}
      animate={{scale:1}}
      className="w-fit p-8 bg-white text-black flex flex-col gap-5 items-center rounded-2xl">
        <p className="text-center text-lg font-semibold">{variants[number].text1}<br></br>{variants[number].text2}</p>
        <img src={variants[number].character} alt="캐릭터" className="size-[200px]"/>
        <Link to='/main' replace={true} className="w-full text-center py-2 bg-point-color hover:bg-point-color/80 text-white rounded-full">완료</Link>
      </motion.div>
    </div>
  )
}