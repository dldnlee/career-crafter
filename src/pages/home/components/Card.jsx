/* eslint-disable react-hooks/exhaustive-deps */
import mainCharacter from "src/assets/mainChar.png"
import prefChar from 'src/assets/prefChar.png'
import biasChar from 'src/assets/biasChar.png'
import specChar from 'src/assets/specChar.png'
import { Radar } from "react-chartjs-2"
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS} from 'chart.js/auto'
import { motion } from "framer-motion"
import { useRadarGraph } from "src/hooks/useRadarGraph"
import {helix} from 'ldrs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom"



export function MainCard() {
  return (
    <motion.div 
      initial={{y:100}}
      animate={{y:0}}
      className="w-full h-[420px] ">
      <Link to="/questions/오늘의 질문" className="w-full h-full text-black font-semibold text-xl rounded-2xl relative bg-[#d8fdff] bg-maincard-bg bg-contain bg-no-repeat bg-center flex justify-center items-center flex-col">
        <div className="flex absolute top-0 left-0 w-full justify-between p-5">
          <h1>오늘의 질문</h1>
        </div>
          <motion.div
            animate={{y:20, rotate:10}}
            transition={{
              type:'spring',
              stiffness:100,
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}>
            <img 
              src={mainCharacter} alt='Main Character'
              className="w-[180px]"
              />
            <p className="bg-white p-4 font-normal text-sm rounded-xl absolute bottom-[-50px] left-auto right-auto">질문에 답변 해주세요!</p>
        </motion.div>
      </Link>

    </motion.div>
  )
}


export function NPCCard() {
  return (
    <motion.div 
      initial={{y:100}}
      animate={{y:0}}
      transition={{delay:0.1}}
      className="relative w-full h-[420px] text-black font-semibold text-xl rounded-2xl bg-gradient-to-tl bg-white flex justify-center items-center">
      <div className="flex  absolute top-0 left-0 w-full justify-between p-5">
        <h1>NPC 질문</h1>
      </div>
      <Link to='/npc' className="w-full h-full flex flex-col items-center justify-center pt-16 px-4 pb-4">
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 bg-primary-bg rounded-[60px] text-white">
          <motion.div
            animate={{rotate: 10}}
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
          <motion.div
            initial={{x:0}}
            animate={{x:[20, 0, -20], y:[10, 0, 10]}}
            transition={{repeat:Infinity, duration:3, repeatType:'reverse'}}
            className="relative">
            <img src={specChar} className="size-[60px]" alt="" />
            <p className="absolute bottom-[-25px] left-0 text-[10px] font-normal w-full">[노랑이/스펙]</p>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

export function GraphCard() {
  const {data} = useRadarGraph();

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 50
    }
    }
  }

  return (
      <motion.div
        initial={{y:100}}
        animate={{y:0}}
        transition={{delay:0.2}}
      className="w-full h-[420px] text-black font-semibold text-xl rounded-2xl relative bg-gradient-to-tl from-white to-[#ebffcc] flex justify-center items-center">
        <div className="flex absolute top-0 left-0 w-full justify-between p-5">
          <h1>스텟 분석</h1>
        </div>
        <Radar data={data} options={options}/>
      </motion.div>
  )
}


export function KeywordCard() {
  helix.register();

  return (
    <motion.div
      initial={{y:100}}
      animate={{y:0}}
      transition={{delay:0.3}}
    className="w-full h-[420px] text-black font-semibold text-xl rounded-2xl relative bg-gradient-to-tl from-white to-[#ffe099] flex justify-center items-center">
      <div className="flex absolute top-0 left-0 w-full justify-between p-5">
        <h1>관심 키워드</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-20">
        <l-helix
          size="60"
          speed="2.0"
          color="black"
        ></l-helix>
        <h2 className="text-md">서비스 준비중입니다!</h2>
      </div>
    </motion.div>
  )
}