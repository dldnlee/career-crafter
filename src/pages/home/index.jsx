/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS} from 'chart.js/auto'
import { useSetAtom, useAtom } from "jotai"
import { userAnswerData, userData, pb, headerState } from "/src/data"
import { CardContainer } from "./components/CardContainer"
import { HomeHeader, } from "./components/HomeHeader"



export function HomePage() {
  const [user, setUser] = useAtom(userData);
  const setUserAnswers = useSetAtom(userAnswerData);
  const setHeader = useSetAtom(headerState);

  useEffect(() => {
    if(localStorage.getItem('pocketbase_auth')) {
      const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth'));
      setUser(currentUser.model);
    }
  }, [])

  useEffect(() => {
    async function getUserAnswers() {
      try {
        setHeader(false);
        const record = await pb.collection('answers').getFirstListItem(`user="${user.id}"`, {requestKey:null});
        setUserAnswers(record);
        console.log(record);
        setHeader(true);
      } catch {
        console.error('failed');
      }
    }
    getUserAnswers();
  }, [user])

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