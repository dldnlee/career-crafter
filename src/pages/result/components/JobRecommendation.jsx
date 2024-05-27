import { TitleText } from "./TitleText";
import {helix} from 'ldrs';

function Keyword({text, bgColor}) {

  return (
    <p 
      className={`px-4 py-1 mr-2 mb-2 inline-block text-white text-[12px] font-semibold w-fit rounded-full ${bgColor}`}>{text}</p>
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

export function JobRecommendation() {
  helix.register();


  return (
    <div className="flex flex-col gap-5 w-full">
      <TitleText text={'추천 기업'}/> 
      <div className="flex flex-col h-[500px] gap-2 overflow-auto no-scrollbar relative">
        <Job />
        <Job />
        <Job />
        <div className="w-full h-full absolute top-0 left-0 backdrop-blur-md bg-white/20 flex justify-center items-center">
          <div className="px-4 py-6 bg-primary-bg rounded-lg flex flex-col items-center gap-6">
            <l-helix
            size="40"
            speed="2.0"
            color="white"
            ></l-helix>
            <p className="text-center">더욱 전문적인 직업<br></br>추천을 위해 준비중입니다.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
