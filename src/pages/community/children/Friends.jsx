import {helix} from 'ldrs';
import { useEffect, useState } from 'react';
import { pb } from 'src/data';
import mainChar from 'src/assets/mainChar.png';
import { ProgressBar } from 'src/components';
import addFriend from 'src/assets/addFriend.png';
import close from 'src/assets/close.svg';


function AddFriendDialog({active, setActive}) {
  const [result, setResults] = useState();
  const [search, setSearch] = useState('');





  async function submitHandler(e) {
    e.preventDefault();
    const record = await pb.collection('users').getFirstListItem(`username="${search}"`)

    setResults(record);
    console.log(search);
    console.log(record);
  }

  async function addFriendHandler(e) {
    e.preventDefault();

    const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth'));

    let newFriends = currentUser.model.friends;
    
    newFriends.push(result.id)
    console.log(newFriends);
    await pb.collection('users').update(currentUser.model.id, { friends: newFriends})
    alert('친구 추가 완료');
  }


  return (
    <div 
      className={`w-full h-full ${active ? 'absolute' : 'hidden'} z-20 top-0 left-0 backdrop-blur-lg flex justify-center items-center p-6`}>
      <div className='bg-primary-bg px-4 pb-6 pt-3 h-[300px] w-full flex flex-col items-center rounded-xl gap-2'>
        <div className='w-full flex justify-end'>
          <button onClick={() => setActive(false)}>
            <img src={close} alt="닫기" className='invert size-[30px]' />
          </button>
        </div>
        <form action="" className='flex w-full gap-4' onSubmit={submitHandler}>
          <label htmlFor="search-friend" className='sr-only'>친구 찾기</label>
          <input 
          onChange={(e) => {setSearch(e.target.value);}}
          type="text" 
          id="search-friend" 
          placeholder='이메일 입력' 
          className='w-full p-2 rounded-lg'/>
          <button className='bg-white p-2 rounded-xl w-[100px]'>검색</button>
        </form>
        <hr  className='border w-full border-white/30'/>
        
        <div className='text-white w-full'>
          <div className='w-full flex justify-between items-center bg-black p-3 rounded-xl'>
            <h1 className='text-xl font-semibold'>{result?.name}</h1>
            <button onClick={addFriendHandler}>
              <img src={addFriend} alt="친구 추가" className='size-[30px] invert' />
            </button>
          </div>
          
        </div>
        


      </div>
    </div>
  )
}


export function Friends() {
  helix.register();
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [dialogActive, setDialogActive] = useState(false);

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


  function buttonHandler() {
    setDialogActive(true);
  }




  return (
    <div className="h-full w-full px-4">
      <div className='w-full flex justify-between items-center pb-4'>
        <h1 className="text-white text-2xl font-bold ">친구 목록</h1>
        <button type='button' onClick={buttonHandler}>
          <img src={addFriend} alt="친구추가" className='size-[30px] invert'/>
        </button>
      </div>
      <ul className="flex w-full h-1/2 flex-col gap-2 items-center">
        {!loading ? 
          friends?.map((item, idx)=> (
            <li key={idx} className='w-full bg-black text-white p-3 rounded-xl flex gap-2 items-center'>
              <img src={mainChar} alt=""  className='size-[50px]'/>
              <div className='w-full flex flex-col gap-2'>
                <h1 className='flex justify-between'>{item?.name}<span>{item.progress}%</span></h1>
                <ProgressBar percentage={item.progress}/>
              </div>
            </li>
          ))
          :
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
      <AddFriendDialog active={dialogActive} setActive={setDialogActive}/>
    </div>
  )
}