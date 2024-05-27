import { useEffect } from "react";
import { 
  actionAnswers,
  challengingAnswers,
  outgoingAnswers,
  regularityAnswers,
  readinessAnswers } from "src/data";
import {useAtomValue} from 'jotai';
import { userAnalysis } from "src/algorithm/userAnalysis";
import { getSumOfList, getPercentage } from "src/util";
import { 
  outgoingAnalysis,
  challengingAnalysis,
  regularityAnalysis,
  actionAnalysis,
  readinessAnalysis } from "src/data/analysisText";

import { useState } from "react";



export function useResults() {
  const outgoing = useAtomValue(outgoingAnswers);
  const challenging = useAtomValue(challengingAnswers);
  const regularity = useAtomValue(regularityAnswers);
  const action = useAtomValue(actionAnswers);
  const readiness = useAtomValue(readinessAnswers);

  const [outgoingMsg, setOutgoingMsg] = useState();
  const [challengingMsg, setChallengingMsg] = useState();
  const [regularityMsg, setRegularityMsg] = useState();
  const [actionMsg, setActionMsg] = useState();
  const [readinessMsg, setReadinessMsg] = useState();


  useEffect(() => {
    const outgoingPercentage = getPercentage(getSumOfList(outgoing), 50); // 외향적 점수 percentage 구하기
    console.log(getSumOfList(outgoing));
    setOutgoingMsg({
      msg : userAnalysis(outgoingPercentage, outgoingAnalysis.avg, outgoingAnalysis.below, outgoingAnalysis.above),
      score : outgoingPercentage
    });

    const challengingPercentage = getPercentage(getSumOfList(challenging), 50); // 외향적 점수 percentage 구하기
    setChallengingMsg({
      msg : userAnalysis(challengingPercentage, challengingAnalysis.avg, challengingAnalysis.below, challengingAnalysis.above),
      score: challengingPercentage
    });

    const regularityPercentage = getPercentage(getSumOfList(regularity), 50); // 외향적 점수 percentage 구하기
    setRegularityMsg({
      msg : userAnalysis(regularityPercentage, regularityAnalysis.avg, regularityAnalysis.below, regularityAnalysis.above),
      score: regularityPercentage
    });

    const actionPercentage = getPercentage(getSumOfList(action), 50); // 외향적 점수 percentage 구하기
    setActionMsg({
      msg : userAnalysis(actionPercentage, actionAnalysis.avg, actionAnalysis.below, actionAnalysis.above),
      score: actionPercentage
    });

    const readinessPercentage = getPercentage(getSumOfList(readiness), 50); // 외향적 점수 percentage 구하기
    setReadinessMsg({
      msg : userAnalysis(readinessPercentage, readinessAnalysis.avg, readinessAnalysis.below, readinessAnalysis.above),
      score: readinessPercentage
    });
  }, [])

  return {
    outgoingMsg, 
    challengingMsg, 
    regularityMsg, 
    actionMsg, 
    readinessMsg,
    outgoingAnalysis,
    challengingAnalysis,
    regularityAnalysis,
    actionAnalysis,
    readinessAnalysis
  };
}