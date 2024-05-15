import { useAtom, useAtomValue } from 'jotai'
import gear from 'src/assets/settings.png'
import { userProgress, settings } from 'src/data'
import { useEffect, useState } from 'react';
import { getPercentage } from 'src/util';
import arrowLeft from 'src/assets/arrowLeft.png';
import { Settings } from './Settings';
import { useProgress } from 'src/hooks';

export default function Header() {
  const progress = useAtomValue(userProgress);
  const [percentage, setPercentage] = useState(0);
  const [settingsActive, setSettingsActive] = useAtom(settings)

  useProgress();

  useEffect(() => {
    const value = getPercentage(progress);
    console.log('This is the progress:',value);
    setPercentage(value)
  }, [progress]); 

  return (
    <div className='sticky z-10 top-0 left-0 flex justify-between p-5 pb-0 items-center w-full bg-[#181818] text-white z-100'>
      <div className='w-full pr-5 flex flex-col gap-2'>
        <p>나의 답변 현황: {percentage} %</p>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div 
          style={{ width: `${percentage}%` }}
          className={`bg-blue-600 h-1.5 rounded-full dark:bg-blue-500`} ></div>
        </div>
      </div>
      <button onClick={() => {setSettingsActive(true)}}>
        <img src={gear} alt="톱니바퀴" className='invert'/>
      </button>
      <Settings active={settingsActive}/>
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