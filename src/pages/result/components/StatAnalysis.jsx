import { useResults } from "src/hooks/useResults";
import { TitleText } from "./TitleText";



function AnalysisBox({analysisText, avgScore, userScore, category}) {
  return (
    <div className="bg-white text-black rounded-lg p-3 flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{category}: 내점수 - {userScore}%, 평균 점수 -{avgScore}%</h3>
      <p>{analysisText}</p>
    </div>
  )
}

export function StatAnalysis() {

  const {
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
  } = useResults();

  return (
    <div className="flex flex-col gap-5">
      <TitleText text={'요인별 분석'} />
      <div className="flex flex-col gap-2">
        <AnalysisBox analysisText={outgoingMsg?.msg} avgScore={outgoingAnalysis.avg} userScore={outgoingMsg?.score} category={'외향성'}/>
        <AnalysisBox analysisText={challengingMsg?.msg} avgScore={challengingAnalysis.avg} userScore={challengingMsg?.score} category={'도전성'}/>
        <AnalysisBox analysisText={regularityMsg?.msg} avgScore={regularityAnalysis.avg} userScore={regularityMsg?.score} category={'규칙성'}/>
        <AnalysisBox analysisText={actionMsg?.msg} avgScore={actionAnalysis.avg} userScore={actionMsg?.score} category={'행동성'}/>
        <AnalysisBox analysisText={readinessMsg?.msg} avgScore={readinessAnalysis.avg} userScore={readinessMsg?.score} category={'직업 준비도'}/>
      </div>
    </div>

  )
}
