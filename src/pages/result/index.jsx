import { Celebration, RelatedKeywords, Stats, StatAnalysis, JobRecommendation } from "./components/index.js"
import { Link } from "react-router-dom"
import arrowLeft from 'src/assets/arrowLeft.png';

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