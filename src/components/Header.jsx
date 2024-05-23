import { useAtom, useAtomValue } from 'jotai'
import gear from 'src/assets/settings.png'
import { userProgress, settings, headerState, pb } from 'src/data'
import { useEffect, useState } from 'react';
import { getPercentage } from 'src/util';
import arrowLeft from 'src/assets/arrowLeft.png';
import { Settings } from './Settings';
import { useProgress } from 'src/hooks';
import { Link } from 'react-router-dom';

export default function Header() {
  const progress = useAtomValue(userProgress);
  const [percentage, setPercentage] = useState(0);
  const [settingsActive, setSettingsActive] = useAtom(settings)
  const [header, setHeader] = useAtom(headerState);

  useProgress();
  useEffect(() => {
    const value = getPercentage(progress);
    setPercentage(value)
    setTimeout(() => {
      setHeader(true);
    }, 1500)
  }, [progress]); 

  useEffect(() => {
    async function updatePercentage() {
      const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth'));
      try {
        const record = await pb.collection('users').getOne(`${currentUser.model.id}`);
        let newData = {...record};
        newData.progress = percentage;
        await pb.collection('users').update(`${currentUser.model.id}`, newData);
      } catch {
        console.log('failed to update progress');
      }
    }

    updatePercentage();
  }, [percentage])

  if(!header) {
    return (
      <div className='sticky z-10 top-0 left-0 flex justify-between p-5 pb-0 items-center w-full bg-[#181818] text-white z-100'>
        <div className='w-full pr-5 flex flex-col gap-2'>
          <div className='w-[130px] h-4 mt-1 py-2 bg-gray-200 dark:bg-gray-700 animate-pulse'></div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 animate-pulse">
          </div>
        </div>
        <button onClick={() => {setSettingsActive(true)}}>
          <img src={gear} alt="톱니바퀴" className='invert'/>
        </button>
        <Settings active={settingsActive}/>
      </div>
    )
  }

  return (
    <div className='sticky z-10 top-0 left-0 flex justify-between p-5 pb-0 items-center w-full bg-[#181818] text-white z-100'>
      <div className='w-full pr-5 flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <p>나의 답변 현황: {percentage} %</p>
        {
          percentage === 100 ? 
            <Link to='/result' className='text-[12px]'>
              최종 분석결과 확인하기
            </Link>
            : null
        }</div>
        <div className="w-full bg-gray-700 rounded-full h-1.5 mb-4">
          <div 
          style={{ width: `${percentage}%` }}
          className={`bg-point-color h-1.5 rounded-full `} ></div>
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