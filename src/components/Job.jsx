import { Keyword } from "./Keyword"

export function Job() {
  return (
    <div className="w-full bg-white text-black flex flex-col gap-2 px-3 py-2 rounded-lg">
      <div>
        <h1 className="font-semibold">PixelPioneer Studio</h1>
        <p className="text-sm text-gray-500 text-semibold">프론트개발자 / 초봉300만</p>
      </div>
      <div className="flex overflow-hidden no-scrollbar">
        <Keyword text={'IT/소프트웨어'} bgColor={'bg-black'}/>
        <Keyword text={'IT/소프트웨어'} bgColor={'bg-black'}/>
        <Keyword text={'IT/소프트웨어'} bgColor={'bg-black'}/>
      </div>
      
    </div>
  )
}