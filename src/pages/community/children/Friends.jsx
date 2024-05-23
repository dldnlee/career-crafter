import {helix} from 'ldrs';
import { useEffect, useState } from 'react';
import { pb } from 'src/data';
import mainChar from 'src/assets/mainChar.svg';
import { ProgressBar } from 'src/components';


export function Friends() {
  helix.register();
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    async function getFriends() {
      const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth'));
      try {
        setLoading(true);
        const record = await pb.collection('users').getOne(`${currentUser.model.id}`,{
          expand: 'friends'
        })
        setFriends(record.expand.friends)
        setLoading(false);
      } catch {
        console.log('failed to retrieve data')
      }
    }
    getFriends();
  }, [])

  if(loading) return (
    <div className="h-full w-full px-4 overflow-auto no-scrollbar">
      <h1 className="text-white text-2xl font-bold pb-4">친구 목록</h1>
      <ul className="flex w-full h-1/2 flex-col gap-2 items-center">
        {
          Array(10).fill(0).map((_, idx) => (
            <li key={idx} className='w-full bg-black text-white p-3 rounded-xl flex gap-2 items-center'>
              <div className='size-[50px] flex-shrink-0 rounded-full bg-gray-400 animate-pulse'></div>
              <div className='w-full flex flex-col gap-2'>
                <div className='w-[100px] h-[15px] bg-gray-400 animate-pulse'></div>
                <div className='h-[10px] bg-gray-400 animate-pulse'></div>
              </div>
            </li>
          ))
        }
      </ul>
      
    </div>
  )


  return (
    <div className="h-full w-full px-4">
      <h1 className="text-white text-2xl font-bold pb-4">친구 목록</h1>
      <ul className="flex w-full h-1/2 flex-col gap-2 items-center">
        {
          friends?.map((item, idx)=> (
            <li key={idx} className='w-full bg-black text-white p-3 rounded-xl flex gap-2 items-center'>
              <img src={mainChar} alt=""  className='size-[50px]'/>
              <div className='w-full flex flex-col gap-2'>
                <h1 className='flex justify-between'>{item?.name}<span>{item.progress}%</span></h1>
                <ProgressBar percentage={item.progress}/>
              </div>
            </li>
          ))
        }
      </ul>
      
    </div>
  )
}