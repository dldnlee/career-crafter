import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {motion} from 'framer-motion';
import scorpion from 'src/assets/scorpion.png';
import lion from 'src/assets/lion.png';
import goat from 'src/assets/goat.png';
import close from 'src/assets/close.svg';

const npcMapping = {
  '스펙이' : lion,
  '취향이' : scorpion,
  '관심이' : goat 
}

export function SurveyPage() {
  const {category} = useParams();
  const [answer, setAnswer] = useState(3);

  useEffect(() => {
    console.log('this is the survey page')
  }, [])


  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full backdrop-blur-md bg-gray-700/30 p-10">
      <div className="bg-white w-full px-5 py-10 pt-20 shadow-lg rounded-2xl relative overflow-hidden">
        <div className="absolute bg-white top-0 left-0 w-full flex justify-end p-4">
          <Link to='/main' replace className="w-[30px]">
            <img src={close} alt="닫기" className="w-full"/>
          </Link>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-10">
          <motion.div
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{ ease: "easeOut", duration: 1 }}
            className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">{category}</h1>
            <img src={npcMapping[category]} alt={category} className="w-2/3" />
            <h1 className="text-l p-3 shadow-md rounded-lg text-center">오늘의 기분은 어떤가요?</h1>
          </motion.div>
          <div className="flex flex-col w-full px-10 gap-5">
            <ul className="w-full flex justify-between">
              <li>매우 낮음</li>
              <li>|</li>
              <li>매운 높음</li>
            </ul>
            <label className='sr-only' htmlFor="answer">답변</label>
            <input
              type="range"
              id='answer'
              min='1'
              max='5'
              value={answer}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              onChange={(e) => {setAnswer(e.target.value)}}/>
          </div>
          <div className="flex w-full gap-4">
            <button className="w-full p-4 bg-white shadow-lg border rounded-xl hover:bg-gray-400 hover:text-white">이전</button>
            <button className="w-full p-4 bg-black text-white shadow-md rounded-xl hover:bg-white hover:text-black">다음</button>
          </div>
        </div>
      </div>
    </div>
  )
}