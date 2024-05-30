import close from 'src/assets/close.svg';
import { Link } from 'react-router-dom';
import prefChar from 'src/assets/prefChar.png'
import biasChar from 'src/assets/biasChar.png'
import specChar from 'src/assets/specChar.png'
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
import { HeaderWithClose } from 'src/components';


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
      <HeaderWithClose text='NPC 질문'/> 
      <div className='w-full p-4'>
        <Playground />
      </div>
      <div className='w-full p-4 flex flex-col gap-2'>
        <NPCProgress charImg={biasChar} percentage={prefProgress} charName={'초록이'}/>
        <NPCProgress charImg={prefChar} percentage={biasProgress} charName={'파랑이'}/>
        <NPCProgress charImg={specChar} percentage={specProgress} charName={'노랑이'}/>
        
      </div>
    </div>
  )
}