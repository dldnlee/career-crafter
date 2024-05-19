import plus from 'src/assets/plus.png'


const dummyData = [
  {
    'name': '발빠른 고양이',
    'category': '서비스 기획자',
    'title': '인공지능으로 지능 높이기',
    'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aperiam eius laborum ut, sed, suscipit quos quo illo soluta nesciunt itaque dolores, rem doloribus porro quidem voluptates at. Nisi, iste!',
    'user': '이은원'
  },
  {
    'name': '발빠른 고양이',
    'category': '서비스 기획자',
    'title': '디자이너의 취업 노하우: 꿀팁 대방출!',
    'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aperiam eius laborum ut, sed, suscipit quos quo illo soluta nesciunt itaque dolores, rem doloribus porro quidem voluptates at. Nisi, iste!',
    'user': '문지원'
  },
  {
    'name': '발빠른 고양이',
    'category': '서비스 기획자',
    'title': '취업 후기 공유: 경험과 꿀팁 전수!',
    'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aperiam eius laborum ut, sed, suscipit quos quo illo soluta nesciunt itaque dolores, rem doloribus porro quidem voluptates at. Nisi, iste!',
    'user': '김하늘'
  },
  {
    'name': '발빠른 고양이',
    'category': '서비스 기획자',
    'title': '성공을 이끄는 팁 공유',
    'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aperiam eius laborum ut, sed, suscipit quos quo illo soluta nesciunt itaque dolores, rem doloribus porro quidem voluptates at. Nisi, iste!',
    'user': '김민지'
  },
  {
    'name': '발빠른 고양이',
    'category': '서비스 기획자',
    'title': '디자이너로서의 취업 후기와 도전 과정 공유',
    'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aperiam eius laborum ut, sed, suscipit quos quo illo soluta nesciunt itaque dolores, rem doloribus porro quidem voluptates at. Nisi, iste!',
    'user': '강해린'
  },
  {
    'name': '발빠른 고양이',
    'category': '서비스 기획자',
    'title': '인공지능으로 지능 높이기',
    'content': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam aperiam eius laborum ut, sed, suscipit quos quo illo soluta nesciunt itaque dolores, rem doloribus porro quidem voluptates at. Nisi, iste!',
    'user': '팜하니'
  },
]

export function Board() {
  return (
    <div className="h-full w-full px-4 relative">
      <div className='w-full flex justify-between items-center pb-4'>
        <h1 className="text-white text-2xl font-bold">자유 게시판</h1>
        <button type='button' className=" bg-point-color gap-2 flex hover:bg-point-color/60 rounded-full py-2 px-4 items-center">
          <p className='text-sm text-white'>게시물 추가</p>
          <img src={plus} alt="플러스" className='invert size-[15px]'/>
        </button>
      </div>
      <ul className="flex w-full h-[450px] flex-col gap-2 overflow-auto no-scrollbar">
        {
          dummyData.map((item, idx) => {
            return (
              <li className="w-full bg-gray-200 p-4 rounded-xl flex flex-col gap-2" key={idx}>
                <h1 className="font-semibold">{item.title}</h1>
                <p className="text-sm line-clamp-2">{item.content}</p>
                <div className="flex items-center gap-2">
                  <div className="size-[30px] bg-primary-bg rounded-full"></div>
                  <p>{item.user}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
      
    </div>
  )}