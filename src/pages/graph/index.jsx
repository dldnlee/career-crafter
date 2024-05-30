import { useRadarGraph } from "src/hooks/useRadarGraph"
import {motion} from 'framer-motion'
import { Radar } from "react-chartjs-2"
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS} from 'chart.js/auto'
import { HeaderWithBack } from "src/components"
import {useAtomValue} from 'jotai'
import { useEffect, useState } from "react";
import { 
  actionAnswers,
  challengingAnswers,
  outgoingAnswers,
  regularityAnswers } from "src/data";
import { getPercentage, getSumOfList } from "src/util";



function StatsCard() {
  const {data} = useRadarGraph();

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 50
    }
    }
  }

  return (
      <div
      className="w-full h-[420px] text-black font-semibold text-xl rounded-2xl relative bg-gradient-to-tl from-white to-[#ebffcc] flex justify-center items-center">
        <Radar data={data} options={options}/>
      </div>
  )
}

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


export function GraphPage() {
  return (
    <div className="w-full h-full text-white">
      <HeaderWithBack path='/main'/> 
      <div className="w-full h-full p-4 flex flex-col gap-4 items-center">
        <h1 className="text-xl font-semibold">나의 직무 성향 그래프</h1>
        <StatsCard />
        <LineGraph />
        <p>*현재까지 답변한 내용에 대한 분석입니다</p>

      </div>
      
      
    </div>
  )
}