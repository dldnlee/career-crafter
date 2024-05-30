import { useEffect } from "react";
import {useSwiper} from 'swiper/react';
import {useAtomValue} from 'jotai';
import { swiperIndex } from "src/data";


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
    category: '직업 추천',
    function: () => {}
  },
  {
    category: '관심 키워드',
    function: () => {}
  },
]

export function Categories() {
  const swiper = useSwiper();
  const activeIndex = useAtomValue(swiperIndex);
  useEffect(() => {
    swiper.slideTo(activeIndex);
  },);
  
  return (
    <ul className="flex overflow-y-scroll w-full gap-3 py-2 px-4 text-nowrap no-scrollbar">
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