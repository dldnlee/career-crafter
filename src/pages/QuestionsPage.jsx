import { useParams, Link, useNavigate, Form } from 'react-router-dom';
import arrowLeft from 'src/assets/arrowLeft.png';
import { RangeInput } from '../components';
import { motion } from 'framer-motion';
import { outgoingQuestions, testAnswers, getRange } from '../data/questions';
import { useEffect, useState } from 'react';
import { pb, userData } from '../data';
import { useAtomValue } from 'jotai';

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
  const user = useAtomValue(userData);
  const [rangeStart, setRangeStart] = useState(0);
  const [answerSheet, setAnswerSheet] = useState([]);
  const [userAnswers, setUserAnswers] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    switch (category) {
      case '오늘의 질문':
        setQuestions(outgoingQuestions);
        break;
      case '스펙이':
        setQuestions(outgoingQuestions);
        break;
      case '취향이':
        setQuestions(outgoingQuestions);
    }
  }, [category])


  useEffect(() => {
    async function getAnswerSheet() {
      const record = await pb.collection('answers').getFirstListItem(`user="${user.id}"`);
      setUserAnswers(record);
    }
    getAnswerSheet();
  }, [user])

  useEffect(() => {
    console.log(userAnswers);
    if (userAnswers) {
      setAnswerSheet(JSON.parse(userAnswers.outgoing));
      setRangeStart(getRange(JSON.parse(userAnswers.outgoing)))
    } 
  }, [userAnswers])

  function onChangeFn(e, index) {
    console.log(answerSheet);
    let answers = [...answerSheet];
    answers[index] = parseInt(e.target.value);
    setAnswerSheet(answers);
    console.log(answers);
  }

  async function onSubmitHandler() {
    const newData = { ...userAnswers };
    newData.outgoing = JSON.stringify(answerSheet);
    console.log(newData);
    await pb.collection('answers').update(userAnswers.id, newData);
  }

  return (
    <div className="w-full h-full bg-white">
      <div className='sticky top-0 left-0 w-full p-6 flex justify-between'>
        <Link to='/main'>
          <img src={arrowLeft} alt='뒤로가기' />
        </Link>
        <h1 className='text-lg font-semibold'>{category}</h1>
      </div>
      <Form
        action='/main'
        className='h-full w-full p-5 flex flex-col gap-5'
        onSubmit={onSubmitHandler}>
        <h1 className='text-lg font-extrabold'>오늘 하루도 힘차게 시작해봐요!</h1>
        <motion.ul
          variants={container}
          initial={'hidden'}
          animate={'visible'}
          className='flex flex-col gap-2 w-full h-2/3 overflow-auto'>
          {
            outgoingQuestions.map((item, idx) => {
              if(idx >= rangeStart && idx < (rangeStart + 5) ) {
                return (
                  <motion.li 
                    variants={child}
                    key={idx} 
                    className={`flex flex-col font-semibold bg-black text-white gap-3 p-6 rounded-2xl`}>
                    <RangeInput id={`answer_${idx}`} question={item} onChangeFn={(e) => {onChangeFn(e, idx)}}/>
                  </motion.li>
                )
              }
            })
          }
        </motion.ul>
        <button 
          className='w-full bg-black px-2 py-4 rounded-xl text-white hover:bg-gray-200 hover:text-black'
          >완료
        </button>
      </Form>
    </div>
  )
}