import { HeaderWithClose, Job } from "src/components"
import { RelatedKeywords } from "../result/components"
import { TitleText } from "../result/components/TitleText"


export function JobPage() {
  return (
    <div className="w-full h-full">
      <HeaderWithClose text={'직무/회사 추천'} />
      <div className="w-full h-full p-6 flex flex-col gap-5">
        <RelatedKeywords />
        <div className="flex overflow-auto no-scrollbar h-[70%] flex-col gap-2 w-full ">
          <TitleText text={'직무 추천'}/>
          {
            Array(10).fill(0).map((_, idx) => (
              <div key={idx}>
                <Job/>
              </div>
            ))
          }
        </div>
      </div>
      </div>
  )
}