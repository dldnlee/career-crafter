import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { pb, userAnswerData, userData, userProgress } from "../data"
import { useEffect, useState } from "react";



function getSum(list) {
  // const sum = list.reduce((partialSum, a) => partialSum + a, 0);
  let count = 0;
  for(let i=0; i<list.length; i++) {
    if(list[i] !== 0) {
      count += 1;
    } 
  }
  return count;
}

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