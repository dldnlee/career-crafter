import { useState } from "react";
import { useAtom } from "jotai";
import { initStats } from "../../../data";
import { useSwiper } from "swiper/react";
import unchecked from '/src/assets/unchecked.png';
import checked from '/src/assets/checked.png';



export function Questions({question, option1, option2, index}) {
  const [highlight, setHighlight] = useState(0);
  const [stats, setStats] = useAtom(initStats);
  const swiper = useSwiper();

  function optionOneHandler() {
    setHighlight(1);
    stats[index] = 2;
    swiper.slideNext();
    setStats(stats);
    console.log(stats);
  }
  function optionTwoHandler() {
    setHighlight(2)
    stats[index] = 5
    swiper.slideNext();
    setStats(stats);
    console.log(stats);
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-2xl text-center font-semibold py-14 h-[190px]'>{question}</h1>
      <div className='w-full flex flex-col gap-4'>
        <button 
          type='button' 
          onClick={optionOneHandler}
          className={`px-5 py-5 rounded-lg flex  items-center gap-5 h-[80px] ${highlight === 1 ? 'bg-point-color' : 'bg-gray-200'}`}>
          <img src={highlight === 1 ? checked : unchecked} alt="" className={`size-7 ${highlight === 1 ? 'invert' : ''}`} />
          <p className={`font-semibold text-start ${highlight === 1 ? 'text-white' : 'text-black'}`}>{option1}</p>
        </button>
        <button 
          type='button' 
          onClick={optionTwoHandler}
          className={`px-5 py-5 rounded-lg flex items-center text-start h-[80px] gap-5 ${highlight === 2 ? 'bg-point-color' : 'bg-gray-200'}`}>
          <img src={highlight === 2 ? checked : unchecked} alt="" className={`size-7 ${highlight === 2 ? 'invert' : ''}`} />
          <p className={`font-semibold ${highlight === 2 ? 'text-white' : 'text-black'}`}>{option2}</p>
        </button>
      </div>
    </div>
  )
}