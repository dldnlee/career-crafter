/* eslint-disable react-hooks/exhaustive-deps */
import mainCharacter from "src/assets/horse3d.svg"
import lion from 'src/assets/lion.svg'
import scorpion from 'src/assets/scorpion.svg'
import goat from 'src/assets/goat.svg'
import { useEffect } from "react"
import { Outlet, Link } from "react-router-dom"
import { Radar } from "react-chartjs-2"
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS} from 'chart.js/auto'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { motion } from "framer-motion"
import { useProgress } from "/src/hooks/useProgress"
import { useAtomValue, useSetAtom, useAtom } from "jotai"
import { swiperIndex } from "src/data/stores"
import { userAnswerData, userData, pb } from "/src/data"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { userProgress } from "../../data"
import { useRadarGraph } from "../../hooks/useRadarGraph"
import {helix} from 'ldrs';

function HeaderTest({user}) {
  
  return (
    <div className="w-full flex flex-col justify-start px-5">
      <h1 className="text-3xl font-bold">Hello, {user?.name}</h1>
      <p>오늘은 어떤 내용을 적을까요?</p>
    </div>
  )
}

const categories = [
  {
    category: '오늘의 질문',
    function: () => {}
  },
  {
    category: 'NPC질문',
    function: () => {}
  },
  {
    category: '스텟 분석',
    function: () => {}
  },
  {
    category: '관심 키워드',
    function: () => {}
  },

]

function Categories() {
  const swiper = useSwiper();
  const activeIndex = useAtomValue(swiperIndex);
  useEffect(() => {
    swiper.slideTo(activeIndex);
    // swiper.snapIndex(activeIndex);
  },);
  
  return (
    <ul className="flex overflow-auto w-full gap-3 py-2 px-4 text-nowrap no-scrollbar">
      {
        categories.map((item, idx) => {
          return (
            <li key={idx}>
              <button 
                className={`w-full h-full p-3 shadow-md ${activeIndex == idx ? 'bg-white text-black' : 'bg-[#303030]'} rounded-lg`} 
                onClick={() => {swiper.slideTo(idx)}}>{item.category}
              </button>
            </li>
          )
        })
      }
    </ul>
  )
}

function MainCard() {
  return (
    <motion.div 
      initial={{y:100}}
      animate={{y:0}}
      className="w-[300px] mx-auto min-w-[300px] h-[450px] ">
      <Link to="/questions/오늘의 질문" className="w-full h-full text-black font-bold text-xl rounded-2xl relative bg-gradient-to-tl from-white to-[#e0f2ff] flex justify-center items-center">
        <div className="flex absolute top-0 left-0 w-full justify-between p-5">
          <h1>오늘의 질문</h1>
        </div>
        <motion.img 
          animate={{y:20, rotate:10}}
          transition={{
            type:'spring',
            stiffness:100,
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            
          }}
          src={mainCharacter} alt='Main Character'
          />
      </Link>

    </motion.div>
  )
}


function NPCCard() {
  return (
    <motion.div 
      initial={{y:100}}
      animate={{y:0}}
      transition={{delay:0.1}}
      className="relative w-[300px] mx-auto min-w-[300px] h-[450px] text-black font-bold text-xl rounded-2xl bg-gradient-to-tl from-white to-[#fee3ff] flex justify-center items-center">
      <div className="flex absolute top-0 left-0 w-full justify-between p-5">
        <h1>NPC 질문</h1>
      </div>
      <div>
        <Link to="/questions/스펙이">
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
            <img src={scorpion} className="size-[90px]" alt="" />
            <p className="absolute top-[-10px] left-6 text-sm w-full">스펙이</p>
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
            <img src={lion} className="size-[90px]" alt="" />
            <p className="absolute top-[-10px] left-5 text-sm w-full">취향이</p>
          </motion.div>
        </Link>
        <motion.div 
          initial={{x:0}}
          animate={{x:[20, 0, -20], y:[20, 0, 20]}}
          transition={{repeat:Infinity, duration:3, repeatType:'reverse'}}
          className="relative">
          <img src={goat} className="size-[75px]" alt="" />
          <p className="absolute top-[-10px] left-5 text-sm w-full">성향이</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

function GraphCard() {
  const {data} = useRadarGraph();
  return (
      <motion.div
        initial={{y:100}}
        animate={{y:0}}
        transition={{delay:0.2}}
      className="w-[300px] mx-auto min-w-[300px] h-[450px] text-black font-bold text-xl rounded-2xl relative bg-gradient-to-tl from-white to-[#ebffcc] flex justify-center items-center">
        <div className="flex absolute top-0 left-0 w-full justify-between p-5">
          <h1>스텟 분석</h1>
        </div>
        <Radar data={data}/>
      </motion.div>
  )
}


function KeywordCard() {
  helix.register();


  return (
    <motion.div
      initial={{y:100}}
      animate={{y:0}}
      transition={{delay:0.3}}
    className="w-[300px] mx-auto min-w-[300px] h-[450px] text-black font-bold text-xl rounded-2xl relative bg-gradient-to-tl from-white to-[#ffe099] flex justify-center items-center">
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

function CardContainer() {
  const setActiveIndex = useSetAtom(swiperIndex);

  return (
    <div className="w-full h-full z-0">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={1.2}
        effect="fade"
        centeredSlides={true}
        freeMode={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
        >
        <div slot="container-start" className="mb-5"><Categories/></div>
          <SwiperSlide>
            <MainCard/>
          </SwiperSlide>
          <SwiperSlide>
            <NPCCard/>
          </SwiperSlide>
          <SwiperSlide>
            <GraphCard/>
          </SwiperSlide>
          <SwiperSlide>
            <KeywordCard/>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}


export function HomePage() {
  const [user, setUser] = useAtom(userData);
  const setUserAnswers = useSetAtom(userAnswerData);
  const progress = useAtomValue(userProgress);
  useProgress();
  console.log(progress);

  useEffect(() => {
    if(localStorage.getItem('pocketbase_auth')) {
      const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth'));
      setUser(currentUser.model);
    }
  }, [])

  useEffect(() => {
    async function getUserAnswers() {
      const record = await pb.collection('answers').getFirstListItem(`user="${user.id}"`);
      setUserAnswers(record);
    }
    getUserAnswers();
  }, [user])

  return (
    <div className="bg-primary-bg text-white relative w-full h-full overflow-auto">
      <div
        className="w-full py-5 flex flex-col items-center relative justify-center gap-4">
        <HeaderTest user={user}/>
        <CardContainer />
      </div>
      <Outlet/>
    </div>
  )
}