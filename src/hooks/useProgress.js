import { useAtomValue, useSetAtom } from "jotai"
import { userAnswerData, userProgress } from "/src/data"
import { useEffect } from "react";

import { getSum } from "/src/util";


export async function useProgress() {
  // const user = useAtomValue(userData);
  const userAnswers = useAtomValue(userAnswerData);
  // const record = await pb.collection('answers').getFirstListItem(`user="${user.id}"`);
  const setProgress = useSetAtom(userProgress);
  useEffect(() => { 
    if (!userAnswers) return;
    let totalSum = 0;
    totalSum += getSum(JSON.parse(userAnswers.outgoing));
    totalSum += getSum(JSON.parse(userAnswers.challenging));
    totalSum += getSum(JSON.parse(userAnswers.regularity));
    totalSum += getSum(JSON.parse(userAnswers.action));
    totalSum += getSum(JSON.parse(userAnswers.readiness));
    setProgress(totalSum);
  }, [userAnswers])

}