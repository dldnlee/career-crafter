import {helix} from 'ldrs';


const dummyData = [
  {
    'name': '발빠른 고양이',
    'category': '서비스 기획자'
  },
  {
    'name': '느릿 강아지',
    'category': '개발자'
  },
  {
    'name': '어글리 햄스터',
    'category': '디자이너'
  },
]

export function Friends() {
  helix.register();

  // const user = useAtomValue(userData);

  // useEffect(() => {
  //   async function getFriends() {
  //     const records = await pb.collection('users').getOne(user.id, {
  //       expand: 
  //     });

  //     console.log(records.friends);

  //     records.friends.map((item) => {
  //       console.log(item.expand);
  //     })
  //   }

  //   getFriends();
  // }, [])

  return (
    <div className="h-full w-full px-4">
      <h1 className="text-white text-2xl font-bold pb-4">친구 목록</h1>
      <ul className="flex w-full h-1/2 flex-col gap-2 justify-center items-center">
        <div className='w-full items-center justify-center flex flex-col gap-6'>
          <l-helix
            size="60"
            speed="2.0"
            color="white"
          ></l-helix>
          <p className='text-white text-lg font-semibold'>서비스 준비중입니다.</p>
        </div>
      </ul>
      
    </div>
  )


  // return (
  //   <div className="h-full w-full pt-16 px-4">
  //     <h1 className="text-white text-2xl font-bold py-5">친구 목록</h1>
  //     <ul className="flex flex-col gap-2">
  //       {
  //         dummyData.map((item, idx) => {
  //           return (
  //             <li key={idx} className="flex text-gray-400 bg-black p-3 rounded-lg items-center gap-3">
  //               <div className="flex gap-2 items-center">
  //                 <div className="size-[40px] bg-white rounded-lg"></div>
  //                 <div>
  //                   <p>{item.name}</p>
  //                   <p>{item.category}</p>
  //                 </div>
  //               </div>
  //             </li>
  //           )
  //         })
  //       }

  //     </ul>
      
  //   </div>
  // )
}