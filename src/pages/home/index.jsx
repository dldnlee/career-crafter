/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS} from 'chart.js/auto'
import { useAtomValue } from "jotai"
import { userData } from "/src/data"
import { CardContainer } from "./components/CardContainer"
import { HomeHeader, } from "./components/HomeHeader"



export function HomePage() {
  const user = useAtomValue(userData);

  return (
    <div className="bg-primary-bg text-white relative w-full h-full overflow-auto pb-40 no-scrollbar::-webkit-scrollbar no-scrollbar">
      <div
        className="w-full flex flex-col items-center relative justify-center gap-4">
        <HomeHeader user={user}/>
        <CardContainer />
      </div>
      <Outlet/>
    </div>
  )
}