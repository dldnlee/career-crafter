import { Radar } from "react-chartjs-2"
import { useRadarGraph } from "../hooks/useRadarGraph"
import { Link } from "react-router-dom"
import arrowLeft from 'src/assets/arrowLeft.png';
import whiteChar from 'src/assets/whiteCharacter.svg';
import {motion} from 'framer-motion';
import { useEffect, useState } from "react";
import { 
  actionAnswers,
  challengingAnswers,
  outgoingAnswers,
  pb, 
  regularityAnswers } from "src/data";
import { useAtomValue } from "jotai";
import { getPercentage, getSumOfList } from "src/util";


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


function Keyword({text, bgColor}) {

  return (
    <p 
      className={`px-4 py-1 mr-2 mb-2 inline-block text-white text-[12px] font-semibold w-fit rounded-full ${bgColor}`}>{text}</p>
  )
}

function TitleText({text}) {
  return (
    <>
      <h1 className="text-white text-2xl font-semibold">{text}</h1>
    </>
  )
}

function RelatedKeywords() {
  const [keywords, setKeywords] = useState([]);


  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth'));

    async function getKeywords() {
      const record = await pb.collection('users').getOne(`${currentUser.model.id}`);
      const keywords = JSON.parse(record.keywords);
      setKeywords(keywords);
    }

    getKeywords()
  }, [])


  return (
    <div className="flex flex-col gap-5">
      <TitleText text={'나의 관련 키워드'}/>
      <div className="">
        {
          keywords.map((item, idx) => {
            return (
              <p key={idx} className="px-4 py-1 mr-2 mb-2 inline-block text-white text-sm font-semibold w-fit rounded-full bg-blue-500">{item}</p>
            )
          })
        }
      </div>
    </div>
  )
}


function Stats() {
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

  console.log(stats);


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

function StatAnalysis() {
  const outgoing = useAtomValue(outgoingAnswers)
  const challenging = useAtomValue(challengingAnswers)
  const regularity = useAtomValue(regularityAnswers)
  const action = useAtomValue(actionAnswers)



  return (
    <div className="flex flex-col gap-5">
      <TitleText text={'요인별 분석'} />
      <div className="flex flex-col gap-2">
        <div className="bg-white text-black rounded-lg p-3 flex flex-col gap-2">
          <h3 className="text-lg font-semibold">외향성: 내점수 - 80%, 평균 점수 -70%</h3>
          <ul className="text-sm list-disc list-inside">
            <li>너구리님은 외향적인 성향이 강한 분이시군요</li>
            <li>너구리님은 외향적인 성향이 강한 분이시군요</li>
            <li>너구리님은 외향적인 성향이 강한 분이시군요</li>
          </ul>
        </div>
        <div className="bg-white text-black rounded-lg p-3 flex flex-col gap-2">
          <h3 className="text-lg font-semibold">외향성: 내점수 - 80%, 평균 점수 -70%</h3>
          <ul className="text-sm list-disc list-inside">
            <li>너구리님은 외향적인 성향이 강한 분이시군요</li>
            <li>너구리님은 외향적인 성향이 강한 분이시군요</li>
            <li>너구리님은 외향적인 성향이 강한 분이시군요</li>
          </ul>
        </div>
      </div>
    </div>

  )
}

function Job() {
  return (
    <div className="w-full bg-white text-black flex flex-col gap-2 px-3 py-2 rounded-lg">
      <div>
        <h1 className="font-semibold">PixelPioneer Studio</h1>
        <p className="text-sm text-gray-500 text-semibold">프론트개발자 / 초봉300만</p>
      </div>
      <div className="">
        <Keyword text={'IT/소프트웨어'} bgColor={'bg-black'}/>
        <Keyword text={'IT/소프트웨어'} bgColor={'bg-black'}/>
        <Keyword text={'IT/소프트웨어'} bgColor={'bg-black'}/>
      </div>
    </div>
  )
}

function JobRecommendation() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <TitleText text={'추천 기업'}/> 
      <div className="flex flex-col h-[500px] gap-2 overflow-auto no-scrollbar">
        <Job />
        <Job />
        <Job />
      </div>
    </div>
  )
}

function Celebration() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-6">
      <motion.img
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      transition={{duration:1}}
      src={whiteChar} alt="하얀 캐릭터" className="size-[200px]" />
      <motion.h1
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:2}}
      className="w-full text-center text-2xl font-semibold">완료한 것을 축하드립니다!</motion.h1>
    </div>
  )
}

export function ResultPage() {
  return (
    <div className="w-full h-full text-white">
      <div className="sticky top-0 left-0 w-full px-3 py-2 bg-primary-bg shadow-2xl flex">
        <Link to='/main' className="w-fit p-2">
          <img src={arrowLeft} alt="뒤로가기" className="invert size-[30px]" />
        </Link>
      </div>
      <div className="w-full h-full no-scrollbar py-3 px-6 pb-10 flex flex-col gap-6 overflow-auto bg-primary-bg">
        <Celebration />
        <RelatedKeywords />
        <Stats />
        <StatAnalysis />
        <JobRecommendation />
      </div>
    </div>
  )
}