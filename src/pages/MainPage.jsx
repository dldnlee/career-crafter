import Header from "src/components/Header"
import horse3d from "src/assets/horse3d.png"
import plus_square from "src/assets/plus_square.png"
import lion from 'src/assets/lion.png'
import scorpion from 'src/assets/scorpion.png'
import goat from 'src/assets/goat.png'
import { useEffect, useState } from "react"
import {motion} from 'framer-motion'
import { Outlet, useNavigate } from "react-router-dom"
import { Radar } from "react-chartjs-2"
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS} from 'chart.js/auto'

const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: '나의 이전 직무 상황',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: '나의 현재 직무 상황',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

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
        <Radar data={data} />
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

function NPC({name, image, clickHandler}) {
  return (
    <motion.button 
      whileHover={{scale:1.1}}
      whileTap={{scale:0.9}}
      type='button'
      className="w-[120px] flex flex-col items-center gap-2 bg-white shadow-lg  p-2 pt-4 rounded-2xl"
      onClick={clickHandler}>
        <img src={image} alt="" className="w-[50px]"/>
        <p>{name}</p>
    </motion.button>
  )
}

function NPCContainer() {
  const navigate = useNavigate();

  function redirect(name) {
    navigate(`survey/${name}`);
  }

  return(
    <div className="w-full px-14">
      <h3 className="w-full text-center py-4 border-b">다양한 친구들과 대화해보세요!</h3>
      <div className="flex justify-center items-center w-full gap-4 py-5">
        <NPC name='스펙이' image={lion} clickHandler={() => redirect('스펙이')} />
        <NPC name='취향이' image={scorpion} clickHandler={() => redirect('취향이')} />
        <NPC name='관심이' image={goat} clickHandler={() => redirect('관심이')} />
      </div>
    </div>
  )
}

export function MainPage() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('pocketbase_auth')) {
      const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth'));
      setUser(currentUser.model);
    }
  }, [])


  return (
    <div className="bg-white relative w-full h-full overflow-auto">
      <Header clickHandler2={() => navigate('settings')}/>
      <div
        className="w-full py-10 flex flex-col items-center justify-center gap-4">
        <h1 className="text-xl font-semibold">안녕하세요 {user?.name}님,</h1>
        <p className="mb-6 px-5 py-3 shadow-lg rounded-lg max-w-2/3">오늘은 어떤 내용을 작성 해볼까요?</p>
        <img src={horse3d} alt="" className="w-1/2" />
        <NPCContainer/>
      </div>
      <WorkPref/>
      <KeywordPref/>
      <Outlet/>
    </div>
  )
}