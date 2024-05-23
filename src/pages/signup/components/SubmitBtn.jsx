import { pb } from "/src/data";
import { initStats, signupData, initAnswers } from "/src/data";
import { useAtomValue } from "jotai";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../components";


export function SubmitBtn({index}) {
  const [visible, setVisible] = useState(false);
  const stats = useAtomValue(initStats);
  const userData = useAtomValue(signupData);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if(index === 5) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [index])
  
  async function clickHandler() { 
    let signupData;
    signupData = {...userData};
    signupData.initstats = JSON.stringify(stats);
    
    try {
      setLoading(true);
      const record = await pb.collection('users').create(signupData);
      await pb.collection('users').authWithPassword(signupData.email, signupData.password);
      const answerData = {
        'user': record.id,
        "outgoing": JSON.stringify(initAnswers),
        "challenging": JSON.stringify(initAnswers),
        "regularity": JSON.stringify(initAnswers),
        "action": JSON.stringify(initAnswers),
        "readiness": JSON.stringify(initAnswers)
      }
      await pb.collection('answers').create(answerData);
      setLoading(false);
      navigate('/signup/complete');
    } catch {
      console.log('register failed');
    }
  }

  if(loading) return (<Loader active={loading}/> )

  return (
    <button 
      onClick={clickHandler}
      type='button'
      className={`w-full bg-point-color hover:bg-point-color/60 text-white py-2 ${visible ? 'block' : 'invisible'} rounded-full`}>다음</button>
  )
}