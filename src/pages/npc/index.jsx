import close from 'src/assets/close.svg';
import { Link } from 'react-router-dom';
import prefChar from 'src/assets/prefChar.svg'
import biasChar from 'src/assets/biasChar.svg'
import specChar from 'src/assets/specChar.svg'
import { Playground } from './components/Playground';
import { NPCProgress } from './components/NPCProgress';
import { useAtomValue } from 'jotai';
import { 
  actionAnswers, 
  challengingAnswers, 
  outgoingAnswers, 
  readinessAnswers, 
  regularityAnswers } from 'src/data';
import { useEffect, useState } from 'react';
import { getPercentage, getSum } from '../../util';


export function NPCPage() {
  const outgoing = useAtomValue(outgoingAnswers);
  const challenging = useAtomValue(challengingAnswers);
  const regularity = useAtomValue(regularityAnswers);
  const action = useAtomValue(actionAnswers);
  const readiness = useAtomValue(readinessAnswers);
  const [prefProgress, setPrefProgress] = useState(0);
  const [biasProgress, setBiasProgress] = useState(0);
  const [specProgress, setSpecProgress] = useState(0);


  useEffect(() => {
    // 취향이 진도율
    const pref = getSum(outgoing) + getSum(challenging);
    setPrefProgress(getPercentage(pref, 20));
    
    // 성향이 진도율
    const bias = getSum(regularity) + getSum(action);
    setBiasProgress(getPercentage(bias, 20));

    // 취향이 진도율
    const spec = getSum(readiness);
    setSpecProgress(getPercentage(spec, 10));
  }, [outgoing, challenging, regularity, action, readiness]);



  return (
    <div>
      <div className='w-full p-3 flex justify-between items-center'>
        <h1 className='text-white text-xl font-extrabold'>NPC 질문</h1>
        <Link to='/main'>
          <img src={close} alt="" className='size-[30px] invert'/>
        </Link>
      </div>
      <div className='w-full p-4'>
        <Playground />
      </div>
      <div className='w-full p-4'>
        <NPCProgress charImg={prefChar} percentage={prefProgress}/>
        <NPCProgress charImg={biasChar} percentage={biasProgress}/>
        <NPCProgress charImg={specChar} percentage={specProgress}/>
        
      </div>
    </div>
  )
}