import { useParams, Link, useNavigate } from 'react-router-dom';
import arrowLeft from 'src/assets/arrowLeft.png';
import { RangeInput } from '../components';
import { motion } from 'framer-motion';

const dummyQuestions = [
  {
    'question' : '오늘 나는 기분이 아주 좋다'
  },
  {
    'question' : '나는 지금 학과에 만족한다'
  },
  {
    'question' : '나는 지금 학과에 만족한다'
  },
  {
    'question' : '나는 지금 학과에 만족한다'
  },
  {
    'question' : '나는 지금 학과에 만족한다'
  }
]

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function QuestionsPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  function onChangeFn(e) {
    console.log(e.target.value);
  }

  return (
    <div className="w-full h-full bg-white">
      <div className='sticky top-0 left-0 w-full p-6 flex justify-between'>
        <Link to='/main'>
          <img src={arrowLeft} alt='뒤로가기' />
        </Link>
        <h1 className='text-lg font-semibold'>{category}</h1>
      </div>
      <div className='h-full w-full p-5 flex flex-col gap-5'>
        <h1 className='text-lg font-extrabold'>오늘 하루도 힘차게 시작해봐요!</h1>
        <motion.ul
          variants={container}
          initial={'hidden'}
          animate={'visible'}
          className='flex flex-col gap-2 w-full h-2/3 overflow-auto'>
          {
            dummyQuestions.map((item, idx) => {
              return (
                <motion.li 
                  variants={child}
                  key={idx} 
                  className={`flex flex-col font-semibold bg-black text-white gap-3 p-6 rounded-2xl`}>
                  <RangeInput id={`answer_${idx}`} question={item.question} onChangeFn={onChangeFn}/>
                </motion.li>
              )
            })
          }
        </motion.ul>
        <button 
          className='w-full bg-black px-2 py-4 rounded-xl text-white hover:bg-gray-200 hover:text-black'
          onClick={(e) => {
            e.preventDefault();
            navigate('/main');
          }}>완료
        </button>
      </div>
    </div>
  )
}