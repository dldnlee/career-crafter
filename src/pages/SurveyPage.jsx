import { useEffect } from "react";






async function GetQuestions() {
  try {
    fetch('https://www.career.go.kr/inspct/openapi/test/questions?apikey=[인증키]&q=[주요능력효능검사]') // 인증키 미삽입
  } catch {
    console.log('failed to get data');
  }
}


export function SurveyPage() {
  useEffect(() => {
    console.log('this is the survey page')
  }, [])


  return (
    <div>
      Hello this is the survey page
    </div>
  )
}