import { useParams, Link } from 'react-router-dom';
import arrowLeft from 'src/assets/arrowLeft.png';

const dummyQuestions = [
  {
    'question' : '오늘 나는 기분이 아주 좋다'
  },
  {
    'question' : '나는 지금 학과에 만족한다'
  }
]


export function QuestionsPage() {
  const { category } = useParams();

  return (
    <div className="w-full h-full bg-white">
      <div className='sticky top-0 left-0 w-full p-6 flex justify-between'>
        <Link to='/main'>
          <img src={arrowLeft} alt='뒤로가기' />
        </Link>
        <h1 className='text-lg font-semibold'>{category}</h1>
      </div>
      <div className='h-full w-full bg-gray-100 p-5'>
        <h1>오늘 하루도 힘차게 시작해봐요</h1>
        <ul className='flex flex-col gap-2'>
          {
            dummyQuestions.map((item, idx) => {
              return (
                <li key={idx} className={`flex flex-col font-semibold bg-black text-white gap-3 p-6 rounded-2xl`}>
                  <label htmlFor={`answer_${idx+1}`} className='relative flex flex-col gap-10'>
                    <h3>{item.question}</h3>
                    <div className='w-full'>
                      <div className='w-full justify-between flex text-sm'>
                        <p>매우 불만족</p>
                        <p>보통</p>
                        <p>매우 만족</p>
                      </div>
                      <div className='w-full px-5'>
                        <input
                          type="range"
                          id={`answer_${idx+1}`}
                          min='1'
                          max='5'
                          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                      </div>
                    </div>
                  </label>


                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}