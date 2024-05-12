import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { userAnswerData } from "../data";
import { useState } from "react";
import { getPoints } from "../util";

export function useRadarGraph() {
  
  const userAnswers = useAtomValue(userAnswerData);
  const [stats, setStats] = useState([]); 

  useEffect(() => {
    let listOfStats = [];
    if(!userAnswers) return;
    listOfStats[0] = getPoints(JSON.parse(userAnswers.outgoing));
    listOfStats[1] = getPoints(JSON.parse(userAnswers.regularity));
    listOfStats[2] = getPoints(JSON.parse(userAnswers.readiness));
    listOfStats[3] = getPoints(JSON.parse(userAnswers.action));
    listOfStats[4] = getPoints(JSON.parse(userAnswers.challenging));

    setStats(listOfStats);


  }, [userAnswers])


  const data = {
    labels: [
      '외향성',
      '규칙성',
      '직무 준비도',
      '행동성',
      '도전성'
    ],
    datasets: [{
      label: '나의 이전 직무 상황',
      data: [40, 40, 50, 40, 20],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: '나의 현재 직무 상황',
      data: stats,
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

  return {data};
}