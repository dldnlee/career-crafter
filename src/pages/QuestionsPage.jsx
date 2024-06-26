import { useNavigate, useParams } from 'react-router-dom';
import arrowLeft from 'src/assets/arrowLeft.png';
import { Loader, RangeInput } from '/src/components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { pb } from '/src/data';
import { useQuestionsPage } from '/src/hooks/useQuestionsPage';
import { CompleteDialog } from '../components/CompleteDialog';



export function QuestionsPage() {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const navigate = useNavigate();

  const {rangeStart, answerSheet, questions, questionType, userAnswers, setAnswerSheet} = useQuestionsPage(category);

  //Event Handlers
  function onChangeFn(e, index) {
    let answers = [...answerSheet];
    answers[index] = parseInt(e.target.value);
    setAnswerSheet(answers);
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
    try {
      setIsLoading(true);
      await pb.collection('answers').update(userAnswers.id, newData);
      setIsLoading(false);
      setComplete(true);
    } catch {
      console.log('upload failed');
    }
  }

  if(isLoading) {
    return <Loader active={isLoading}/>
  }

  return (
    <div className="w-full h-full bg-primary text-white">
      <div className='sticky top-0 left-0 w-full p-6 flex justify-between'>
        <button onClick={() => navigate(-1, {replace:true})}>
          <img src={arrowLeft} alt='뒤로가기' className='invert'/>
        </button>
        <h1 className='text-lg font-semibold'>{category}</h1>
      </div>
      <form
        className='h-full w-full p-5 flex flex-col gap-5'
        onSubmit={onSubmitHandler}>
        <h1 className='text-lg font-semibold'>오늘 하루도 힘차게 시작해봐요!</h1>
        <motion.ul
          transition={{staggerChildren:0.5}}
          className='flex flex-col gap-2 w-full h-2/3 overflow-auto no-scrollbar text-sm text-black'>
          {
            questions.map((item, idx) => {
              if(idx >= rangeStart && idx < (rangeStart + 5) ) {
                return (
                  <motion.li 
                    initial={{x:-100}}
                    transition={{type:'spring', stiffness:100}}
                    animate={{x:0}}
                    key={idx} 
                    className={`flex flex-col bg-white gap-3 p-6 rounded-2xl`}>
                    <RangeInput id={`answer_${idx}`} question={item} onChangeFn={(e) => {onChangeFn(e, idx)}}/>
                  </motion.li>
                )
              }
            })
          }
        </motion.ul>
        <button 
          className='w-full bg-white py-3 rounded-full text-black hover:bg-black/40 hover:text-white'
          >완료
        </button>
      </form>
      <CompleteDialog category={category} active={complete}/>
    </div>
  )
}