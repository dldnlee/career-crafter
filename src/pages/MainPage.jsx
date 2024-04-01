import Header from "src/components/Header"
import horse3d from "src/assets/horse3d.png"
import plus_square from "src/assets/plus_square.png"


function WorkPref() {
  return (
    <div className="py-5 px-10 bg-gray-50">
      <div className="flex justify-between pb-4 items-center">
        <button className="none w-[25px] h-[25px]"></button>
        <h2 className="text-2xl font-semibold">나의 직무 성향</h2>
        <button className="w-[25px] h-[25px] flex justify-center items-center">
          <img src={plus_square} alt="" className="w-full"/>
        </button>
      </div>
      <div className="w-full py-10 flex justify-center items-center border-t border-b border-gray-400">
        <div className="w-[200px] h-[200px] bg-gray-300"></div>
      </div>
    </div>
  )
}

function KeywordPref() {
  return (
    <div className="py-5 px-10 bg-white">
      <div className="flex justify-between pb-4 items-center">
        <button className="none w-[25px] h-[25px]"></button>
        <h2 className="text-2xl font-semibold">관심 키워드</h2>
        <button className="w-[25px] h-[25px] flex justify-center items-center">
          <img src={plus_square} alt="" className="w-full"/>
        </button>
      </div>
      <div className="w-full py-10 flex justify-center items-center border-t border-b border-gray-400">
        <div className="w-[200px] h-[200px] bg-gray-300"></div>
      </div>
    </div>
  )
}


export function MainPage() {
  return (

    <div>
      <Header />
      
      <div className="w-full py-10 flex flex-col items-center justify-center">
        <p className="mb-6 px-5 py-3 shadow-lg rounded-lg">오늘은 어떤 내용을 작성 해볼까요?</p>
        <img src={horse3d} alt="" className="w-1/2" />
      </div>
      <WorkPref />
      <KeywordPref />
    </div>
  )
}