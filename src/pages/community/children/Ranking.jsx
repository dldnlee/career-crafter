

const dummyData = [
  {
    'name': '김민지',
    'category': 'PM(Product Manager)'
  },
  {
    'name': '강해린',
    'category': 'UI / UX 디자이너'
  },
  {
    'name': '이혜인',
    'category': '프론트 개발자'
  },
  {
    'name': '팜하니',
    'category': '백앤드 개발자'
  },
  {
    'name': '다니엘',
    'category': '요리사'
  },
  {
    'name': '햄스터',
    'category': '컨설팅'
  },
  {
    'name': '토끼',
    'category': '디자이너'
  },
]


export function Ranking() {
  return (
    <div className="h-full w-full pt-16 px-4">
      <h1 className="text-white text-2xl font-bold py-5">이번주 랭킹</h1>
      <ul className="flex flex-col gap-2 overflow-auto w-full h-[400px] no-scrollbar">
        {
          dummyData.map((item, idx) => {
            return (
              <li key={idx} className="flex text-gray-400 bg-black p-3 rounded-lg items-center gap-3">
                <p className="text-xl text-white">{idx+1}등</p>
                <p className="font-extralight">|</p>
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