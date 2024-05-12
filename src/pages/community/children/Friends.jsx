import { useEffect } from "react"
import { pb, userData } from "../../../data"
import {useAtomValue} from 'jotai';


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
    <div className="h-full w-full pt-16 px-4">
      <h1 className="text-white text-2xl font-bold py-5">친구 목록</h1>
      <ul className="flex flex-col gap-2">
        {
          dummyData.map((item, idx) => {
            return (
              <li key={idx} className="flex text-gray-400 bg-black p-3 rounded-lg items-center gap-3">
                <div className="flex gap-2 items-center">
                  <div className="size-[40px] bg-white rounded-lg"></div>
                  <div>
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}