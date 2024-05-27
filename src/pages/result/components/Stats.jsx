import { useRadarGraph } from "src/hooks/useRadarGraph";
import { Radar } from "react-chartjs-2"
import { useEffect, useState } from "react";
import { 
  actionAnswers,
  challengingAnswers,
  outgoingAnswers,
  regularityAnswers } from "src/data";
import { useAtomValue } from "jotai";
import { getPercentage, getSumOfList } from "src/util";
import { TitleText } from "./TitleText";


function Line({text1, text2, number1, number2}) {
  return (
    <div className="w-full flex items-end">
      <div className="w-full">
        <h1>{text1}</h1>
        <div className="w-full bg-gray-700 rounded-full h-1.5 flex justify-end">
          <div
            style={{ width: `${number1}%` }}
            className={`bg-point-color h-1.5 rounded-s-full `}
          ></div>
        </div>
      </div>
      <hr className="h-[10px] border border-white"/>
      <div className="w-full flex flex-col items-end">
        <h1>{text2}</h1>
        <div className="w-full bg-gray-700 rounded-full h-1.5 ">
          <div
            style={{ width: `${number2}%` }}
            className={`bg-white h-1.5 rounded-e-full `}
          ></div>
        </div>
      </div>
    </div>
  )
}


function LineGraph() {
  const outgoing = useAtomValue(outgoingAnswers)
  const challenging = useAtomValue(challengingAnswers)
  const regularity = useAtomValue(regularityAnswers)
  const action = useAtomValue(actionAnswers)
  const [results, setResults] = useState([]);

  useEffect(() => {
    let answers = [outgoing, challenging, regularity, action];
    let answerResults = [];
    console.log(getPercentage(50 - getSumOfList(outgoing)))
    console.log(getPercentage(getSumOfList(outgoing)))

    answers.forEach((item) => {
      let check = {
        first : getPercentage(50 - getSumOfList(item)),
        second: getPercentage(getSumOfList(item))
      }
      answerResults.push(check);
    })

    setResults(answerResults);

  },[])



  return (
    <div className="w-full p-4 py-6 flex flex-col gap-5 bg-secondary-bg rounded-xl">
      <Line text1={'내향성'} text2={'외향성'} number1={results[0]?.first} number2={results[0]?.second}/>
      <Line text1={'안전성'} text2={'도전성'} number1={results[1]?.first} number2={results[1]?.second}/>
      <Line text1={'자유성'} text2={'규칙성'} number1={results[2]?.first} number2={results[2]?.second}/>
      <Line text1={'기획형'} text2={'행동성'} number1={results[3]?.first} number2={results[3]?.second}/>
    </div>
  )
}

export function Stats() {
  const {stats} = useRadarGraph();

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 50
    }
    }
  }

  const data = {
    labels: [
      '외향성',
      '규칙성',
      '직무 준비도',
      '행동성',
      '도전성'
    ],
  
    datasets: [{
      label: '나의 직무 성향',
      data: [...stats],
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

  return (
    <div className="flex flex-col gap-5">
      <TitleText text={'유형 분석 그래프'} /> 
      <LineGraph />
      <div className="bg-white p-6 rounded-2xl">
        <Radar data={data} options={options}/>
      </div>
    </div>
  )
}