import { useAtomValue } from 'jotai'
import settings from 'src/assets/settings.png'
import { userProgress } from '../data'
import { useEffect, useState } from 'react';
import { getPercentage } from '../util';
import {motion} from 'framer-motion';
import arrowLeft from '/src/assets/arrowLeft.png';

export default function Header({clickHandler2}) {
  const progress = useAtomValue(userProgress);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const value = getPercentage(progress);
    setPercentage(value)
  }, [progress]); 

  return (
    <div className='sticky top-0 left-0 flex justify-between p-5 pb-0 items-center w-full bg-[#181818] text-white z-100'>
      {/* <p className='font-bold'>CareerCrafter</p> */}
      <div className='w-full pr-5 flex flex-col gap-2'>
        <p>나의 답변 현황: {percentage} %</p>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div 
          style={{ width: `${percentage}%` }}
          className={`bg-blue-600 h-1.5 rounded-full dark:bg-blue-500`} ></div>
        </div>
      </div>
      <button onClick={clickHandler2}>
        <img src={settings} alt="톱니바퀴" className='invert'/>
      </button>
    </div>
  )
}

export function HeaderWithBack() {
  return (
    <div className='absolute top-0 left-0 w-full p-4 flex justify-between'>
      <button>
        <img src={arrowLeft} alt='뒤로가기' className='invert' />
      </button>
    </div>
  )
}