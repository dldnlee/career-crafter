import { useParams, Link, useNavigate, Form } from 'react-router-dom';
import arrowLeft from 'src/assets/arrowLeft.png';
import { RangeInput } from '../components';
import { motion } from 'framer-motion';
import { outgoingQuestions } from '/src/data/questions';
import { useEffect, useState } from 'react';
import { pb, userAnswerData, userData } from '../data';
import { useAtom, useAtomValue } from 'jotai';
import { 
  checkEmpty, 
  getRange, 
  getRandomQuestions, 
  setDefaultValues 
  } from '/src/util/';
import { checkPref, checkSpec, getPrefQuestions, getSpecQuestions } from '../util';


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
  const [userAnswers, setUserAnswers] = useAtom(userAnswerData);
  const [questions, setQuestions] = useState([]);
  const [questionType, setQuestionType] = useState(0);

  // Set answersheet data for user
  useEffect(() => {
    async function getAnswerSheet() {
      const record = await pb.collection('answers').getFirstListItem(`user="${user.id}"`);
      setUserAnswers(record);
    }
    getAnswerSheet();
  }, [])

  // Set category of questions based on params category
  useEffect(() => {
    if (!getRandomQuestions(userAnswers)) return;
    switch (category) {
      case '오늘의 질문':
        setQuestions(getRandomQuestions(userAnswers)[0]);
        setQuestionType(getRandomQuestions(userAnswers)[1]);
        console.log(getRandomQuestions(userAnswers)[1])
        break;
      case '스펙이':
        setQuestions(getSpecQuestions(userAnswers[0]));
        setQuestionType(getSpecQuestions(userAnswers)[1]);
        break;
      case '취향이':
        setQuestions(getPrefQuestions(userAnswers[0]));
        setQuestionType(getSpecQuestions(userAnswers[1]));
    }
  }, [])


  
  // Set current answer sheet
  useEffect(() => {
    // console.log(userAnswers);
    if (!userAnswers) return;
    let range = 0;
    let answers = [];
    switch (category) {
      case '오늘의 질문':
        if (!checkEmpty(userAnswers)) {alert('모든 질문에 답변하셨습니다')}
        range = getRange(checkEmpty(userAnswers));
        setRangeStart(range);
        answers = setDefaultValues(checkEmpty(userAnswers), range)
        setAnswerSheet(answers);
        break;
      case '스펙이':
        if (!checkSpec(userAnswers)) {alert('모든 질문에 답변하셨습니다')}
        range = getRange(checkSpec(userAnswers));
        setRangeStart(range);
        answers = setDefaultValues(checkSpec(userAnswers), range)
        setAnswerSheet(answers);
        break;
      case '취향이':
        if (!checkPref(userAnswers)) {alert('모든 질문에 답변하셨습니다')}
        range = getRange(checkPref(userAnswers));
        setRangeStart(range);
        answers = setDefaultValues(checkPref(userAnswers), range)
        setAnswerSheet(answers);
        break;
    }
    
  }, [])

  //Event Handlers
  function onChangeFn(e, index) {
    console.log(answerSheet);
    let answers = [...answerSheet];
    answers[index] = parseInt(e.target.value);
    setAnswerSheet(answers);
    // console.log(answers);
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    const newData = { ...userAnswers };
    switch (questionType) {
      case 1:
        newData.outgoing = JSON.stringify(answerSheet);
        break;
      case 2:
        newData.challenging = JSON.stringify(answerSheet);
        break;
      case 3:
        newData.regularity = JSON.stringify(answerSheet);
        break;
      case 4:
        newData.action = JSON.stringify(answerSheet);
        break;
      case 5:
        newData.readiness = JSON.stringify(answerSheet);
        break;
    }
    // newData.outgoing = JSON.stringify(answerSheet);
    await pb.collection('answers').update(userAnswers.id, newData);
    navigate('/complete', {replace:true});
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
        className='h-full w-full p-5 flex flex-col gap-5'
        onSubmit={onSubmitHandler}>
        <h1 className='text-lg font-extrabold'>오늘 하루도 힘차게 시작해봐요!</h1>
        <motion.ul
          variants={container}
          initial={'hidden'}
          animate={'visible'}
          className='flex flex-col gap-2 w-full h-2/3 overflow-auto'>
          {
            questions.map((item, idx) => {
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