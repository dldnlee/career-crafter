import biasChar from 'src/assets/biasChar.png'
import prefChar from 'src/assets/prefChar.png'
import specChar from 'src/assets/specChar.png'

const dummyData = [
  {
    'name': '김민지',
    'category': 'PM(Product Manager)',
    'img' : biasChar
  },
  {
    'name': '강해린',
    'category': 'UI / UX 디자이너', 
    'img': prefChar
  },
  {
    'name': '이혜인',
    'category': '프론트 개발자',
    'img' : specChar
  },
  {
    'name': '팜하니',
    'category': '백앤드 개발자',
    'img': prefChar
  },
  {
    'name': '다니엘',
    'category': '요리사',
    'img': biasChar

  },
  {
    'name': '햄스터',
    'category': '컨설팅',
    'img': specChar
  },
  {
    'name': '토끼',
    'category': '디자이너',
    'img': biasChar
  },
]


export function Ranking() {
  return (
    <div className="h-full w-full px-4">
      <h1 className="text-white text-2xl font-bold pb-4">이번주 랭킹</h1>
      <ul className="flex flex-col gap-2 overflow-auto w-full h-[400px] no-scrollbar">
        {
          dummyData.map((item, idx) => {
            return (
              <li key={idx} className="flex text-gray-400 bg-black p-3 rounded-lg items-center gap-3">
                <p className="text-xl text-white">{idx+1}등</p>
                <p className="font-extralight">|</p>
                <div className="flex gap-2 items-center">
                  <img src={item.img} alt="캐릭터" className='size-[40px]'/>
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