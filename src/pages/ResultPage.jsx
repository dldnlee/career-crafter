import { Radar } from "react-chartjs-2"
import { useRadarGraph } from "../hooks/useRadarGraph"
import { Link } from "react-router-dom"
import arrowLeft from 'src/assets/arrowLeft.png';

const keywords = [
  'PM (프로젝트 매니저',
  '인터렉션 개발자',
  '스타트업',
  '중견기업',
  '금융 - 은행',
  'IT'
]

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

  const data = {
    labels: [
      '외향성',
      '규칙성',
      '직무 준비도',
      '행동성',
      '도전성'
    ],
  
    datasets: [{
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


  return (
    <div className="flex flex-col gap-5">
      <TitleText text={'유형 분석 그래프'} /> 
      <div className="bg-white p-6 rounded-2xl">
        <Radar data={data}/>
      </div>
    </div>
  )
}

function StatAnalysis() {
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
    <div className="flex flex-col gap-5">
      <TitleText text={'추천 기업'}/> 
      <Job />
      <Job /> 
      <Job />  
    </div>
  )
}

export function ResultPage() {
  return (
    <div className="w-full h-full text-white">
      <div className="sticky top-0 left-0 w-full py-2 bg-primary-bg">
        <Link to='/main' className="p-3">
          <img src={arrowLeft} alt="뒤로가기" className="invert" />
        </Link>
      </div>
      <div className="w-full h-full no-scrollbar p-3 flex flex-col gap-6 overflow-auto bg-primary-bg">
        <h1 className="w-full text-center text-2xl font-semibold py-6">완료한 것을 축하드립니다!</h1>
        <RelatedKeywords />
        <Stats />
        <StatAnalysis />
        <JobRecommendation />
      </div>
    </div>
  )
}