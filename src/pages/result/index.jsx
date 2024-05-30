import { Celebration, RelatedKeywords, Stats, StatAnalysis, JobRecommendation } from "./components/index.js"
import { HeaderWithClose } from "src/components/Header.jsx";

export function ResultPage() {
  return (
    <div className="w-full h-full text-white">
      <HeaderWithClose text={'최종 분석 결과'}/> 
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