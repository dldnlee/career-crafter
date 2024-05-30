import { useEffect, useState } from "react"
import mainCharacter from "src/assets/mainChar2.svg"
import prefChar from 'src/assets/prefChar.png'
import biasChar from 'src/assets/biasChar.png'
import specChar from 'src/assets/specChar.png'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const variants = [
  {
    text1: '오늘도 한 걸음 더 가까워졌어요!',
    text2: '축하합니다!',
    character: mainCharacter
  },
  {
    text1: '오늘도 한 걸음 더 가까워졌어요!',
    text2: '축하합니다!',
    character: biasChar
  },
  {
    text1: '오늘도 한 걸음 더 가까워졌어요!',
    text2: '축하합니다!',
    character: prefChar
  },
  {
    text1: '오늘도 한 걸음 더 가까워졌어요!',
    text2: '축하합니다!',
    character: specChar
  },
]

export function CompleteDialog({category, active}) {

  const [number, setNumber] = useState(0);

  useEffect(() => {
    switch(category) {
      case '오늘의 질문':
        setNumber(0);
        break;
      case '성향이':
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
      className="w-fit p-8 bg-secondary-bg text-white flex flex-col gap-5 items-center rounded-2xl">
        <p className="text-center text-lg font-semibold">{variants[number].text1}<br></br>{variants[number].text2}</p>
        <img src={variants[number].character} alt="캐릭터" className="size-[100px]"/>
        <Link to='/main' className="w-full text-center py-2 bg-white hover:bg-black/40 hover:text-white text-black rounded-full">완료</Link>
      </motion.div>
    </div>
  )
}